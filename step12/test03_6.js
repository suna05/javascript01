// 4월 24일 월요일
//요청 정보 다루기 - Quiz
//=> 계산기 서비스를 구현하라!
//요청 예) http://localhost:8080/calculator?a=100&b=200&op=-
//출력 결과 예) 100 -200 = -100
//=> op에 들어갈 연산자: +, -, *, /, %


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
  if (urlInfo.pathname != '/calculator') {
    response.end('잘못된 url입니다.')
    return
  }

//url은 항상 ASCII  코드 값으로 표현해야 한다. ㄷ
//다른 데이터는 URL 인코딩, 즉 아스키 문자화 시켜서 표현한다.
//그래서 '+' 문자는 '%2b' 라는 URL 인코딩하여 전달해야 한다.
//또한 '%'도 URL 인코딩하는데 특별한 기호로 사용되기 때문에,
//'+'문자와 마찬가지로 URL 인코딩한 '%25'라고 해야한다.
  var a = parseInt(urlInfo.query.a)
  var op = urlInfo.query.op
  var b = parseInt(urlInfo.query.b)
  var result = 0

//parseInt 안주면 + 연산에서 a,b를 문자열로 인식해서 8+2=82로 인식. 나머지는 연산 잘됨
  // var a = urlInfo.query.a
  // var op = urlInfo.query.op
  // var b = urlInfo.query.b
  // var result = 0

  switch (op) {
    case '+':
      result = a + b
      break;
    case '-':
      result = a - b
      break;
    case '*':
      result = a * b
      break;
    case '/':
      result = a / b
      break;
    case '%':
      result = a % b
      break;
  }

response.write(a + op + b + '=' + result)


  response.end();
})

server.listen(8888)

console.log("server 실행 중...")
