
console.log(`======================= Step 1 =========================`);
function expression1(num){
    if(num%2==0)
    {
        console.log(`Given number ${num} is Even`);
    }
    else{
        console.log(`Given number ${num} is Odd number`);
    }
}
expression1(45);
expression1(70);
expression1(67);
expression1(98);


console.log(`======================= Step 2 =========================`);
function expression2(age){
    if (age>=18) {
        console.log(`Yes....person is eligible for vote`);
    } 
    else {
        console.log(`Soory....you are not eligible for vote`);
    }
}
expression2(18);
expression2(20);
expression2(17);
expression2(40);


console.log(`======================= Step 3 =========================`);
function expression3(getString){
    var calculateLength=getString.length;
   
    if (calculateLength>10) {
        console.log(`Yes given string ${getString} - containing more than 10 characters`);
    } else {
        console.log(`No given string ${getString} - is not containing more than 10 character`);
    }
}
expression3("Javascript-ES6");

console.log(`======================= Step 4 =========================`);

function checkString(givenString){
    if (givenString.startsWith("Java")) {
        console.log(`The given string ${givenString} : starts with 'java'`);
    } else {
        console.log(`The given string ${givenString} : does not start with 'java'`);
    }
}
checkString("Javascript Language");