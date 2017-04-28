"use strict"
var value;
value=11;

if((value %2 ) == 0)
  console.log("짝수");

if((value % 2) !=0)
  console.log("홀수");
console.log("----------");


//else 도입 후
value=11;
if((value %2 ) == 0)
  console.log("짝수"); //<--if에 소속된 문장

else //<--if 조건이 거짓일 때 esle에 소속된 문장 실행
  console.log("홀수");
console.log("----------");


//else는 if없이 실행할 수 없다.
//~else는 항상 if문에 이어서 나와야 한다.
/*
value=11;
if((value %2 ) == 0)
  console.log("짝수");
console.log("------");  //<--이 문장이 들어가는 순간 if문은 종료된 것이다.
else  //이 else와 관련된 if문이 없다.
  console.log("홀수");
console.log("----------");
*/

//위에 문장이 오류가 발생하지 않도록 해결하는 방법
value=11;
if((value %2 ) == 0){  //중괄호 사용
  console.log("짝수");
console.log("------");  //이 문장도 if에 소속된 문장
}
else //이 else는 위의 if와 연결될 수 있다. 그래서 오류가 나지 않는다.
  console.log("홀수");
console.log("----------");
