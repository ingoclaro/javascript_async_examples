// use generator with promises
'use strict'

// how do we handle concurrent calls?

// note that here we code like it's synchronous!
function *main() {
  var api1 = myApiClient(1)
  var api2 = myApiClient(2)

  var res1 = yield api1
  var res2 = yield api2

  // do something with the responses
  var message = res1.message + ' ' + res2.message
  console.log(message)
  return 'finished'
}

// the async stuff is handled over here:
var it = main()
var p = it.next().value;

// wait for the `p` promise to resolve
p.then(
  function(res){
    console.log(`1: ${JSON.stringify(res)}`)
    return it.next(res).value
  }
).then(
  function(res){
    console.log(`2: ${JSON.stringify(res)}`)
    return it.next(res).value
  }
).then(
  function(res){
    console.log(`3: ${res}`)
  }
)

// note that error handling is missing.
// better use a library that handles this in a generic way


function myApiClient(call) {
  var data = {
    request: call
  }

  if(call == 1) {
    data.message = 'Hi there!'
  } else {
    data.message = 'How you doing'
  }

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(data)
    }, 300)
  });
}
