// quick intro to es7 async/await
'use strict'

// run with: ./node_modules/.bin/babel-node

async function main(){
  var response1 = await myApiClient(1)
  var response2 = await myApiClient(2)

  // do something with the responses
  var message = response1['message'] + ' ' + response2['message']
  console.log(message)

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
