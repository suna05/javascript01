//3월 22일 수요일
//함수 - 클로저3
"use strict"


var arr = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길"]
var functionList = []


for (let i = 0; i< arr.length ; i++){
  functionList[i] = function() {
    console.log(arr[i])
  }
}


functionList[0]()
functionList[1]()
functionList[2]()
functionList[3]()
functionList[4]()
