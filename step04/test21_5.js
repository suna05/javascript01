//3월 21일 - 실습

var prompt = require('prompt');

var studentList=[
  ["홍길동1", 100, 100, 100, 300, 100],
  ["홍길동2", 90, 90, 90, 270, 90],
  ["홍길동3", 80, 80, 80, 240, 80],
  ["홍길동4", 70, 70, 70, 210, 70],
  ["홍길동5", 60, 60, 60, 180, 60]
];

prompt.start();

inputCommand()

//동기방식으로 감쌈
function inputCommand(){
  prompt.get(['command'], function(err,result){  //비동기: 다른애가 얘한테 하라고시킴
    switch (result.command) {
      case 'quit':
        console.log('안녕히가세요!')
        return; //함수 실행을 끝낸다.
      case 'list':
        console.log("[학생 목록]")
        for (var student of studentList) {
          console.log(student[0] + "," +
                      student[1] + "," +
                      student[2] + "," +
                      student[3] + "," +
                      student[4] + "," +
                      student[5]);
        }
        break;
      case  'add':
        console.log("[학생 입력]")
        break;
      case 'delete':
        console.log('[학생 삭제]')
        break;
      default:
        console.log('해당 명령을 지원하지 않습니다')
        break;
    }
    inputCommand();  //반복

  })
}
