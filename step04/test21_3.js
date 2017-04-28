//3월 22일 수요일- 실습

var prompt = require('prompt');

prompt.start();

inputCommand()

//동기방식으로 감쌈
function inputCommand(){
  prompt.get(['command'], function(err,result){  //비동기: 다른애가 얘한테 하라고시킴
    if (result.command == 'quit') {
      console.log('안녕히가세요!')
      return; //함수 실행을 끝낸다.
    }
    inputCommand();  //반복

  })
}
