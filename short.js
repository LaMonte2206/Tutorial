var promise = new Promise(function(fulfill, reject){
    fulfill('SECRET VALUE');
});
var promise = Promise.resolve('SECRET VALUE');

var promise = new Promise(function(fulfill, reject){
    reject(new Error('SECRET VALUE'));
}).catch(function(err) {
    console.log(err);
});

var promise = Promise.reject(new Error("SECRET VALUE"));