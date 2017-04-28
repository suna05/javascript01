//3월 17일 금요일

"use strict";

console.log("7" == 7);  //앞에 "7"이 number형으로 바뀜 7==7

console.log("7" == 8); //7 == 8

console.log(true == 7);  //true가 숫자로 바뀌거나  1==7  =>이렇게 바뀜 결과 false
                        //숫자가 boolean로 바뀌는 것중 어느거?
console.log("0" == false);  //false를 숫자로 바꿈 0 == 0
console.log("1" == true);
console.log("true" == true); //"true"===true
console.log("hello" == true); //"hello" == true
                            //암시적 형변환을 고려하지 않도록 =을 3개 사용해서 타입비교하도록 권장.
console.log(""==false);


console.log("----------------------")
console.log(false==null);
console.log(false==undefined);
console.log(false==NaN);
console.log(false==0);
console.log(false==[]);

console.log("----------------------")

console.log("0" == null);
console.log("0" == undefined);
