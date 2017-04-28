//3월 27일 월요일
"use strict"

console.log(__dirname)

console.log(__filename)


//'path' 모듈 사용법
const path = require('path')

console.log(path.join('c:/workspace/', 'javasript01/', 'step05/', 'test01.js'))

console.log(path.join(__dirname, 'test01.js'))

console.log(path.join(__dirname, '../../electron01/step04/main.js'))
