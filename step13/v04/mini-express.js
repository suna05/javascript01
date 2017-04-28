/*
4월 26일 수요일- 미니 익스프레스 만들기
*/
var http = require('http')
var url = require('url')
var path = require('path') //경로만 관리
var fs = require('fs')

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

var server = http.createServer(function (request, response) {
  var urlInfo = url.parse(request.url, true) //urlInfo객체 안에 있는 query라는 객체안에 변수=값, 변수=값...이 저장됨.


  var handler = null;
  if (request.method == 'GET') {  //test.js에서 get요청만 받음
    handler = getHandler[urlInfo.pathname]
    request.query = urlInfo.query //원래 request.query안에는 객체가 없어서 urlInfo.query 객체를 담아줌
  } else if (request == 'POST') {
    handler = postHandler[urlInfo.pathname]
  }


  if (handler) {
    handler(request, response)
  } else {
    notFound(request, response)
  }
})

module.exports = function() {
  return {
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
