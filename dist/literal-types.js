"use strict";
function newAdd(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === "as-number"){
    //     return  +result;
    // }else{
    //     return result.toString();
    // }
    return result;
}
const CombinedNumber = newAdd(5, 6, "as-number");
console.log(CombinedNumber);
const combinedNamesNumber = newAdd("5", "6", "as-number");
console.log(combinedNamesNumber);
const CombinedNames = newAdd("sumit", "saurabh", "as-text");
console.log(CombinedNames);
/*
literal types allow developers to get their specific result conversions
*/ 
