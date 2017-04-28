/* 주제: 객체 - 생성자 함수의 이름 II
- 생성자 함수를 일반 함수처럼 오해하지 않도록
  이름의 첫 알파벳을 대문자로 보통 쓴다.
*/
"use strict"

var obj1 = {
  name: '홍길동',
  age: 20
}

obj1.tel = '111-1111' //객체에 값 보관
obj1.f1 = function() {console.log('hello')}
obj1.ok = {}


var obj2 = function (){
  console.log('test...')
}
obj2.tel = '222-2222'  //객체에 값 보관
obj2.f1 = function() {console.log('hi')}
obj2.ok = {}

obj2()
