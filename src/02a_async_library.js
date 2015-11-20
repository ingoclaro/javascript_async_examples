// Example using async library
// using an api client
'use strict'

var async = require('async')

// lets emulate using a library to fetch the data
var requests = {
  request1: function(cb) {
    // async call, eg: API call
    myApiClient(1,cb)
  },
  request2: function(cb) {
    // async call, eg: API call
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

  if(call === 1) {
    data.message = 'Hi there!'
  } else {
    data.message = 'How you doing'
  }

  setTimeout(function() {
    cb(null, data)
  }, 300)
}
