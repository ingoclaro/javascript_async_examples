// Promise Example
// error handling of application code
'use strict'

var call1 = myApiClient(1);
var call2 = myApiClient(2);

try {
  Promise.all([call1, call2])
    .then(
      function(results) {
        try { // remove this try and run again
          // do stuff with the data
          foo.bar() // oops!
          var message = results[0]['message'] + ' ' + results[1]['message']
          console.log(message)
        } catch (e) {
          console.error(`function catch: ${err}`)
        }
      }
    )
} catch (err) {
  console.error(`main catch: ${err}`)
}

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
