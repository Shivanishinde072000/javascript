

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);

console.log(`---------------------------------------------- Step 1 -------------------------------------------------`);
console.log(`First Element: ${fruits_seasonal[0]},  Last Element: ${fruits_seasonal[fruits_seasonal.length-1]} `);

console.log(`---------------------------------------------- Step 2 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After adding Papaya: ${fruits_seasonal}`);

console.log(`---------------------------------------------- Step 3 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
fruits_seasonal.splice(3,1);
console.log(`After removing mango : ${fruits_seasonal}`);

console.log(`---------------------------------------------- Step 4 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`After adding pineapple at last : ${fruits_seasonal}`);

console.log(`---------------------------------------------- Step 5 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
fruits_seasonal.splice(4,0,"Dragon fruit")
console.log(`After adding Dragon fruit before water melon : ${fruits_seasonal}`);

console.log(`---------------------------------------------- Step 6 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
fruits_seasonal.splice(1,1,"Kiwi");
console.log(`After replacing organge with kiwi : ${fruits_seasonal}`);

console.log(`---------------------------------------------- Step 7 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
const element = fruits_seasonal.slice(1,4);
console.log(`Elements starting from 1 - 4 : ${element}`);

console.log(`---------------------------------------------- Step 8 -------------------------------------------------`);

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array: ${fruits_seasonal}`);
const lastThreeElements = fruits_seasonal.slice(-3);
console.log(`Last three elements : ${lastThreeElements}`);




