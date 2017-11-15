//
// write the following command to run the code
//     node example.js
//
const Rx = require('./Rx')

Rx.Observable.from([ 1, 2, 3 ])
  .subscribe(i => {
    console.log('index:', i)
  })

