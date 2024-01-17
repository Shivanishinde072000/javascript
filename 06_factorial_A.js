

function factorialOfNum(num){

    if(num==0 || num==1){
        return 1;

    }
    if(num<0 || num==null || num==undefined)
    {
        return `Invalid Input : ${num}`;

    }
    let result=1;
    for (let index = 1; index <=num; index++) {
    result=result*index;        
    }
    return result;
} 


console.log(`Factorial of 3 is:  ${factorialOfNum(5)}`);
console.log(`Factorial of 3 is:  ${factorialOfNum(3)}`);
console.log(`Factorial of null is:  ${factorialOfNum(null)}`);
console.log(`Factorial of 8 is:  ${factorialOfNum(8)}`);
console.log(`Factorial of undefined is:  ${factorialOfNum(undefined)}`);
console.log(`Factorial of 9 is:  ${factorialOfNum(9)}`);
console.log(`Factorial of 0 is:  ${factorialOfNum(0)}`);