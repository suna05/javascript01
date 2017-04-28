//3월 20일 월요일

"use strict";

//x는 존재하지 않는 변수라 비교할 수 없다.
//if(x == undifined) console.log("x는 undefined이다."); //실행 오류

//변수에 undefined
var v0;
if(v0 == undefined) console.log("v0는 변수는 존재하지만 값이 없는 상태이다");

var v1=20;  //number형으로 선언했지만
v1 = undefined;  //존재하는 변수는 undefined로 만들 수 있다.
if(v1 == undefined) console.log("v1은 변수는 존재하지만 값이 없는 상태이다");  //변수는 존재하는데 값이 존재하지 않냐

//if문 조건식은 반드시 boolean값이어야 한다.
if(v1) console.log("v1은 flase로 바뀐다.");  //if( t or f가 와야함)

var v2 = null;
console.log("v2의 타입 = ", typeof v2);
if(v2 == null) console.log("v2는 null이다.")


var v3 = NaN;
console.log("v3의 타입 = ", typeof v3);
if(v3 == NaN) console.log("v3는 NaN이다.");
//
if(isNaN(v3)) console.log("v3는 isNaN(v3) == true이다")



var v4 = Infinity;
if(v4  == Infinity) console.log("v4는 Infinity이다");
