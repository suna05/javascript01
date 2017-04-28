//3월 21일 - arrow 함수
"use strict"

var f1 = () => "hello";
var value = f1();
console.log(value);

var f2 = () => console.log("okok");
var value = f2();
console.log(value);

var v3 = () => {
  console.log("---------")
  console.log("f3()... 호출")
  console.log("arrow 함수")
  return "hello2";
}
var value = f3();
console.log(value)

var f4 =(a,b) => a+b;

value = f4(10,20);
console.log(value);
