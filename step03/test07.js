//3월 20일
"use strict"

var level;

level = "팀장";

if(level == "사원")
  console.log("워드 자격증 소지자");

if(level == "개발자"){
  console.log("워드 자격증 소지자");
  console.log("정보처리기사 자격증 소지자");
}

if(level == "팀장"){
  console.log("워드 자격증 소지자");
  console.log("정보처리기사 자격증 소지자");
  console.log("석사 학위자");
}
console.log("--------------------------------")

//swich문 사용
level = "팀장";

switch(level){
  case "팀장":
    console.log("석사 학위자");
  case "개발자":
    console.log("정보처리기사 자격증 소지자");
  case "사원":
    console.log("워드 자격증 소지자");
}
