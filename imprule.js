function iterate(num) {
    console.log(num);
    return ++num;
}
function alwaysThrows() {
    throw new Error('OH NOES')
}
Promise.resolve(iterate(1)
).then(iterate(2)
).then(iterate(3)
).then(iterate(4)
).then(iterate(5)
).then(alwaysThrows)
.then(null, console.log);