// exception handling refresher
'use strict'


// refresher on exception handling
console.log('refresher:')
try {
  var oops = doesnt / exist
  console.log('does not get here')
} catch (e) {
  console.error('error:' + e)
  if(e instanceof ReferenceError) {
    console.error('it was a ReferenceError')
  }
} finally {
  console.log('finally')
}

console.log('The program continues')
