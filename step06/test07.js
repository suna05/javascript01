//3월 27일 월요일

//1초 뒤 호출될 함수를 심는다.

"use strict"

var m1 = require('./test07_m1.js')

//m1 <= module.exports
console.log(m1.plus(10,20))
console.log(m1.minus(10,20))
console.log(m1.multiple(10,20))
console.log(m1.divide(10,20))

/////////////////////////////////////

var {plus, minus} = require('./test07_m1.js')

console.log(plus(10, 20))
console.log(minus(10, 20))
