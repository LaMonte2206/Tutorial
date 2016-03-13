var promise = new Promise(function(fulfill, reject) {
    setTimeout(function() { 
       
    }, 300);
}).then(function(success) {
    console.log(success);
}, function(err) {
    console.log(err);
});




first()
.then(function(success) {
    return second(success);
})
.then(function(success) {
   console.log(success); 
});