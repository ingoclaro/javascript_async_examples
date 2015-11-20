// Promise Example
// same as 02a, use an api client library (Promise aware)
'use strict'

var call1 = myApiClient(1);
var call2 = myApiClient(2);

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

  if(call === 1) {
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
