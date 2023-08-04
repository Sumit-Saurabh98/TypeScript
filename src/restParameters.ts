const rest = (...numbers: number[]) =>{
   const total =  numbers.reduce((acc, curr)=>{
        return acc + curr;
    },0)
    return total;
}

const results = rest(2, 3, 4, 5, 5)
console.log(results)