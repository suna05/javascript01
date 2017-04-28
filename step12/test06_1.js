// 4월 25일 화요일
//GET요청과 POST요청의 데이터 다루기
//=>get요청 데이터는 url에서 값을 꺼내면 된다.
//url 모듈의 분석기를 사용하여 값을 꺼낸다.
//=> 테스트 하는 방법
//1)test06_1.js를 실행하여 웹서버를 가동시킨다.
//2) 웹 브라우저에서 test06_1.html파일을 로딩한다.
//3) 입력 폼에 값을 입련한 후 전송 버튼을 클릭한다.
//4) test06_1.js 입력 값을 확인한다.

const http = require('http')
const url = require('url')

const server = http.createServer(function(request, response) {
  var urlInfo = url.parse(request.url, true)
  if(urlInfo.pathname != '/get.do') {
    response.end()
    return
  }

  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })
  //get요청으로 들어온 파라미터 값을 출력
  response.write('name = ' + urlInfo.query.name + '\n')
  response.write('age = ' + urlInfo.query.age + '\n')
  response.write('tel = ' + urlInfo.query.tel + '\n')

  response.end();
})


server.listen(8888)

console.log("server 실행 중...")
