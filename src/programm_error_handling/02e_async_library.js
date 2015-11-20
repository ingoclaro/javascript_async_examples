// Example using async library
// error handling of application code
'use strict'

var async = require('async')

var requests = {
  request1: function(cb) {
    foo.bar() // ooops!
    myApiClient(1,cb)
  },
  request2: function(cb) {
    myApiClient(2,cb)
  }
}

async.auto(requests, function (err, results){
  if(err) {
    console.error(err)
    return
  }
  // do stuff with the data
  var message = results['request1']['message'] + ' ' + results['request2']['message']
  console.log(message)

})

// what happens?


// library
function myApiClient(call, cb) {
  var data = {
    request: call
  }

  if(call == 1) {
    data.message = 'Hi there!'
  } else {
    data.message = 'How you doing'
  }

  setTimeout(function() {
    cb(null, data)
  }, 300)
}
