/* 주제: 객체 - 생성자 함수의 이름 II
- 생성자 함수를 일반 함수처럼 오해하지 않도록
  이름의 첫 알파벳을 대문자로 보통 쓴다.
*/
"use strict"

function Calculator() {
  this.result = 0
}

Calculator.prototype.plus = function(value) {this.result += value}
Calculator.prototype.plus = function(value) {this.result += value}
Calculator.prototype.minus = function(value) {this.result -= value}
Calculator.prototype.multiple = function(value) {this.result *= value}
Calculator.prototype.divide = function(value) {this.result /= value}


var c1 = new Calculator()
var c2 = new Calculator()
var c3 = new Calculator()

c1.plus(10)
c2.minus(20)
c3.plus(30)

console.log(c1.result)
console.log(c2.result)
console.log(c3.result)


Calculator.prototype.plus(10)  
