/*
function f1(){
    console.log(`Hey......Hi`);
}
function f2(){
    console.log(`How are you..`);
}
f1();
f2();

function personalDetails(firstName,lastName,collageName){
    console.log(`First Name:${firstName}  Last Name:${lastName} Collage Name:${collageName}`);
}
personalDetails("Shivani", "Shinde","GPAN");

function swapValues(v1,v2){

    console.log(`Before Swapping: ${v1} ${v2}`);
     var temp=v1;
     v1=v2;
     v2=temp;
     console.log(`After Swapping: ${v1} ${v2}`);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

function addThreeValues(n1,n2,n3){
    var result=n1+n2+n3;
    console.log(`Addition is: ${result}`);
}

addThreeValues(10,20,30);
addThreeValues(40.5,31.2,45.2);

function addThreeVal(n1,n2,n3){
    var result=n1+n2+n3;
    return result;
}

var resultValue=addThreeVal(10,20,10);
console.log(resultValue);

function multilication(n1,n2){
    var mult=n1*n2;
    return mult;
}

var result=multilication(5,5);
console.log(result);

*/
/*
var givenString="   Hey you are doing good, keep it up     ";
console.log(`Given String: ${givenString}`);
console.log(`Length of given string: ${givenString.length}`);

var removeSpaces=givenString.trim();
console.log(`String after removing extra spaces: ${removeSpaces} and it's length:${removeSpaces.length}`);

var countOfRemovedSpaces= givenString.length-removeSpaces.length;
console.log(`Count of removed spaces: ${countOfRemovedSpaces}`);

var indexOfgood=removeSpaces.indexOf('good');
console.log("Index of good:",indexOfgood);

var substring=removeSpaces.substring(22);
console.log(`Substring is: ${substring}`);

var substring=removeSpaces.slice(12);
console.log(`Substring is: ${substring}`);

var totalWord=removeSpaces.split(" ");
console.log("Total words are:",totalWord.length);

var isStringEndsWithup=removeSpaces.endsWith('up');
console.log(`check: ${isStringEndsWithup}`);

var isStringstartsWithhey=removeSpaces.startsWith('hey');
console.log(`check: ${isStringstartsWithhey}`);
*/

/*
function sqaureOfWordLength(str)
{
    var strLength=str.length;
   
    var square= strLength*strLength;
    console.log(`Square of string length is: ${square}`);

}
sqaureOfWordLength('Javascript');


function f1(){

    var givenString="I am React Developer";
    var lengthOfString=givenString.length;
    console.log(`Length of string: ${lengthOfString}`);
    var totalWord=givenString.split(" ");
    console.log(`Total words: ${totalWord.length}`);
    var result=givenString.length/totalWord.length;
    console.log("Result is:",result);
    var result= givenString.length*totalWord.length;
    console.log("Result is:",result);
}
f1(); 
*/

/*
function greaterNumber(n1,n2){
    var result = n1>n2 ?'n1 is grater' :'n2 is greater';
    console.log(result);
}
greaterNumber(10,-10);

function evenOdd(n1){
    var result= n1%2==0 ? 'Number is even' :'Number is odd';
    console.log(result);
}
evenOdd(9);
evenOdd(20);

function wordLength(word){
    var wordlen= word.length;
    var result= wordlen%2==0 ? 'Word length is even' : 'Word length is odd';
    console.log(result);
}
wordLength('Shivani')
wordLength('shivtejs');
*/

/*
function maleMarriageEligibility(gender,age,boyName){
    var result= gender=='Male' && age>=21 ? 'yes..eligible' :'sorry..not eligible';
    console.log(result);
}
maleMarriageEligibility('Male',25,'Shivtej');
maleMarriageEligibility('Male',19,'Shivtej');
*/


/*
function evenOdd(num)
{
    if (num%2==0) {
        console.log(`Even number`);
    } else {
        console.log(`Odd number`);
    }
}
 evenOdd(6);
 evenOdd(7);

 function voteligibility(age)
 {
    if (age>=18) {
        console.log(`Yes.....you are eligible`);
    } else {
        console.log(`not eligible`);
    }
 }
 voteligibility(17);
 voteligibility(18);

 function stringCharacter(str){
    if (str.length>=10) {
        console.log(`Yes string contain more than 10 characters`);
    } else {
        console.log(`String does not contain more than 10 characters`);
    }
 }
 stringCharacter('Shivani');
 stringCharacter('Javascript language');

 function stringStartsWithJava(givenString){
   
    if (givenString.startsWith("Java")) {
        console.log(`yes match fount`);
    } else {
        console.log(`Sorry match not found`);
    }
 }
 stringStartsWithJava('shivani');
 stringStartsWithJava('Javascript');
 */

 /*
 function marriageEligibilityChecker(gender,age){
    if (gender=='Male' && age>=21) {
        console.log(`Yes you're eligible`);
    } 
    else if(gender=='Female' && age>=18) {
        console.log(`Yes you're eligible `);
    }
    else{
        console.log(`Invalid input`);
    }
 }
 marriageEligibilityChecker('Male',21);
 marriageEligibilityChecker('Female',18);
 marriageEligibilityChecker('Other',23);

 function monthOfYear(month) {
   switch (month) {
     case 1:
       console.log(`Jan`);
       break;
     case 2:
       console.log(`Feb`);
       break;
     case 3:
       console.log(`March`);
       break;
     case 4:
       console.log(`April`);
       break;
     case 5:
       console.log(`May`);
       break;
     case 6:
       console.log(`June`);
       break;
     case 7:
       console.log(`July`);
       break;
     case 8:
       console.log(`Aug`);
       break;
     case 9:
       console.log(`Sep`);
       break;
     case 10:
       console.log(`Oct`);
       break;
     case 11:
       console.log(`Nov`);
       break;
     case 12:
       console.log(`Dec`);
       break;
     default:
       break;
   }
 }
 monthOfYear(7);
 monthOfYear(5);
 */

for (let index = 5; index <=15; index++) {
   console.log(index);
    
}
for (let index = 50; index>=40; index--) {
    console.log(index);
    
}
for (let index = 1; index <=15; index=index+2) {
    console.log(index);
}
for (let index = 0; index <=10; index=index+2) {
   console.log(index);
    
}
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
    
}
for (let index = 1; index <=50; index++) {
    if(index%5==0){
        console.log(index);
    }
    
}