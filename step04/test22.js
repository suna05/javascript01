//3월 22일 수요일
//함수 - 클로저1
"use strict"

var arr = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길"]
var count = -1;

//클로저가 자체 변수를 사용하기 전
function outer() {
  count++;
  return function() {
    console.log(arr[count])
    }
}

var f1 = outer();
var f2 = outer();
var f3 = outer();
var f4 = outer();
var f5 = outer();

f1()
f2()
f3()
f4()
f5()
