// Promise Example
// same as 02b, the library has an issue
'use strict'

var call1 = myApiClient(1);
var call2 = myApiClient(2);

// now lets say the library may have an issue
// how can you handle this?

Promise.all([call1, call2])
  .then(
    function(results) {
      // do stuff with the data
      var message = results[0]['message'] + ' ' + results[1]['message']
      console.log(message)
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
      if(call == 1) {
        data.message = data.massage.toUpperCase() //ooops, typo!, but could be whatever.
      }
      resolve(data)
    }, 300)
  });
}
