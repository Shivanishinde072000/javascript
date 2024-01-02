var greet="Good Morning";
console.log("Total number of character in the string is:",greet.length);
var charAtIndex5=greet.charAt(5);
console.log("Character at index 5 is:",charAtIndex5);
console.log(typeof charAtIndex5);

var str1="Hey";
var str2="Beauty";
var concatResult=str1.concat(str2);
console.log("Concated string is:",concatResult);

var indexOfD= greet.indexOf('d');
console.log("Index of D is:",indexOfD);

var indexOfMorning= greet.indexOf('Morning');
console.log("Index of Morning is:",indexOfMorning);

var indexOfnin= greet.indexOf('nin');
console.log("Index of nin is:",indexOfnin);

var indexOfo= greet.indexOf('o');
console.log("Index of o is:",indexOfo);

var indexOfo= greet.lastIndexOf('o');
console.log("Index of o is:",indexOfo);


var myName="Shivani Shinde";
var result=myName.replace('Shinde','S');
console.log("My name is:",result);

var str="Shivani";
console.log("Uppercase:",str.toUpperCase());

var city="    pune     ";
console.log("Lenght of city:",city.length);
var trimResult=city.trim();
console.log("After trim city is:",trimResult,"It's lenght is:",trimResult.length);
console.log(`After trim city is: ${trimResult}, It's length is:${trimResult.length}`);

var num=15;
var result=num.toString();
console.log(`Number is: ${15}, It's type is: ${typeof num}`);
console.log(`After conversion number is:${result}, It's type is:${result}`);

var greet="Good Morning";
var isAvailable=greet.includes("ing");
console.log(`Is substring "ing" available: ${isAvailable}`);

var result=greet.slice(5,9);
console.log(`Slice is: ${result}`);

var word="Jenny Herry";
var result=word.split(" ");
console.log(result);
console.log(`Total words in the string is: ${result.length}`);
console.log(typeof result);

var givenString="Hey I'm UI and React devloper";
var result=givenString.split(" ");
console.log(`Total words in the string is: ${result.length}`);

