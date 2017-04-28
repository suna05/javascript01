// 4월 24일 월요일
//요청 정보 다루기 - Quiz2
//=> 사용자로부터 페이지 번호와 개수를 입력받아 학생 목록을 HTMl 페이지로 출력하시오
//요청 예) http://localhost:8888/student/list_do?pageNo=2&pageSize=3
//출력 결과 예) 기존 학생 목록 출력을 참고하라. 간단히 테이블로 출력하라
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


  var urlInfo = url.parse(request.url, true)

  //url에서 물음표 앞에 나오는 경로(http://8888 은 제외)
  if (urlInfo.pathname != '/student/list_do') {
    response.end('잘못된 url입니다.')
    return
  }

var urlInfo = url.parse(request.url, true)

  console.log('pageNo=', urlInfo.query.pageNo)
  console.log('pageSize=', urlInfo.query.pageSize)

  var pageNo = urlInfo.query.pageNo
  const mysql = require('mysql')

  const connection = mysql.createConnection({
    database: 'webappdb',
    user: 'webapp',
    password: '1111'
  })

  connection.connect()

  connection.query(
    'select m.mno, m.name, m.tel, m.email, s.work \
    from stud s inner join memb m on s.sno=m.mno  \
    order by m.name asc \
    limit ?, ?',
    [(pageNo) * 3, 3],
    function(error, results) {
      if (error) {
        throw error;
      } else {
        console.log(results)
      }
    }) // connection.query()


  // connection.query(
  //   'select m.mno, m.name, m.tel, m.email, s.work \
  //   from stud s inner join memb m on s.sno=m.mno  \
  //   order by m.name asc limit ?, ?' ,
  //   [2, 3]
  //   , function(error, results) {
  //     console.log('결과를 가져왔음')
  //     if (error) throw error;
  //
  //     console.log(results)
  //   })
  var pageSize = urlInfo.query.pageSize

  response.write(pageNo)

  response.write(pageSize)


  response.end();

})

server.listen(8888)

console.log("server 실행 중...")
