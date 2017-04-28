// 4월 25일 화요일
//GET요청과 POST요청의 데이터 다루기
//=>post요청 데이터는 요청 헤더 이후에 전달된다.
//url 모듈의 분석기로 꺼낼 수 없다.
// =>post요청으로  대량의 데이트를 보낼 수 있기때문에 서버쪽에서는 대량의 데이터를 받는 방식으로 처리한다.
//=> 테스트 하는 방법
//1)test06_2.js를 실행하여 웹서버를 가동시킨다.
//2) 웹 브라우저에서 test06_2.html파일을 로딩한다.
//3) 입력 폼에 값을 입련한 후 전송 버튼을 클릭한다.
//4) test06_1.js 입력 값을 확인한다.

const http = require('http')
const url = require('url')
/*query String 분석기 준비
=> name=value&name?=*/
const qs = require('querystring')

const server = http.createServer(function(request, response) {
  var urlInfo = url.parse(request.url, true)
  if(urlInfo.pathname != '/post.do') {
    response.end()
    return
  }

  //1) post요청으로 들어온 데이터를 저장할 변수 준비
  var buf = ''

  //2) post 요청 데이터를 읽을 때마다 'data' 이벤트가 발생하는데,
  //이 이벤트를 처리해야한다. 즉 데이터를 읽을 때마다, 그 읽은 데이터를 data변수에 저장시킨다.
  //=>'data' 이벤트는 클라이언트가 보낸 대량의 데이터 중에서 일부 데이터를 읽을 때마다 발생된다.
  //이렇게 하는 이유는 개발자에게 처리 기회를 주기 위함이다.
  request.on('data', (data) => {
    buf += data
  })

  //3) post요청 데이터 읽기를 마쳤으면 'end' 이벤트가 발생한다.
  //따라서 'end' 이벤트가 발생했을 때 클라이언트 요청을 처리하면 된다.
  request.on('end', () => {
    response.writeHead(200, {
      'Content-Type' : 'text/plain;charset=UTF-8'
    })

    //4)쿼리스트링 분석기를 이용하여 문자열을 객체로 바꾼다.
    var params = qs.parse(buf)

    response.write('name = ' + params.name + '\n')
    response.write('age = ' + params.age + '\n')
    response.write('tel = ' + params.tel + '\n')
    response.end();
  })
})
server.listen(8888)

console.log("server 실행 중...")
