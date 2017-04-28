"use strict"
var prompt = require('prompt');

prompt.start();


prompt.get(['a','b'], function(err,result) {
  var a = parseInt(result.a);
  var b = parseInt(result.b);

  console.log('계산 결과: ');
  console.log('a + b = ', a + b);
  console.log('a - b = ', a - b);
  console.log('a * b = ', a * b);
  console.log('a / b = ', a / b);
  console.log('a % b = ', a % b);


});
