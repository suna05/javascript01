//3월 23일 목요일


"use strict"

function createScore(name, kor, eng, math) {
  return {
    name: name, //프로퍼티명: 변수에 들어있는 값을 name으로 저장, name: "홍길동"->값을 주면 이건 리터럴, 객체 주소를 주고받음(숫자,boolean 제외한 나머지는)
    kor: kor,
    eng: eng,
    math: math,
    sum: kor + eng + math,
    aver: (kor + eng + math) / 3
  }
}
//
var scores2 = [
  createScore("홍길동1", 100, 100, 100),  //함수를 호출한후 return 값을 저장
  createScore("홍길동2", 90, 90, 90),
  createScore("홍길동3", 80, 80, 80),
  createScore("홍길동4", 70, 70, 70),
  createScore("홍길동5", 60, 60, 60)
]

console.log("홍길동3의 총점은? ", scores2[2].sum)
