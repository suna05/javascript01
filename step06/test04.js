//3월 27일 월요일

//1초 뒤 호출될 함수를 심는다.
function f1(){
  console.log('1초 지났음')
}
setTimeout(f1, 1000)  //비동기 방식 호출. 
console.log('첫 번째 타임아웃 함수를 심었다.')

setTimeout(function () {
  console.log('3초 지났음')
}, 3000)
console.log('두 번째 타임아웃 함수를 심었다.')
