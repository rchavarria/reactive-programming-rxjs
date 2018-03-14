const Rx = require('./Rx')

console.log('Array:');
[ 1, 2, 3 ].forEach(i => console.log(i));

console.log('Observable:');
Rx.Observable.from([ 1, 2, 3 ])
    .subscribe(i => console.log(i));
