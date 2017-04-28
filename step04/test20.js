//3월 21일 - 로컬 변수와 스택 메모리 - 비동기식
"use strict"

var prompt = require('prompt');

prompt.start();

//비동기 호출 방식 예
//get()함수는 명령창에서 입력 받는 작업을 별도로 시작,
//작업이 완료될 때 까지 기다리지 않고 즉시 리턴한다.
//그래서 비동기 호출임
prompt.get(['a','b'], function(err,result){
  console.log("입력 값 출력 --------------")
  console.log(result.a, result.b)
}
)
console.log("아아아아아아아아아아")

/*
var arr = ['a', 'b']

function f1(err, result) {
  console.log(result.a, result.b)
}

prompt.get(arr, f1);
*/
