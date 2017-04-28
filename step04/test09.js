//3월 21일 - 함수를 주고 받기
"use strict"

function f1() {
  console.log("f1()... 호출됨")
}

function f2(){
  console.log("f2().. 호출됨")
}
var v1 = f1;
var v2 = v1;

f1();
v1();
v2();

v1 = f2;
v1();
