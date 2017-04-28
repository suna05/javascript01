/*서비스 핸들러를 정의한 모듈
=> 테스트 방법 : test.html을 웹 브라우저로 로딩하여 확인하라!
*/

var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

//var cons = require('consolidate')

var router = express.Router()


router.get('/test.do', function(request, response) {
  response.end('/aa/test.do~~~~~~~')
})

router.get('/test2.do', function(request, response) {
  response.end('/aa/test2.do.....')
})

module.exports = router
// app.get('/aa/test3.do', function(request, response) {
//   response.end('/aa/test3.do')
// })
// router.listen(8888, function() {
//   console.log('서버가 시작되었습니다.')
// })
