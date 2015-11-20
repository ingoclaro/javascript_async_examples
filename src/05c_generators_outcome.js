// complex example outcome
'use strict'

function *foo(value) {
  var x = value; console.log(`f1- x:${x}`)     //1
  x = yield(x * 2); console.log(`f2- x:${x}`)  //2
  x = yield(x * 3); console.log(`f3- x:${x}`)  //3
  return(x)         //4
}

var gen = foo(3) // generator instantiated, "nothing" happens
console.log('5 ->' + JSON.stringify(gen.next(5)))   // 5 is ignored, execute lines 1 and 2, pauses, get 3 * 2
console.log('7 ->' + JSON.stringify(gen.next(7)))   // pass in 7 for line 2 and resumes (x=7), execute line 3, pauses, get 7 * 3
console.log('11 ->' + JSON.stringify(gen.next(11))) // pass in 11 for line 3 and resumes (x=11), execute line 4 to get 11 back.
console.log('17 ->' + JSON.stringify(gen.next(17))) // function finished -> undefined
