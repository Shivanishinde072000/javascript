
console.log("========Step 1 =========");

function square(num){
console.log("Given value is:",num);
var result=num*num;
console.log("Result is:",result);
}

square(9);// function call
square(4);

console.log("========Step 2 =========");

function mult(n1,n2,n3){
    console.log("Given numbers are:",n1,n2,n3);
    var result=n1*n2*n3;
    return result;
}
var returnValue = mult(3,4,2);
console.log("Result is:",returnValue);
console.log("========Step 3 =========");

function swap(n1,n2){
    console.log("Before swap:",n1,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After swap:",n1,n2);

}
swap(202,404);
swap('shivani','shivtej');
