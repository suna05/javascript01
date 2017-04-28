//3월 21일 - 함수정의와 사용2

function f1(){
  console.log("f1()");
}
f1();

///////////////////////////////
function f2(){
  return "hello";
}
var value = f2();
  console.log("f2()의 리턴값 = ", value);

//////////////////////////////////////////
f3(100);
f3(200);
f3(300);
function f3(a){
  console.log("----> ",a);
}
////////////////////////////////////////////
function f4(a){
  return "a = " + a + "입니다." ;
}
var value = f4(100);
console.log(value);
//////////////////////////////////////////////////

console.log(f4(200));
