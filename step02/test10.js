//3월 17일 금요일

"use strict";

var a=10; //0000 1010 (원래는 32비트)
var b =12; //0000 1100

console.log("a & b = ", a & b ); //0000 1000

console.log("a | b = ", a | b ); //0000 1110

console.log("a ^ b = ", a ^ b); //0000 0110

console.log("~a = ", ~a); //(앞에 다 1 비트들) 1111 0101

var pixel = 0x34f588; // 00110100 1111010 10001000
var mask = 0x34f588; //


var pixel = 0x34f588; //
var mask = 0x00ff00; //00000000 11111111 00000000
console.log((pixel & mask).toString(16));


var pixel = 0x34f588; //
var mask = 0xaa0000; //
console.log((pixel | mask).toString(16));


var pixel = 0x34f588; //
var mask = 0x00ff88; //
console.log((pixel ^ mask).toString(16));
console.log("-------------------------");
