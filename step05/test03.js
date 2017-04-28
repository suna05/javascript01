//3월 23일 목요일
//객체 - 소개

"use strict"


var names1 = ['홍길동','임꺽정','유관순'];
var names2 = names1

names1[5] = "윤봉길"
console.log(names1)
console.log(names2)
console.log('-------------------------------------------------------------------')

//객체
var obj1 = {"name": "홍길동", "name2": "임꺽정", "name3": "유관순"}
var obj2 = obj1
obj2.name = "오호라"


console.log(obj1)
console.log(obj2)


///////////////////
var v1 = 100
var v2 = v1
v1 = 200
console.log(v1, v2)

////////////////////
v1 = true;
v2 = v1
v1 = false
console.log(v1)
console.log(v2)

/////////////////////
v1 = "홍길동"
v2 = v1
v1 = "임꺽정"
//var v3 = v1.replace('동', '순')
console.log(v1, v2)


/////////////
v1 = "홍길동"
v2 = v1.replace("동", "순")
console.log(v1, v2)

////////////////////////////
v1 = "오호라......그렇군요..이렇게 긴 문자열을 출력한다면 문제가 되겠네요"
v2 = v1
console.log(v1)
console.log(v2)
