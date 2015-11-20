'use strict'

// run with: ./node_modules/.bin/babel-node

// What if lib has an issue?
// can't be solved, it happens in a different context
// global exception handling can be used

async function main() {
  // create the promises first
  var call1 = myApiClient(1)
  var call2 = myApiClient(2)

  // then wait for them
  var response1 = await call1
  var response2 = await call2

  // do something with the responses
  var message = response1['message'] + ' ' + response2['message']
  console.log(message)
}

main()

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});


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
      if(call == 1) {
        data.message = data.massage.toUpperCase() //ooops, typo!, but could be whatever.
      }
      resolve(data)
    }, 300)
  });
}
