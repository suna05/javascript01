"use strict";

((10 % 2) == 0) && console.log("실행.1");
((11 % 2) == 0) && console.log("실행.2");


//첫 번째 식의 결과가 true이다. 이미 결론을 알 수 ㅇ

((10 % 2) == 0) || console.log("실행.3");
((11 % 2) == 0) || console.log("실행.4");



var a=10;

(( a % 2) == 0) && console.log("짝수 입니다.1");
(( a % 2 ) == 0) || console.log("홀수 입니다.2");

var a=11;

(( a % 2) == 0) && console.log("짝수 입니다.3");
(( a % 2 ) == 0) || console.log("홀수 입니다.4")
