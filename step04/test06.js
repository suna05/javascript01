//3월 21일 - 익명함수
"use strict"

f1();
//f2();  -->아직 f2에 익명함수가 저장된 상태는 아니므로 오류

function f1(){
  console.log("okok");
}

var f2 = function(){
  console.log("익명 함수...");
}

f2();
