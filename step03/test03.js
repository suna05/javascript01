//3월 20일

var value=10;
if((value %2) ==0) console.log("짝수입니다.");


if((value %2) ==0)
  console.log("짝수입니다.");

console.log("--------------------");

//블록 사용
value = 11;
if((value %2) ==0)
  console.log("짝수");  //<-if 문에 속해있는 문장이다.
  console.log("입니다."); //<-if 문과 상관없다.

console.log("------------------------")
//if 문장 뒤에 ; 주의!
value = 11;
  if((value %2) ==0);  //;사용은 문장하나가 끝났음을 의미해서 다음 문장 그냥 실행
    console.log("짝수입니다.");

console.log("------------------------")

//여러개의 무장을  if문에 묶고싶을 때, {}을 사용!
value=11;
if((value %2) ==0){  //<-- 블록을 한 개의 문장으로 취급
  console.log("짝수");
  console.log("입니다.");
}
