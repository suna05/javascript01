/*
4월 26일 수요일- 미니 익스프레스 만들기
*/
var http = require('http')
var server = http.createServer(function (request, response) {
  response.end()
})

module.exports = function() {
  return {
    listen(port, cb) {
      server.listen(port, cb) //port번호로 서버를 시작시킨다.
                                //서버가 가동되면 listening이라는 이벤트 발생
                                //지정된 함수 'cb' 함수가 호출된다.
                                //서버가 시작된 후 알림을 받고 싶다면 두 번째 파라미터에 함수를 전달.
    }
  }
}
