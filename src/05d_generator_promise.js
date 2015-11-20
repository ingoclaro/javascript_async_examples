// use generator with promises
'use strict'

// note that here we code like it's synchronous!
function *main() {
  var res1 = yield myApiClient(1)

  // do something with the responses
  console.log(res1)
}


// the async stuff is handled over here:
var it = main()
var p = it.next().value;

// wait for the `p` promise to resolve
p.then(
  function(text){
    it.next(text)
  }
)


// library
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
