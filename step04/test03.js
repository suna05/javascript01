//3월 21일 - 함수 호이스팅

"use strict"
name = "홍길동";
var name;


f1();

function f1(){
  console.log("f1() 호출됨");
}

f1();
