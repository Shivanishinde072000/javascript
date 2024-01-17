
const arrayNum = [11,3,4,11,4,7,3];
const newArray=[];
for (let i = 0; i < arrayNum.length; i++) {
    
    if(newArray.indexOf(arrayNum[i]) === -1){
        newArray.push(arrayNum[i]);
    }

}
console.log(arrayNum);
console.log(newArray);


let str="How are you mate";

let totalWords= str.split(' ');
// console.log(totalWords);
// console.log(totalWords.length);

for (let index = 0; index < totalWords.length; index++) {
    
    let singleWord = totalWords[index];
   // console.log(singleWord);
   if(singleWord.length>1){
    //console.log(singleWord);
    totalWords[index] = singleWord[0].toUpperCase()+ singleWord.slice(1,-1)+ singleWord.slice(-1).toUpperCase();
   }
    else{
        totalWords[i] = singleWord.toUpperCase();
    }
  
}
let result = totalWords.join(' ');
    console.log(result);


let givenStr= "Shivani Suresh Shinde";

console.log(givenStr.slice(-1));