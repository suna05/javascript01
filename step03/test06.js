//3월 20일

"use strict"

var age;
age = 50;
if(age > 19)
  if(age >= 65)
    console.log("노인");
else  //이 else는 바로 위 문장 if랑 엮임. 50세일 경우 미성년 출력
  console.log("미성년");
console.log("----------");

age = 50;
if(age > 19){
  if(age >= 65)
    console.log("노인");
  }
else  //이 else는 바로 위 문장 if랑 엮임. 50세일 경우 미성년 출력
  console.log("미성년");
console.log("----------");
