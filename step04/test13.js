//3월 21일 - Arrow 함수 리턴 받기 test12 축약
"use strict"

function calculator(op){
  switch(op) {
    case '+':
    //익명함수를 더 축약한 Arrow함수 정의한 후 그 주소 리턴
      return (a,b) => a + b;
    case '-':
      return (a,b) => a - b;

  }
}

var f = calculator('+');
var value = f(10, 20);
console.log(value);

f = calculator('-');
value = f(10, 20);
console.log(value);
