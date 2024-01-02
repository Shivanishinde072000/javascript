function greaterNumber(n1,n2)
{
    
    var result= n1>n2?"n1 is greater Number":"n2 is greater";
    console.log(result);
}

greaterNumber(10,-10);
greaterNumber(800,899);

function isEvenOddNumber(num){

    var result=num%2;
    var evenOdd= result==0?"Given number is Even":"Given number is odd";
    return evenOdd;
}
var returnValue=isEvenOddNumber(2);
console.log(returnValue);

function wordLength(result){
    var count=result.length%2;
    var wordEvenOdd= count==0?"Given string length is Even":"Given string length  is odd";
    return wordEvenOdd;

}

var returnEvenOdd=wordLength("Javascript");
console.log(returnEvenOdd);

var returnEvenOdd=wordLength("developer");
console.log(returnEvenOdd);

var returnEvenOdd=wordLength("Google");
console.log(returnEvenOdd);