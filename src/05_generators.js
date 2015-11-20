// small intro to generators
'use strict'

function *foo() {
  console.log('start')
  yield
  console.log('next')
  return 3;
}

var gen = foo()
console.log(gen.next())
console.log(gen.next())
