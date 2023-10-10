import React from "react";

let hobbies: string[] = ["Hills", "climb"];

type Person = {
  name: string;
  age: number;
};

// type Person = {
//     name:string,
//     age?:number  // we can add ? to make properties optional.
// }

let person: Person = {
  name: "John",
  age: 20,
};

// let arrOfPerson: Person[];

// union type

let temp: number | string;

temp = 30;

console.log(temp);

console.log(person);

// const  printName = (name:string)=>void

// unknown
// let myName : unknown;

// const  printName : (name:string)=>never

// void return undefined but never does return anything
// we generally prefer unknown over any

// basically alice has two types 1.) type 2.) interface

type Animal = {
  name: string;
  legs: number;
};

const dog: Animal = {
  name: "chiku",
  legs: 4,
};

console.log(dog);

interface Fruit {
  name: string;
  color: string;
}

const mango: Fruit = {
  name: "malda",
  color: "yellow",
};

console.log(mango);

// difference between type and interface


// type extended to another type

type A = {
  a: string;
  b: string;
};

type B = A & {
  c: string;
  d: string;
};

let b: B = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
};

console.log(b);

// interface extended to another interface

interface Flower {
name:string,
color:string
}

interface Guy extends Flower {
  height: string,
  age:number
}

const FlowerGuy = {
  height:6,
  age: 40
}

console.log(FlowerGuy, "Flower");

function Practice() {
  return <div>
    <h1 style={{color:"magenta", border:"1px solid green", fontSize:"80px"}}>Hello MotherFucker</h1>
  </div>;
}

export default Practice;
