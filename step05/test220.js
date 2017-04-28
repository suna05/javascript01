//3월 27일 월요일

"use strict"
//방법1
var obj = {
  plus: function(a, b) {return a + b},
  minus: function(a, b) {return a - b},
  multiple: function(a, b) {return a * b},
  divide: function(a, b) {return a / b}
}

//방법2
var obj2 = {
  plus(a, b) {return a + b},
  minus(a, b) {return a - b},
  multiple(a, b) {return a * b},
  divide(a, b) {return a / b}
}

console.log(obj.plus(10, 20))
console.log(obj2.plus(10, 20))
