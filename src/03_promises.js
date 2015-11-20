// Promise Example
'use strict'

var myPromise = new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve('Hi there!')
  }, 300)
})

myPromise.then(
  function(message){
    console.log('message: ' + message)
  }
)

Promise.resolve('a')
  .then(function(data){
    return data + 'b'
  }).then(function(data){
    return data + 'c'
  }).then(function(data){
    console.log(data)
  })
