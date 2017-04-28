//3월 20일
"use strict"

switch("문자열"){
  case "문자열":
    console.log("문자열 가능");
    break;
  case 1:
    console.log("숫자 가능");
    break;
  case 3.14159:
    console.log("부동 소수점 가능");
    break;
  case true:
    console.log("boolean 값 가능");
    break;
  case undefined:  //<--정의된 변수가 없음을 의미
    console.log("undefined 가능");
    break;
  case null:  //<--변수는 있지만, 값이 없음
    console.log("null 가능");
    break;
  case NaN:  //NaN는 직접 비교할 수 없다. isNaN()으로 확인해야 한다.
    console.log("NaN 가능");
    break;
}

console.log("---------------------");
