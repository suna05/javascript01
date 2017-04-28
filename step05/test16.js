/* 주제: 객체 - 생성자 함수의 이름 II
- 생성자 함수를 일반 함수처럼 오해하지 않도록
  이름의 첫 알파벳을 대문자로 보통 쓴다.
*/
"use strict"

function Calculator() {
  this.result = 0

}

Calculator.prototype.plus = function(value) {this.result += value}
Calculator.prototype.plus2 = function(a, b) {return a + b}


var c1 = new Calculator()
var c2 = new Calculator()

c1.plus(100)
var r1 = c1.plus2(100, 200)
console.log(c1.result, r1)


c2.plus(200)
var r2 = c2.plus2(1000,2000)
console.log(c2.result, r2)

//////////////////////////////
Calculator.plus2 = function(a, b) {return a + b}
//////////////////////////////
var r3 = Calculator.plus(100, 200)
console.log(r3)
