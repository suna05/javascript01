//3월 22일 수요일- 실습

var prompt = require('prompt');

prompt.start();

inputCommand()

//동기방식으로 감쌈
function inputCommand(){
  prompt.get(['command'], function(err,result){  //비동기: 다른애가 얘한테 하라고시킴
    console.log(result.command);
    inputCommand();  //반복

})
}
