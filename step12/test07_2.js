// 4월 25일 화요일
/*
=> 'hello.do' 서비스를 추가하자.
  즉 else if문을 추가해야한다.
=> 문제점
  서비스를 추가할 때마다 else if문을 추가해야 한다.
  서비스가 추가 될 수록 소스 코드를 읽기 어려워진다.
=> 해결책?
  함수로 묶어 놓으면 읽기 쉽다.
  test07_3.js를 보라

}
*/
const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer(function(request, response) {
  var urlInfo = url.parse(request.url, true)

  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })

  if(urlInfo.pathname == '/get.do') {
    response.write('GET 요청 처리!\n')
    response.write('name = ' + urlInfo.query.name + '\n')
    response.write('age = ' + urlInfo.query.age + '\n')
    response.write('tel = ' + urlInfo.query.tel + '\n')
    response.end()

  } else if( urlInfo.pathname == '/post.do') {
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
  }else if (urlInfo.pathname == '/hello.do') {
    response.write('안녕하세요.')
    response.end()

  } else {
    response.write('해당 URL을 지원하지 않습니다.')
    response.end()
  }
})


server.listen(8888)

console.log("server 실행 중...")
