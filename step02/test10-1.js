"use strict"
var a=10; //1010
var b=12;  //1100

console.log("a & b = ", a & b);
console.log("a | b = ", a | b );
console.log("a ^ b =", a ^ b); // 0000 0000 0000 0000 0000 0000 0000 0110
console.log("~a =", ~a);


var pixel = 0x34f588;
var mask = 0xaa0000;
console.log(pixel & mask). toString(16));
