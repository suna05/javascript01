//3월 20일

"use strict"

var count = 1;

do
  console.log(count++);
while(count <= 10);

console.log("-------------");

do {
  console.log(count++);
  console.log(">");
} while(count <= 10);
