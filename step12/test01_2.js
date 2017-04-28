// 4월 24일 월요일
//http 서버 만들기 - 클라이언트에게 응답하기

//1) http 모듈 로딩
const http = require('http')

const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네!')
  //http응답을 완료한다. 그래야만 클라이언트에게 응답을 완료한다.
  response.end();
})


server.listen(8888)

console.log("server 실행 중...")


//요청이 들어오면 호출할 함수 = request
