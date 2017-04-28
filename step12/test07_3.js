// 4월 25일 화요일
/*
=>한개의 서비스를 한 함수로 묶자!
코드를 해석하기 쉽게 하자!
테스트 방법: test07_2.html을 웹 브라우저로 로딩해서 테스트
=> 문제점
  그럼에도 불구하고 서비스가 추가할 때마다 else if 문을 추가해야 한다.
  해결책? test07_4.js를 보라
*/
const http = require('http')
const url = require('url')
const qs = require('querystring')

function get(request, response) {
  response.write('GET 요청 처리!\n')
  response.write('name = ' + request.query.name + '\n')
  response.write('age = ' + request.query.age + '\n')
  response.write('tel = ' + request.query.tel + '\n')
  response.end()
}

function post(request, response) {
  var buf = ''
  request.on('data', (data) => {
    buf += data
  })
  request.on('end', () => {
    var params = qs.parse(buf)
    response.write('POST 요청 처리!\n')
    response.write('name = ' + params.name + '\n')
    response.write('age = ' + params.age + '\n')
    response.write('tel = ' + params.tel + '\n')
    response.end()
  })
}

function hello(request, response) {
  response.write('안녕하세요.')
  response.end()
}

function notFound(request, response) {
  response.write('해당 URL을 지원하지 않습니다.')
  response.end()
}

const server = http.createServer(function(request, response) {
  var urlInfo = url.parse(request.url, true)
  if(request.method == "GET") {
    request.query = urlInfo.query  //get요청
  }
  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })

  if(urlInfo.pathname == '/get.do') {
    get(request, response)
  } else if( urlInfo.pathname == '/post.do') {
      post(request, response)
  } else if (urlInfo.pathname == '/hello.do') {
      hello(request, response)
  } else {
      notFound(request, response)
  }
})


server.listen(8888)

console.log("server 실행 중...")
