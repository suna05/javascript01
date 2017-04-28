//3월 20일

"use strict"

var names = ["홍길동","임꺽정","유관순","안중근","윤봉길","김구"];

for(var index in names){  //in: 배열만큼 반복, 배열 방 번호 출력
  console.log(index);
}

console.log("-------------------------------");

//
for (var value of names) {  //of:배열만큼 반복, 배열값 출력
  console.log(value);
}

console.log("-------------------------------");


//
var student = {  //방 번호로 데이터를 못 꺼냄, 이름으로 꺼낼 수 있음
  name: "홍길동",
  age: 20,
  tel: "1111-1111",
  email:"test@test.com"
};

for (var label in student) {
  console.log(label);
}
console.log("-------------------------------");
