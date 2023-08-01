function additionTwoNumber(n1:number, n2:number):number{
    // function add(n1:number, n2:number):number{ we can give the return type but best practice to leave it on ts.
    return n1+n2;
}

const printResult = (num:number):void => { 
    console.log("Result: " + num); // if we not write return statement then the return type is void 
}

function ConsoleResult(num:number):undefined{ 
    return; // if we just return nothing then the return type is undefined
}

printResult(additionTwoNumber(5, 6));