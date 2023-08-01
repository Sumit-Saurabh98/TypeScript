"use strict";
function added(n1, n2) {
    return n1 + n2;
}
function printNumber(n) {
    console.log(n);
}
let addFunction;
addFunction = added;
//addFunction = printNumber; // it will give error because the types of addFunction taking two parameters and returning a number; but in case of printNumber it's taking only one parameter and returning nothing.
console.log(addFunction(3, 1));
function findResult(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
findResult(6, 6, (a) => {
    console.log(a);
});
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
//   callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
