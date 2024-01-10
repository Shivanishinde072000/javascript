let array=[11,22,33,44,55,66,77];
console.log(`Traversing an array using for in loop...`);
for (const index in array) {
    console.log(array[index]);
}

var sum=0;
for (const index in array) {
    sum=sum+array[index];   
}
console.log(`Sum of array element is: ${sum}`);

for (const index in array) {
   if(array[index]%2==0){
    console.log(`even`);
   }
   else{
    console.log(`odd`);
   }
}

console.log(`Traversing an array using for of loop...`);

let arrayNum=[4,5,6,7,3];
var sum=0;
for (const element of arrayNum) {
  
    sum=sum+element;
}
console.log(`sum= ${sum}`);

const str='Developer UI and Backend';
const vowels='aeiou';
let count=0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}
console.log(`Vowels count is: ${count}`);

let arrayOfFriends=['Jenny','Elon','Bill'];
const result=arrayOfFriends.join("-");
console.log(typeof result);
console.log(result);

arrayOfFriends.reverse();
console.log(arrayOfFriends);

const word="Developer UI and Backend";
const arrayOfWords=word.split(" ");
console.log(arrayOfWords);
console.log(arrayOfWords.length);

const words=word.split("");
console.log(words);
words.reverse();
console.log(words);
var resultString=words.join("");
console.log(resultString);