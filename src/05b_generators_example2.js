// complex example
'use strict'

function *foo(value) {
  var x = value
  x = yield(x * 2)
  x = yield(x * 3)
  return(x)
}

var gen = foo(3) //
console.log('5 ->' + JSON.stringify(gen.next(5)))   //
console.log('7 ->' + JSON.stringify(gen.next(7)))   //
console.log('11 ->' + JSON.stringify(gen.next(11))) //
console.log('17 ->' + JSON.stringify(gen.next(17))) //
