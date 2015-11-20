// quick intro to es7 async/await
'use strict'
// run with: ./node_modules/.bin/babel-node

async function main(){
  // create the promises first
  var call1 = myApiClient(1)
  var call2 = myApiClient(2)

  foo.bar() //oops!

  // then wait for them
  var response1 = await call1
  var response2 = await call2

  get.cat() //oops2!

  // do something with the responses
  var message = response1['message'] + ' ' + response2['message']
  console.log(message)
}

main()

// what happens?

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
