//3월 21일 - 로컬 변수와 스택 메모리 - 동기식
"use strict"

function f1(){
  console.log("f1()... 호출됨");
  for (var i = 0; i< 100000000; i++){
    var d = 3.141592;
    var d2 = 3456.987;
    var result = d / d2 /d2 /d2 /d;
  }
}

//동기 방식 호출 예
f1() //
console.log("hello");
