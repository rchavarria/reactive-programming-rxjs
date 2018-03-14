const Rx = require('./Rx');

const myObserver = {
    next: (item) => console.log('`next` processes:', item),
    error: (e) => console.error('`error` receives:', e),
    complete: () => console.log('Completed!')
};

Rx.Observable.from([ 1, 2, 3, ])
    .subscribe(myObserver);

