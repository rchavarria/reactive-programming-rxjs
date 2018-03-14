const Rx = require('./Rx');

Rx.Observable.from([ 1, 2, 3, ])
    .subscribe(
        (item) => console.log('`next` processes:', item),
        (e) => console.error('`error` receives:', e),
        () => console.log('Completed!')
    );

