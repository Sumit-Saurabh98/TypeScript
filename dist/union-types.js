"use strict";
function add(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedNumber = add(5, 6);
console.log(combinedNumber);
const combinedNames = add("sumit", "saurabh");
console.log(combinedNames);
/*
union types accepts more than 1 types and we can pipe them. number | string | boolean
*/
