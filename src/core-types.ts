
function adding(num1: number, num2: number){
    return num1 + num2;
}

const num1  = 5;
const num2 = 10;

const result = adding(num1, num2);
console.log(result);

console.log(typeof (result), "checking types");

let number1 : number;

number1 = 5;

console.log(number1);

const person:{
    id:string;
    price:number;
    tags:string[];
    details:{
        title:string;
        description:string;
    };
    author:[number, string]
} 
= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    },
    author:[2, 'john'] // tuple consist only two elements,  the first is the number and the second is the string
  }

  // console.log(person);

  for(const tag of person.tags){
    console.log(tag.toLocaleUpperCase());
  }


  person.author.push("number")  // exception in tuple that it accepts push method


  console.log(typeof person.author, "author type")

  let arrayTypes: any[];
  arrayTypes = ["sunny", 4]

  console.log(person);


  enum target {"ANIMAL", "HUMAN", "BIRDS"};

  console.log(target.ANIMAL); // it gives 0 because it starts from 0, we can set any value to it. like {ANIMAL=100}

// Data Types in TypeScript
/*
number
string
boolean
object
array
any
tuple
enum
*/