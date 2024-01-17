

let factorial =function(num){
    if(num==0 || num==1){
        return 1;

    }
    if(num<0)
    {
        return `InvalidInput that is negative number: ${num}`;

    }
    let result=1;
    for (let index = 1; index <=num; index++) {
    result=result*index;        
    }
    return result;
} 
//factorial(3);

console.log(`Factorial of 3 is:  ${factorial(3)}`);
console.log(`Factorial of 4 is:  ${factorial(4)}`);