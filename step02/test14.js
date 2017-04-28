//3월 17일 금요일

"use strict";

//Boolean 형으로 변환
console.log(0, Boolean(0));  //글로벌 함수(function)라 바로 씀, false
console.log(1, Boolean(1));
console.log(-1, Boolean(-1));
console.log(120, Boolean(120));
console.log(Infinity, Boolean(Infinity));
console.log(-Infinity, Boolean(-Infinity));


console.log("", Boolean(""));  //false
console.log(" ", Boolean(" "));
console.log("  ", Boolean("  "));
console.log("true", Boolean("true"));  //Boolean 값 true
console.log("false", Boolean("false")); //Boolean 값 true


console.log(null,Boolean(null));
console.log(undefined, Boolean(undefined));
console.log(NaN, Boolean(NaN));
console.log("---------------------------");


//number 형으로 변환
console.log(true, Number(true));
console.log(false, Number(false));


console.log("", Number(""));
console.log(" ", Number(" "));
console.log("  " , Number("  "));
console.log("   " , Number("   "));
console.log("12", Number("12"));
console.log("017", Number("017"));
console.log("true", Number("true"));
console.log("flase", Number("false"));
console.log("hello", Number("hello"));
console.log("2500원", Number("2500원"));
console.log("$2500", Number("$2500"));

console.log("2500원", parseInt("2500원"));
console.log("$2500", parseInt("$2500"));
console.log("200만원", parseInt("200만원"));
console.log("2500$", parseInt("2500$"));

console.log(null, Number(null));
console.log(undefined, Number(undefined));
console.log(NaN,  Number(NaN));


console.log("----------------------------")
console.log("[]", Number([]));
console.log("[10]", Number([10]));
console.log("['10']", Number(['10']));
console.log("[10,20]", Number([10,20]));  //배열에 항목이 여러개면 못 바꿈
console.log("['10','20']", Number(['10','20']));
console.log("{}",Number({}));
console.log("{}",Number({}));



console.log("----------------------------")
console.log(true, String(true));
console.log(false, String(false));


console.log(17, String(17));
//console.log(014, String(014)); //0으로 시작하면 8진수

console.log(null, String(null));
console.log(undefined, String(undefined));
console.log(NaN, String(NaN));
console.log("[]", String([]));
console.log("[10, 20, 30]", String([10, 20 , 30]));
console.log("{}", String({}));
