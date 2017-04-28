//3월 21일 - 글로벌 변수와 로컬 변수 1
"use strict"

var v1 = 100;

function f1(){
  var v1 = 200;  //함수 안에서 글로벌 변수와 같은 이름으로 변수를 선언한다면,
//
//
//
  var v2 = 300;
  console.log("f1():", v1, v2);

  //v1 = 200;
}

console.log(v1); //f1 호출 전
f1();
console.log(v1); //f1 호출 후
//console.log(v2);
f1();
