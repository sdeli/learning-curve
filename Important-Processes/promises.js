(function promiseBasics() {
    var asyncAdd = (a, b) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
          } else {
            reject('Arguments must be numbers');
          }
        }, 1500);
      });
    };

    asyncAdd(5, '7').then((res) => {
      console.log('Result: ', res);
      return asyncAdd(res, 33);
    }).then((res) => {
      console.log('Should be 45', res);
    }).catch((errorMessage) => {
      console.log(errorMessage);
    });    
});

(function concurrentPromises() {
    function randomResolve(num) {
      return new Promise(resolve => setTimeout(() => {
        console.log(num++);
        resolve(num);
      }, 100 * Math.random()));
    }

    Promise.all([ 
        randomResolve(1),
        randomResolve(2),
        randomResolve(3),
        randomResolve(4),
    ])
    .then(function(result){
        console.log(result)
    })
}());

(function parallelPromises() {
    function setTimeout1() {
        return new Promise(resolve => {
            setTimeout(function(){
                resolve(2000)
            }, 2000);
        })
    }

    function setTimeout2(arg) {
        return new Promise(resolve => {
            setTimeout(function(){
                resolve(arg + 1)
            }, 2000);
        })
    }

    function setTimeout3(arg) {
        return new Promise(resolve => {
            setTimeout(function(){
                resolve(arg + 2)
            }, 2000);
        })
    }

    function parallelPromise() {
        setTimeout1()
        .then(param => {
            return Promise.all([setTimeout2(param), setTimeout3(param)]);
        })
        .then(result => {
            console.log(result);
        })
    }
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     // reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
