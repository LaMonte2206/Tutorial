var promise = new Promise(function(fulfill, reject) { 
        fulfill("I FIRED");
        var error = new Error ("I DID NOT FIRE");
        reject(error);
});
  
  function onReject (e) {
      onsole.log(e.message);
  };
promise.then(console.log, onReject);
