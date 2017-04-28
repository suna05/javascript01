
var obj1 = new Object()
console.log(obj1)

var obj2 = {}
console.log(obj2)

///
var obj2 = {
  name: '홍길동',
  age: 20
}
console.log(obj2.hasOwnProperty('name'))
console.log(obj2.hasOwnProperty('age'))
console.log(obj2.hasOwnProperty('tel'))

/////
var obj3 = Object.create(null);
console.log(obj3)
