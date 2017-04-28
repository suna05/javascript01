//3월 21일 - 함수 내장된 변수 arguments
"use strict"

function f1(a, b){
  console.log(a, b)
}
f1(10,20);
f1(20,30)

console.log("--------------------")
//파라미터의 개수에 상관없이 값을 넘길 수 없다.
f1();
f1(10);
f1(10, 20, 30);
f1(10, 20, 30, 40);
