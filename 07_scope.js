

const country="Bharat";//declara  
let age;
console.log(age);
age=32;
var city;
city="pune";
console.log(city);

//country="India";
console.log(country);
age=45;
console.log(age);

//Variable Redeclaration
//const country="UK";
//let age=23;
var city="Nagar";

//Scope
if (true) {
    var n1=100;
    let n2=200;
    const n3=300;
}
console.log(`Block Scope`);
console.log(n1);
//console.log(n2);
//console.log(n3);

function show(){
    for (let index = 0; index <2; index++) {
        var s1=`s1`;
        let s2=`s2`;
        const s3=`s3`;
    }
    console.log(s1);
    //console.log(s2);
    //console.log(s3);
}
show();