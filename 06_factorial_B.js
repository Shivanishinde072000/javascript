

function factorialOfWordCount(givenStr){
   
    // if (givenStr === null || givenStr === undefined || isNaN(givenStr) || (typeof givenStr === 'string' && givenStr.trim() === '')) {
    //     return "Invalid input. Please provide a non-empty string with words.";
    //   }

    let totalWords = givenStr.split(' ');
    let count= totalWords.length;

    console.log("String count is: ",count);
   
     if(count==0 || count==1){
        return 1;

    }
   if(count<0 || count==null || count==undefined)
    {
        return `Invalid Input : ${num}`;

    }
    
    let result=1;
    for (let index = 1; index <=count; index++) {
         
        result= result*index;
       
    }
    return result;
}
console.log(`Factorial is:  ${factorialOfWordCount("Revision is mother of success")}`);
console.log(`Factorial is:  ${factorialOfWordCount("We never fail, we always learn, Mind it")}`);
console.log(`Factorial is:  ${factorialOfWordCount("")}`);
console.log(`Factorial is:  ${factorialOfWordCount("Shivani Suresh Shinde")}`);
//console.log(`Factorial is:  ${factorialOfWordCount()}`);
//console.log(`Factorial is:  ${factorialOfWordCount(null)}`);



