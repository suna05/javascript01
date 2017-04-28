//3월 21일 화요일
"use strict"

function plus(a, b) {
  return a + b;
}

function minus(a, b){
  return a - b;
}

//콜백함수
function caller(f){
  var value = f(20, 30);
  console.log(value);
}

function caller(cb){
  var value = f(20, 30);
  console.log(value);
}


caller(plus);
caller(minus);
