// 4월 24일 월요일
//요청 정보 다루기 - 1)url
//2)GET요청 파라미터 값 꺼내기 응용

const http = require('http')
const url = require('url')

const server = http.createServer(function(request, response) {
  if ( request.url == '/favicon.ico') {
    response.end();
    return;
  }

  console.log('클라이언트 요청이 들어왔네!')

  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })

  //url 분석기 실행
  var urlInfo = url.parse(request.url, true)

  //url에서 물음표 앞에 나오는 경로(http://8888 은 제외)
  if (urlInfo.pathname != '/hello') {
    response.end('잘못된 url입니다.')
    return
  }


  //클라이언트가 name이라는 이름으로 보낸 값을 꺼낸다.
  var name = urlInfo.query.name

  response.write(name + '님 안녕하세요')
  response.end();
})

server.listen(8888)

console.log("server 실행 중...")
