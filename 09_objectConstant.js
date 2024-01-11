
const developer={
firstName:"Shivani",
age:23,
isMarried:true

}

console.log(developer);
developer.age=24;
console.log(developer);

//Not Allowed
//developer = {

//}

console.log(`----Object Freezing----`);
Object.freeze(developer);
developer.isMarried=false;
developer.firstName="Jenny";
console.log(developer);
//array=[99,44,55,66];  Not Allowed

console.log(`----Const array`);
const array=[2,3,4,5];
array[0]=100;
console.log(array);

console.log(`Freezing array`);
Object.freeze(array);
array[3]=55;
console.log(array);

