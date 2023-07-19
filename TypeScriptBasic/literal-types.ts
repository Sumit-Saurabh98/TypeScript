function add(input1: number | string, input2: number | string, resultConversion: "as-text" | "as-number") {
    let result;
  
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    // if(resultConversion === "as-number"){
    //     return  +result;
    // }else{
    //     return result.toString();
    // }
    return result;
  }
  
  const combinedNumber = add(5, 6, "as-number");
  console.log(combinedNumber);

  const combinedNamesNumber = add("5", "6", "as-number");
  console.log(combinedNamesNumber);

  const combinedNames = add("sumit", "saurabh", "as-text");
  console.log(combinedNames);
  
  /*
  literal types allow developers to get their specific result conversions
  */