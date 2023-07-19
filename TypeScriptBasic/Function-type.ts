function add(n1:number, n2:number){
    return n1 + n2;
}

function printNumber(n:number){
    console.log(n);
}

let addFunction :(a:number, b:number)=>number;

addFunction = add;

//addFunction = printNumber; // it will give error because the types of addFunction taking two parameters and returning a number; but in case of printNumber it's taking only one parameter and returning nothing.

console.log(addFunction(3, 1));

function findResult(n1:number, n2:number, cb:(num:number)=>void){
    const result = n1+n2;
    cb(result)
}

findResult(6, 6, (a)=>{ // no need to specify here the types of a because we have already specify during the declaration.
    console.log(a);
})


function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }


  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });

//   callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.