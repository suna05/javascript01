//3월 21일 - 로컬 변수와 스택 메모리 : 동기식
"use strict"

var v1 = 100;

function f1(){
  var v1 = *200;
  console.log("f1(): ", v1);
  f2();
  console.log("f1(): ", v1);
}

function f2() {
  var v1 = 300;
  console.log("f2(): ", v1);
  f3();
  console.log("f2(): ", v1);
}

function f3() {
  var v1 = 400;
  console.log("f3(): ", v1);
}

f1()
//console.log(v1)
