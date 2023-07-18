
function add(num1: number, num2: number){
    return num1 + num2;
}

const num1  = 5;
const num2 = 10;

const result = add(num1, num2);
console.log(result);

console.log(typeof (result), "checking types");

let number1 : number;

number1 = 5;

console.log(number1);

// const product:{
//     id:string;
//     price:number;
//     tags:string[];
//     details:{
//         title:string;
//         description:string;
//     }
// } 
const person= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

  console.log(person);

  for(const tag of person.tags){
    console.log(tag.toLocaleUpperCase());
  }

  let arrayTypes: any[];
  arrayTypes = ["sunny", 4]



// Data Types in TypeScript
/*
number
string
boolean
object
array
any
*/