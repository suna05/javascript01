//3월 23일 목요일

"use strict"

function init(){  //변수 하나에 함수4개, 객체를 여러번 만드는 상황이면 생성자로 객체를 초기화 하는게 훨씬 더 편리.
  this.result = 0

  this.plus = function(value) {this.result += value}

  this.minus = function(value) {this.result -= value}

  this.multiple = function(value) {this.result *= value}

  this.divide = function(value) {this.result /= value}
}

var calc = new init()

console.log(calc)

/////////
calc.plus(10)  //10
calc.plus(20)  //30
calc.multiple(3)  //90
calc.minus(7)  //83
calc.divide(2)  //41.5
console.log(calc.result)
//////////////
/*var calc2 = {
  result: 0,

}*/
