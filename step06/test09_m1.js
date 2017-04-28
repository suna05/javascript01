//3월 27일 월요일

"use strict"


module.exports = function() {
  return {
    result: 0,
    plus(value) {this.result += value},
    minus(value) {this.result -= value},
    multiple(value) {this.result *= value},
    divide(value) {this.result /= value}
  }
}
