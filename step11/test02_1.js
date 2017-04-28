//데이터 조회 명령 : select ~ from

const mysql = require('mysql')

const connection = mysql.createConnection({
  database: 'webappdb',
  user: 'webapp',
  password: '1111'
})

connection.connect()

connection.query('select mno, name, tel from memb', function(error, results) {
  console.log('결과를 가져왔음')
  if (error) throw error;


  for (var row of results) {
    console.log(row.mno, row.name, row.tel)
  }
})


connection.end()
console.log('MySQL 서버와의 연결 끊기가 예약되었음!')
