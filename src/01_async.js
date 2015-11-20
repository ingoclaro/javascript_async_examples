// Example using async library
'use strict'

var async = require('async')

var requests = {
  request1: function(cb) {
    // async call, eg: API call
    setTimeout(function() {
      var data = {
        request: 1,
        message: 'Hi there!'
      }
      // cb('uups')
      cb(null, data)


    }, 600)
  },
  request2: function(cb) {
    // async call, eg: API call
    setTimeout(function() {
      var data = {
        request: 2,
        message: 'How you doing'
      }
      // cb('oops')
      cb(null, data)
    }, 400)
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
  // console.log(JSON.stringify(results))

})
