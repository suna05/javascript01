 /*주제: 자바 스크립트와 자바 스크립트 엔진의 관계
자바스크립트:
    - 웹 페이지의 UI를 제어하기 위해 만들어진 프로그래밍 언어
자바스크
*/

"use strict"
var name;
console.log(typeof name);

name="홍길동";
console.log(typeof name);

//3.20일 추가
name='임꺽정';
console.log(typeof name);


name=20;
console.log(typeof name);

name=3.14;
console.log(typeof name);

name=true;
console.log(typeof name);

name=new Object();
console.log(typeof name);

name=[];
console.log(typeof name);

name=function() {};
console.log(typeof name);

name=null;
console.log(typeof name);

name=undefined
console.log(typeof name);

name=NaN;
console.log(typeof name);
