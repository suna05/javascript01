//3월 20일
//다음 소스를 변경하여
//사용자로부터 숫자 a,b 값을 받고 연산자 op결과를 받아서
//계산 결과를 출력하는 프로그램을 작성하라
//실행결과:

"use strict"

var prompt = require('prompt');

prompt.start();

prompt.get(['a','b','op'], function(err,result) {
  var a = parseInt(result.a);
  var b = parseInt(result.b);
  var op = result.op;

  switch (op) {
  case "+":
     console.log(result.a, result.op, result.b, "=", a+b);
     //=console.log(a, op, b, "=", a+b); 위 문장과 같음
     break;
  case "-":
     console.log(result.a, result.op, result.b, "=", a-b);
      break;
  case "*":
    console.log(result.a, result.op, result.b, "=", a*b);
    break;
  case "/":
     console.log(result.a, result.op, result.b, "=", a/b);
     break;
  case "%":
     console.log(result.a, result.op, result.b, "=", a%b);
      break;

  }


});
