//3월 27일 월요일

//1초 뒤 호출될 함수를 심는다.

"use strict"

var v1 = 100
global.v2 = 100  //모듈사이에 변수 공유할때 -> 가급적 안쓰는게 좋음

require('./test10_m1.js')  //리턴한 값이 함수

console.log('test10.js = v1: >', v1)
console.log('test10.js => global.v2: ', global.v2)
console.log('test10.js => global.v3: ', global.v3)
