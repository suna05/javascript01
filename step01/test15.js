//3월 17일 금요일

"use strict";
//배열 사용전
console.log("=======================")
var kor = 100, eng = 100, math = 100;
var sum = kor + eng + math;
var aver = sum/3;
console.log(kor, eng, math, sum, aver);

//배열 사용 후
var score = [];  //배열을 사용하기 전에 반!드!시! 빈 배열을 만들어야 한다.
score[0] = 90;
score[1] = 80;
score[2] = 70;
score[3] = score[0] + score[1]+score[2];
score[4] = score[3]/3;
console.log(score[0], score[1], score[2], score[3], score[4]);
console.log("=======================")
