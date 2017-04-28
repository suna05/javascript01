"use strict"
/*var obj = {}  //먼저 빈객체를 만들고
obj.v1 = 0  //따로 세팅
obj.f1 = function(){
  v1 = 100

}*/

var obj = {  //객체를 만들면서 세팅
  v1: 0,
  f1: function(){
    this.v1 = 100  //this라는 변수가 함수 안에 있다.
  }
}
obj.f1()
console.log(obj.v1)

console.log('--------------------------')
