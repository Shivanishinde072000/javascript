
const arrayNum=[2,4,6,8];
console.log(arrayNum);
console.log(`Total elements in array is ${arrayNum.length}`);
console.log(`Array type is:${typeof(arrayNum)}`);

console.log(`-----Read or Access values`);
const elementAIndex2= arrayNum[2];
console.log(`Element at index 2 is: ${elementAIndex2}`);

console.log(`-----Read or Access values`);
for (let index = 0; index < arrayNum.length; index++) {
    console.log(arrayNum[index]);
    
}

console.log(`-----Sum of array element---`);
let sum=0;
for (let index = 0; index < arrayNum.length; index++) {
  sum=sum+arrayNum[index];
    
}
console.log("Sum:",sum);

const elementAIndex6= arrayNum[6];
console.log(`Element at index 6 is: ${elementAIndex6}`);

let array=["Jenny","Menny","Bill"];
console.log(`Adding element to array`);

array.push("Elon");
console.log(array);

console.log(`Adding an element at beginning`);
array.unshift("Narayan");
console.log(array);


let arrayNumber=[11,22,33,44,55];
console.log(arrayNumber);
console.log(`Removing first element from array`);
arrayNumber.shift();
console.log(arrayNumber);

console.log(`Removing last element from array`);

arrayNumber.pop();
console.log(arrayNumber);

console.log(`Selecting multiple elements`);
let arrayNums=[11,22,33,44,55,66,77];
console.log(arrayNums);
let elements=arrayNums.slice(2);
console.log(elements);

const elementMiddle=arrayNums.slice(1,4);
console.log(elementMiddle);

console.log(`Removing and deleting elements`);
const removeElements=arrayNums.splice(3);
console.log(removeElements);
console.log(`Original array:${arrayNums}`);

console.log(`Removing and deletingan elements in middle`);
let arrayNu=[11,22,33,44,55,66,77];
const removed=arrayNu.splice(2,1);
console.log(`Deleted elements: ${removed}`);
console.log(`Original array: ${arrayNu}`);


console.log(`Inserting an element in the middle`);
let arrayN=[11,22,33,44,55,66,77];
console.log(`Before inserting element: ${arrayN}`);
arrayN.splice(3,0,99);
console.log(`After inserting 99`);
console.log(arrayN);

let arrayNN=[11,22,33,44,55,66,77];
arrayNN.splice(2,1,100);
console.log(`Replace 33: ${arrayNN}`);
arrayNN.splice(5,6,500,700)
console.log(`Replace 66 and 77: ${arrayNN}`);