// example using plain callbacks
'use strict'

var numCalls = 2
var responses = []

function done() {
  // do something with the responses
  console.log(responses[0].message + ' ' + responses[1].message)
}

request1(function(err, data){
  if(err) {
    console.error('error: ' + err)
    return
  }
  responses.push(data)
  numCalls--;
  if(numCalls === 0) {
    done()
  }
})
request2(function(err, data){
  if(err) {
    console.error('error: ' + err)
    return
  }
  responses.push(data)
  numCalls--;
  if(numCalls === 0) {
    done()
  }
})

function request1(cb) {
  // async call, eg: API call
  setTimeout(function() {
    var data = {
      request: 1,
      message: 'Hi there!'
    }
    //cb('uups')
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
