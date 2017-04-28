//3월 20일
"use strict"
var level;
level = "경비원";

switch(level){
  case "팀장":
    console.log("석사 학위자");
    break; // <-case 블록의 실행을 멈추고 switch 문을 나간다.
  case "개발자":
    console.log("정보처리기사 자격증 소지자");
    break;
  case "사원":
    console.log("워드 자격증 소지자");
    break;
  default:
    console.log("자격증이 필요 없습니다.");
}

console.log("---------------------");
