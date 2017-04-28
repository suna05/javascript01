// 4월 25일 화요일
/*
=>서비스를 처리하는 함수를 객체에 묶어서 관리한다.
=> 테스트 방법: test07_2.html을 웹 브라우저로 로딩해서 테스트
*/
const http = require('http')
const url = require('url')
const qs = require('querystring')

//이 객체에는 서비스를 처리할 함수를 저장할 것이다.
// => 서비스 URL:  서비스를 처리하는 함수
var handlerMapping = {}
//객체에 프로퍼티를 추가할 때 특수문자가 있을 경우에 [] 사용
handlerMapping['/get.do'] = (request, response) => {
  response.write('GET 요청 처리!\n')
  response.write('name = ' + request.query.name + '\n')
  response.write('age = ' + request.query.age + '\n')
  response.write('tel = ' + request.query.tel + '\n')
  response.end()
}

handlerMapping['/post.do']  = (request, response) => {
  var buf = ''
  request.on('data', (data) => {
    buf += data
  })
  request.on('end', () => {
    var params = qs.parse(buf)
    response.write('POST 요청 처리!\n')
    response.write('name = ' + params.name + '\n')
    response.write('age = ' + params.age + '\n')
    response.write('tel = ' + params.tel + '\n')
    response.end()
  })
}

handlerMapping['/hello.do'] = (request, response) => {
  response.write('안녕하세요.')
  response.end()
}

function notFound(request, response) {
  response.write('해당 URL을 지원하지 않습니다.')
  response.end()
}

const server = http.createServer(function(request, response) {
  var urlInfo = url.parse(request.url, true)
  if(request.method == "GET") {
    request.query = urlInfo.query  //get요청
  }
  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })

  if(handlerMapping[urlInfo.pathname]) {
    handlerMapping[urlInfo.pathname](request, response)
  } else {
      notFound(request, response)
  }
})


server.listen(8888)

console.log("server 실행 중...")
