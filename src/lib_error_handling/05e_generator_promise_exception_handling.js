// use generator with promises
'use strict'

// same as 04d, now there is an issue in the library

function *main() {
  try {
    var response = yield myApiClient(1)
    return response;
  }
  catch (err) {
    console.error(`main error: ${err}`);
  }
}

var it = main()
var p = it.next().value;

// wait for the `p` promise to resolve
p.then(
  function fulfilled(response){
    console.log(response)
  },
  function rejected(err){
    console.error(`promise error: ${err}`)
  }
).catch(function(err){
  console.error(`promise catch: ${err}`)
});


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
      if(call == 1) {
        data.message = data.massage.toUpperCase() //ooops, typo!, but could be whatever.
      }
      resolve(data)
    }, 300)
  });
}
