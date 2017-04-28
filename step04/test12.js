//3월 21일 - 함수 리턴 받기
"use strict"

function calculator(op){
  switch(op) {
    case '+':
      return function(a,b) {
        return a + b
      };
    case '-':
      return function(a,b) {
        return a - b
      };

  }
}

var f = calculator('+');
var value = f(10, 20);
console.log(value);

f = calculator('-');
value = f(10, 20);
console.log(value);

//실무에서는 리턴 받은 함수(의 주소)를 바로 사용하는 경우가 많다.
value = calculator('-')(10,20);
console.log(value);

//리턴 값을 바로 출력
console.log(calculator('-')(10,20));
