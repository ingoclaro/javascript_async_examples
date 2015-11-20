// Promise Example
// error handling of application code
'use strict'

var call1 = myApiClient(1);
var call2 = myApiClient(2);


Promise.all([call1, call2])
  .then(
    function fulfilled(results) {
      // do stuff with the data
      foo.bar() // oops!
      var message = results[0]['message'] + ' ' + results[1]['message']
      console.log(message)
    }
  )
  .catch(function(err){
    console.error(`Promise.catch: ${err}`)
    // <- add return
  })
  .then(function(results){
    console.log(`all ok: ${results}`)
  })

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
