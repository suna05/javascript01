/*Express 프레임 워크 적용
=> 테스트 방법 : test.html을 웹 브라우저로 로딩하여 확인하라!
*/

var express = require('express')
var bodyParser = require('body-parser')



var app =express()
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({extended: false}))

const postParameterParser = bodyParser.urlencoded({extended: false})
app.use(postParameterParser)

app.get('/get_test.do', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'})
  response.write('GET요청 처리!')
  response.write('\n' + 'name=' + request.query.name + '\n')
  response.write('age=' + request.query.age + '\n')
  response.write('tel=' + request.query.tel + '\n')
  response.end()
})


app.post('/post_test.do', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'})
  response.write('POST요청 처리!')
  response.write( '\n' + 'name=' + request.body.name + '\n')
  response.write('age=' + request.body.age + '\n')
  response.write('tel=' + request.body.tel + '\n')
  response.end()
})

app.listen(8888, function() {
  console.log('서버가 시작되었습니다.')
})
