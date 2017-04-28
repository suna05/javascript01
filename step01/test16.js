//3월 17일 금요일
"use strict";
//배열 사용전

var a1=[];
console.log(a1.length);

var a2=[10,20,30,40];
console.log(a2.length);
console.log("-----------------------");

a1[0] = 100;
a1[1] = 200;
console.log(a1.length);

//중간 인덱스를 건너뛰면 가장 큰 인덱스 만큼 배열 크기가 결정.
a1[100] = 300;
console.log(a1.length);
console.log("-----------------------");


//값 꺼내기
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[50]);  //값을 넣지 않은 항목? undefined
console.log(a1[101]); //인덱스의 범위를 벗어난 항복? undefined

a2[4]="홍길동";
a2[5]=false;
a2[6]=function(){};
a2[7]=null;
a2[8]={};
console.log("-----------------------");

for(var i =0; i<a2.length ; i++){
  console.log(i,":",a2[i]);
}
