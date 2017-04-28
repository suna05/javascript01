/* 주제: 객체 - 생성자 함수의 이름 II
- 생성자 함수를 일반 함수처럼 오해하지 않도록
  이름의 첫 알파벳을 대문자로 보통 쓴다.
*/
"use strict"

var obj = {}
obj.result = 10

Object.defineProperty(obj,'result2',{
  value: '100'
})

console.log(obj.result)
console.log(obj.result2)


console.log('---------------')

obj.result = 20
console.log(obj.result)
obj.result2 = 200
console.log(obj.result2)
