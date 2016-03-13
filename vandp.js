function attachTitle(fulfill) {
    return('DR. ' + fulfill);    
}
var promise = new Promise(function(fulfill, reject) {
    fulfill('MANHATTAN');
}).then(attachTitle, null).then(console.log, null);