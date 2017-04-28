/*get, post요청 처리 테스트
=> 테스트 방법 : test.html을 웹 브라우저로 로딩하여 확인하라!
*/

var miniExpress = require('./mini-express.js')

var app = miniExpress()

app.get('/get_test.do', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'})
  response.write('GET요청 처리!')
  response.write('name=' + request.query.name)
  response.write('age=' + request.query.age)
  response.write('tel=' + request.query.tel)
  response.end()
})


app.post('/post_test.do', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'})
  response.write('POST요청 처리!')
  response.write('name=' + request.query.name)
  response.write('age=' + request.query.age)
  response.write('tel=' + request.query.tel)
  response.end()
})

app.listen(8888, function() {
  console.log('서버가 시작되었습니다.')
})