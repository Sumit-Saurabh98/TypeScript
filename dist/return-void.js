"use strict";
function additionTwoNumber(n1, n2) {
    // function add(n1:number, n2:number):number{ we can give the return type but best practice to leave it on ts.
    return n1 + n2;
}
const printResult = (num) => {
    console.log("Result: " + num); // if we not write return statement then the return type is void 
};
function ConsoleResult(num) {
    return; // if we just return nothing then the return type is undefined
}
printResult(additionTwoNumber(5, 6));
