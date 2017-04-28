//3월 20일

"use strict"

var names = ["홍길동","임꺽정","유관순","안중근","윤봉길","김구"];

for(var key in names){  //index 조절 불가능
  console.log(key,names[key]);
}

console.log("-------------------------------");

//
for (var i=0; i<names.length; i +=2){ //index 조절 가능
  console.log(i,names[i]);
}

console.log("-------------------------------");


//
var student = {  //방 번호로 데이터를 못 꺼냄, 이름으로 꺼낼 수 있음
  name: "홍길동",
  age: 20,
  tel: "1111-1111",
  email:"test@test.com"
};

for(var key in student){
  console.log(key, student[key]);
}
console.log("-------------------------------");
