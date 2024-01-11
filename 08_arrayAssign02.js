
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`---------------------------------------- Step 1 ------------------------------------------`);
console.log(`Length of Array: ${arrayNumbers.length}`);

console.log(`---------------------------------------- Step 2 ------------------------------------------`);
console.log(`First Element: ${arrayNumbers[0]}  Last Element: ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`---------------------------------------- Step 3 ------------------------------------------`);
console.log(`Last third third element of array: ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`---------------------------------------- Step 4 ------------------------------------------`);
console.log("Print all even number in the array using for of loop");
for (const iterator of arrayNumbers) {
    if(iterator%2==0){
        console.log(iterator);
    }
}
console.log(`---------------------------------------- Step 5 ------------------------------------------`);
console.log("Print all Odd number in the array using for of loop");
for (const iterator of arrayNumbers) {
    if(iterator%2!=0){
        console.log(iterator);
    }
}

console.log(`---------------------------------------- Step 6 ------------------------------------------`);


console.log(`Find all Even positioned array element and sum it using for in loop`);
var sum=0;
for (const key in arrayNumbers) {
    if(key%2==0){
        sum=sum+arrayNumbers[key];
        

    }
}
console.log(`Sum of Even positioned element is: ${sum}`);

console.log(`---------------------------------------- Step 7 ------------------------------------------`);

console.log(`Find all Odd positioned array element and sum it using for in loop`);
var sum=0;
for (const key in arrayNumbers) {
    if(key%2!=0){
        sum=sum+arrayNumbers[key];
    }
}
console.log(`Sum of odd positioned element is: ${sum}`);

console.log(`---------------------------------------- Step 8 ------------------------------------------`);
console.log(`Find sum of all array elements`);
var sum=0;
for (const key in arrayNumbers) {
sum=sum+arrayNumbers[key];
}
console.log(`Sum of all array elements is: ${sum}`);



console.log(`---------------------------------------- Step 9 ------------------------------------------`);
console.log(`Number which are multiply of 5 `);
for (const element of arrayNumbers) {
    if(element%5==0){
        console.log(element);
    
    }
}
console.log(`---------------------------------------- Step 10 ------------------------------------------`);
console.log(`Check if array contains 115`);
if (arrayNumbers.includes(115)) {
    console.log(`Yes....Number is present in array`);
  } else {
    console.log(`Soory.....Number is not present in array`);
  }

  console.log(`---------------------------------------- Step 11 ------------------------------------------`);
  console.log(`Check if array contains 23`);
  if (arrayNumbers.includes(23)) {
    console.log(`Yes......Number is present in array`);
  } else {
    console.log(`Soory.....Number is not present in array`);
  }
  console.log(`---------------------------------------- Step 12 ------------------------------------------`);
  console.log(`Add 55,66 at index 3`);
console.log(`Original Array: ${arrayNumbers}`);
  arrayNumbers.splice(3,0,55,66);
  console.log(`Resulted Array : ${arrayNumbers}`);

  console.log(`---------------------------------------- Step 13 ------------------------------------------`);
  console.log(`Delete 3 elements starting from index 4`);
  console.log(`Original Array: ${arrayNumbers}`);
  arrayNumbers.splice(4,3);
  console.log(`Resulted Array : ${arrayNumbers}`);