var prompt = require('prompt')

var studentList = [
  ['홍길동1', 100, 100, 100, 300, 100],
  ['홍길동2', 90, 90, 90, 270, 90],
  ['홍길동3', 80, 80, 80, 240, 80],
  ['홍길동4', 70, 70, 70, 210, 70],
  ['홍길동5', 60, 60, 60, 180, 60]
];

prompt.start()

inputCommand()

function inputCommand(){
  prompt.get(['command'], function(err, result) {
    switch (result.command) {
      case 'quit':
        console.log('안녕')
        return;
      case 'list':
        console.log(['학생 목록'])
        for (var student of studentList) {
          console.log(student[0] + ", " +
          student[1] + ", " +
          student[2] + ", " +
          student[3] + ", " +
          student[4] + ", " +
          student[5]);
        }
        break;
        case 'add':
          console.log('[학생 입력]')
          break;

        case 'delete':
          console.log(['학생 삭제'])
          break;
      default:
      console.log('해당 명령은 지원하지 않습니다.')

    }
    inputCommand()
  }
)
}
