//3월 23일 목요일
//객체 - 소개

"use strict"
var names = [];
names[0] = '홍길동'
names[1] = '임꺽정'
names[2] = '유관순'
names[5] = "윤봉길"
console.log(names)
console.log(names[0])  //배열값을 꺼내고 싶을 때는 숫자써서
console.log(names[1])
console.log(names[2])
console.log(names[5])
console.log('---------------')

//객체
var obj = {}
obj["name"] = "홍길동"
obj['name2'] = "임꺽정"
obj.name3 = "유관순" //실무

var v = "name4"
obj[v] = "윤봉길"
console.log(obj)
console.log(obj.name)
console.log(obj["name"])
console.log(obj['name'])
var v2 = 'name'
console.log(obj[v2])

///////////////////////////////////////
//obj.first name = "길동"  <-obj

obj['first name'] = '길동'
obj['hello^^;'] = '오호라~'

//console.log(obj.first name)

console.log(obj['first name'])
console.log(obj['hello^^;'])



/*
"use strict"

var names = []
names[0] = "홍길동"
names[1] = "임꺽정"
names[2] = "유관순"
names[5] = "윤봉길"

console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[5])

console.log('----------------------')

var obj = {}
obj["name"] = '홍길동'
obj["names2"] = '임꺽정'
obj.name3 = "유관순"

var v = 'name4'
obj[v] = "윤봉길"
console.log(obj)
console.log(obj.name)
console.log(obj["name"])
console.log(obj['name'])
var v2 = 'name'
console.log(obj[v2])

*/
