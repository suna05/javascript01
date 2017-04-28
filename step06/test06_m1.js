//3월 27일 월요일


"use strict"
function plus(a, b) {return a + b}
function minus(a, b) {return a - b}
function multiple(a, b) {return a * b}
function divide(a, b){return a / b}


module.exports.plus = plus;  //module.exports.plus2라고 해도 됨


exports.minus = minus; //module 생략가능
exports.multiple = multiple;
//module.exports.divide = divide;
