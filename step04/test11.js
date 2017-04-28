//3월 21일
"use strict"

function caller(f){
  var value = f(20, 30);
  console.log(value);
}

function plus(a, b){
  return a + b;
}
caller(plus);


var plus2 = function(a,b){
  return a+b;
}
caller(plus2);

/////
caller(function puls3(a,b){
  return a + b ;
});

////
caller(function(a,b){
  return a + b;
});

////
//caller((a,b) => return a + b;);  {}가 없을 때에는 return 생략
caller((a,b) => a + b);
