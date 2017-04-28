//3월 23일 목요일
//함수 - 재귀호출2 꼬리재귀
"use strict"

// Sigma(n)을 꼬리 재귀호출로 구현하기
function sigma(n, sum) {
  if (n == 1) 
    return sum + n
  return sigma(n - 1, sum + n);
}

var result = sigma(5, 0)
console.log(result)

