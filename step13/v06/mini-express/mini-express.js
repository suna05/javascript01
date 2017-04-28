/*
4월 26일 수요일- 미니 익스프레스 만들기
*/
var http = require('http')
var url = require('url')
var path = require('path') //경로만 관리
var fs = require('fs')
var qs = require('querystring')

var envVars = {}
var getHandler = {}
var postHandler = {}

function notFound(request, response) {
  response.writeHead(200, {
    'Content-Type' : 'text/html;charset=UTF-8'
  })

  fs.readFile(path.join(__dirname, './html/http-404.html'), function(err, data) {
    if(err) throw err
      response.end(data)
  })
  //console.log(path.join(__dirname, './html/http-404.html'))
  // response.end('해당 자원을 찾을 수 없습니다.')
}

function isStaticResource(method, servicePath) {
  if (method != 'GET') //정적자원은 GET요청에 대해서만 처리
    return false
  //환경변수에서 'static_dir'이라는 이름으로 저장된 경로가 있다면
  //그 경로에서 클라이언트가 요구하는 파일이 있는지 찾아본다.
  // 있다면  true, 없다면 false를 리턴
  if(envVars.static_dir) {
    // console.log(path.join(__dirname, '..',envVars.static_dir, servicePath))
    return fs.existsSync(path.join(__dirname, '..', envVars.static_dir, servicePath))
  }
  return false
}

function processStaticResource(servicePath, response) {
  var filePath = path.join(__dirname, '..', envVars.static_dir, servicePath)
  fs.readFile(filePath, function(err, data) {
    if (err) {
      response.write('URL 자원 처리 중 오류 발생')
      response.end()
      return
    }
    response.end(data) //data를 그대로 뿌려줌
  })
}


function findHandler(method, servicePath) {
  if (method == 'GET') {
    return getHandler[servicePath]
  } else if (method == 'POST') {
    return postHandler[servicePath]
  }
  return null
}

var server = http.createServer(function (request, response) {
  var urlInfo = url.parse(request.url, true) //urlInfo객체 안에 있는 query라는 객체안에 변수=값, 변수=값...이 저장됨.


  if (isStaticResource(request.method, urlInfo.pathname)) {
    processStaticResource(urlInfo.pathname, response)
    return;
  }

  var handler = findHandler(request.method, urlInfo.pathname)

  if (handler) {
    if (request.method == 'GET') {
      request.query = urlInfo.query //원래 request.query안에는 객체가 없어서 urlInfo.query 객체를 담아줌
      handler(request, response)
    } else if (request.method == 'POST') {
    var queryString = ''
    request.on('data', function(data) {
      queryString += data
    })
    request.on('end', function() {
      //다 받았으면 queryString 분석해라
      request.query = qs.parse(queryString)
      handler(request, response)
    })
  }
  } else {
    notFound(request, response)
  }
})

module.exports = function() {
  return {
    //이 프레임 워크에서 사용할 변수를 설정한다.
    use(name, value) {
      envVars[name] = value
    },

    //주어진 url로 GET 요청이 들어왔을 때 호출될 함수를 등록
    get(url, handler) {  //this가 없는이유: 모듈 함수이기 때문에
      getHandler[url] = handler  // get이라는 함수가 호출 될 때 url이름으로 함수르 담아놓음.
    },
    post(url, handler) {  //this가 없는이유: 모듈 함수이기 때문에
      postHandler[url] = handler
    },
    //웹 서버를 시작시킨다.
    listen(port, cb) {
      server.listen(port, cb)
    }
  }
}
