/*Express 프레임 워크 적용 - 여러 개의 모듈로 서비스 핸들러를 분산하기
=> 테스트 방법 : test.html을 웹 브라우저로 로딩하여 확인하라!
*/

var express = require('express')
var bodyParser = require('body-parser')
var cons = require('consolidate')
var path = require('path')

var app =express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

var router = require('./aa')
app.use('/aa', router)

app.engine('html', cons.handlebars)
app.set('view engine', 'html')
app.set('views', path.join(__dirname , '/template'))

app.get('/test.do', function(request, response) {
  response.render('test', {name: '홍길동'})  //test.html
})


app.get('/test2.do', function(request, response) {
  response.render('test2', {names: ['홍길동','유관순','임꺽정']})
})

app.get('/test3.do', function(request, response) {
  response.render('d/test3', {names: ['홍길동2','유관순2','임꺽정2']})
})

//
// app.post('/post_test.do', function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'})
//   response.write('POST요청 처리!')
//   response.write( '\n' + 'name=' + request.body.name + '\n')
//   response.write('age=' + request.body.age + '\n')
//   response.write('tel=' + request.body.tel + '\n')
//   response.end()
// })

app.listen(8888, function() {
  console.log('서버가 시작되었습니다.')
})
