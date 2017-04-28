// 4월 24일 월요일
//클라이언트로 출력하기 - html 출력하기


//1) http 모듈 로딩
const http = require('http')

const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네!')

  response.writeHead(200, {
    'Content-Type' : 'text/html;charset=UTF-8'  //mime type
  })

  response.write('<html> \
  <head> \
    <title>테스트</title> \
  </head> \
    <body> \
      <h1>안녕하세요</h1> \
    </body> \
    </html>')
  response.end();
})


server.listen(8888)

console.log("server 실행 중...")


//서버에서 결과를 보내면 클라이언트는 출력한다.
//그러나, 서버에서 보낸 데이터가 어떻게 인코딩된 데이터인지 모르기 때문에
//한글을 출력할 때 깨진다.
