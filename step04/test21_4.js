//3월 22일 수요일- 실습

var prompt = require('prompt');

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
