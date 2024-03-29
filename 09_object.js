
let person = {
    firstName: "Shivani",
    age: 23,
    isMarried:true
}

console.log(person);
console.log("Dot notation: ",person.firstName);
console.log("Sqaure notation: ",person["firstName"]);

person.designation="Developer";
console.log(person);

person.age=22; // Update
console.log(person);

person.isMarried=false;
console.table(person);
delete person.designation;
console.table(person);

console.log(`Empty Object....`);
let address = {

}
address.city="Pune";
console.log(address);

let user = {
    userName: "Jenny",
    country:"USA",
    address:{
        city:"Pune",
        street: "Wakad",
        pin: 410452,
        getAddress :function(){
            console.log(`Complete address: ${this.flatNo},${this.street},${this.city},${this.pin}`);
        }
    },
    show : function(){
        console.log(`Inside show Function`);
    }
}
 console.log(user);
 let country = user.country;
 console.log(country);

 user.show();
 
 console.log(user.address.pin);
user.address.flatNo=101;
console.log(user.address.flatNo);

console.log(user.address);

user.address.getAddress();

let developer={
    firstName:"Shivani",
    age:23,
    isMarried:true,
    skills:["C","CPP","HTML","CSS","JavaScript"]
}

for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key ===> ${key}, Value ==> ${element}`);
        
    }
}

console.log(developer.skills);

developer.skills.push("html");
console.log(developer.skills);

developer.skills.shift();
console.log(developer.skills);
 

const keys = Object.keys(developer);
console.log(keys);

const values = Object.values(developer);
console.log(values);
console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
for (const element of values) {
    console.log(element);  
}

console.log(`Object entries....`);
const entries= Object.entries(developer);
for (const element of entries) {
    console.log(element);
}
console.log(`Accessing nested array element using double [] [] brackets`);
console.log(entries[0][0]);
console.log(entries[0][1]);

console.log(`in operator`);

const isAgeAvailable="age" in developer;
console.log(isAgeAvailable);

const isCityAvailable="city" in developer;
console.log(isCityAvailable);
