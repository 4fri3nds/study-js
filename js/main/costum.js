let promise = new Promise(function(suc, rej){
  suc('done');
  rej('false');
});

promise.then(function(value) {
  console.log(value)
  console.log("this is value");
}, function(reason){
  console.log(reason);
  console.log('this is reason');
});