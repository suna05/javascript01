// 4월 24일 월요일
//요청 정보 다루기 - Quiz2
//=> 사용자로부터 페이지 번호와 개수를 입력받아 학생 목록을 HTMl 페이지로 출력하시오
//요청 예) http://localhost:8888/student/list.do?pageNo=2&pageSize=3
//출력 결과 예) 기존 학생 목록 출력을 참고하라. 간단히 테이블로 출력하라
const http = require('http')
const url = require('url')
const datasource = require('./datasource')
const studentDao = require('./student-dao')

const connection = datasource.getConnection()
studentDao.setConnection(connection)


const server = http.createServer(function(request, response) {
  if ( request.url == '/favicon.ico') {
    response.end();
    return;
  }

  var urlInfo = url.parse(request.url, true) //true: ? 뒤의 값만 잘라서 줌

  if (urlInfo.pathname != '/student/list.do') {
    response.writeHead(404, {
      'Content-Type' : 'text/plain;charset=UTF-8'
    })
    response.end('잘못된 url입니다.')
    return
  }

  var pageNo = parseInt(urlInfo.query.pageNo) ,
      pageSize = parseInt(urlInfo.query.pageSize)

  response.writeHead(200, {
    'Content-Type' : 'text/html;charset=UTF-8'
  })

  response.write('<html> \
      <head> \
        <title>학생목록</title> \
      </head> \
      <body>')
  response.write('<h1>학생목록</h1>')
  // response.write('pageNo=' + pageNo + '<br>')
  // response.write('pageSize=' + pageSize + '<br>')

  studentDao.selectList(pageNo, pageSize ,function(results) {
    response.write('<table border="1"> \
    <thead> \
      <tr><th>번호</th><th>이름</th><th>이메일</th><th>전화</th><th>직장인</th></tr> \
    </thead> \
    <tbody>')
    for(var r of results) {
      response.write('<tr><td>' + r.mno + '</td>')
      response.write('<td>' + r.name + '</td>')
      response.write('<td>' + r.email + '</td>')
      response.write('<td>' + r.tel + '</td>')
      response.write('<td>' + r.work + '</td></tr>')
    }
    response.write('</tbody></table> \
    </body></html>')
    response.end(); //이 응답을 하기 전까지는 client 응답을 기다림

  }, function(error) {
    response.write('DB 오류!')
    response.write('</body></html>')
    response.end();
    throw error; //에러 상세정보 출력
  })
  //여기서 response.end();주면 selectList하기 전에 종료되어버림. (mysql이 비동기이기 때문에)
}) //client 호출이 들어왔을 때 호출할 함수

server.listen(8888)

console.log("server 실행 중...")
