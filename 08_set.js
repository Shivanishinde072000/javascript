
let array=[44,22,33,44,55,22,66,77];

console.log(array);

const setOfRollNum =new Set();
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(33);
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(66);
setOfRollNum.add(77);
console.log(setOfRollNum);

console.log(`Size of set: ${setOfRollNum.size}`);
console.log(`Deleting 66`);
setOfRollNum.delete(66);
console.log(setOfRollNum);

console.log(`Is element available`);
console.log("Is 22 present: ",setOfRollNum.has(22));

console.log(`Traversing set collection`);
for (const element of setOfRollNum) {
    console.log(element);
}

console.log(`Removing duplicate element from an array`);
let arr=[44,22,33,44,55,22,66,77];
console.log(arr);

const set=new Set(arr);
console.log(set);

// const newArray=[...new Set(arr)];
// console.log(newArray);
const newArray=[...set];
console.log(newArray);


