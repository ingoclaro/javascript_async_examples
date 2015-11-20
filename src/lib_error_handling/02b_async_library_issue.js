// Example using async library
// handling api client issues
'use strict'

var async = require('async')

// now lets say the library may have an issue
// how can you handle this?

var requests = {
  request1: function(cb) {
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
    // do something with the data, but it fails
    if(call == 1) {
      data.message = data.massage.toUpperCase() //ooops, typo!, but could be whatever.
    }
    cb(null, data)
  }, 300)
}
