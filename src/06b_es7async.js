// quick intro to es7 async/await
'use strict'

// run with: ./node_modules/.bin/babel-node

// ok but are these executed concurrently?, lets check it out.

async function main(){
  console.time("main");
  var response1 = await myApiClient(1)
  var response2 = await myApiClient(2)

  // do something with the responses
  var message = response1['message'] + ' ' + response2['message']
  console.log(message)
  console.timeEnd("main"); // expected time: 300
}

main()

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
