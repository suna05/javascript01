//3월 27일 월요일

//1초 뒤 호출될 함수를 심는다.

var m1 = require('./test09_m1.js')

var calc = m1()

calc.plus(10)
calc.minus(5)
calc.plus(100)
console.log(calc.result)
