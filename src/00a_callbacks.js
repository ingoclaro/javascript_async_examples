// example using plain callbacks
'use strict'

function request1(cb) {
  // async call, eg: API call
  setTimeout(function() {
    var data = {
      request: 1,
      message: 'Hi there!'
    }
    // cb('uups')
    cb(null, data)


  }, 400)
}

function request2(cb) {
  // async call, eg: API call
  setTimeout(function() {
    var data = {
      request: 2,
      message: 'How you doing'
    }
    // cb('uups')
    cb(null, data)


  }, 600)
}

var message = ''
request1(function(err, data){
  if(err) {
    console.error('error: ' + err)
    return
  }
  console.log(data)
  message += data.message
})
request2(function(err, data){
  if(err) {
    console.error('error: ' + err)
    return
  }
  console.log(data)
  message += ' ' + data.message
})

// do something with the response
console.log(message)
