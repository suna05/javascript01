"use strict"

var v1 = 100;

function f1() {
  // 함수 안에서 글로벌 변수를 사용할 수 있다.
  console.log("f1():", v1);

  // 당연히 글로벌 변수의 값을 바꿀 수 있다.
   v1 = 200;
}

console.log(v1); // <-- f1() 호출 전
f1();
console.log(v1); // <-- f1() 호출 후
f1();
