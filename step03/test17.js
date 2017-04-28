//3월 20일
//중간정검
/*
구구단을 출력하는 프로그램을 작성하시오
예)
>node test17.js
prompt: step: 5
5 * 1 =5
...
*/

"use strict"
var prompt = require('prompt');

prompt.start();


prompt.get(['step'], function(err,result) {
  var step = parseInt(result.step);


  for (var i = 1 ; i <= 9 ; i ++)
    console.log(step + " * " + i + " = " + (step * i) );

});


//http://sideeffect.kr/popularconvention
