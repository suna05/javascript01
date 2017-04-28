//3월 24일 금요알

"use strict"

function f1(){
  console.log(this)
}

new f1();


f1()

//////////////////////

var obj = {
  f2: function() {
    console.log(this)
  }
}

obj.f2()


///실행오류
f2()

/////////////////////
