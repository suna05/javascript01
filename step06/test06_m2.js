//3월 27일 월요일

//1초 뒤 호출될 함수를 심는다.

"use strict"

var count = 0
{  //let 그 변수를 선언한 영역을 지나가면 timer는 존재하지 않음
  let timer = setInterval(function () {  //var로 하면 에러가 안뜨지만 실행이 제대로 안됨
    console.log('1초 지났음')
    if (++count == 10)
      clearInterval(timer)  //이 timer는 위에 let변수를 가리킴,
      //{} 블럭 안에 let이 있기 때문에 밖으로 나가면 사라짐
      //곤란을 겪지 않기 위해 복제 ->클로저
      //아래의 timer를 가리키는게 아님
  }, 1000)
}

var timer = 'ok'  // <-let 변수는 중복선언 안됨
//timer = 'ok' //에러가 안뜨지만 제대로 실행 안됨
console.log(timer)


/*
function init(){
  var timer = setInterval(function () {
    console.log('1초 지났음')
    if (++count == 10)
      clearInterval(timer)
  }, 1000)
}
timer = 'ok'
console.log(timer)
init()
*/
