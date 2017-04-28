//3월 20일

"use strict"

var count = 1;

while(count <= 10)
  console.log(count++);
console.log("---------------")

//while문 중첩
var a = 2;
while(a <= 9) {
  //console.log(a);
  var b=1;
  while(b <= 9){
    console.log(a + " * " + b + " = " + (a*b));
    b++;
  }
  a++;
}
console.log("---------------");
