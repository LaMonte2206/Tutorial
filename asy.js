var promise = new Promise(function(fulfill, reject) {
    fulfill('PROMISE VALUE');
});
promise.then(function(success){
    console.log('MAIN PROGRAM');
    console.log(success);
});
