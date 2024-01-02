console.log("========= Step 1 =========");
function num() {
  console.log("Function with no arguments and no return value");
}
num();
function num2() {
  console.log("Function with no argument and no return value");
}
num2();
console.log("========= Step 2 =========");
function personalDetails(firstName,lastName,collageName){
console.log("First Name:",firstName+"  "+"Last Name:",lastName+"  "+"Collage Name:",collageName);
}
personalDetails('Shivani','Shinde','MMIT');

console.log("========= Step 3 =========");
function swapValues(n1,n2){
    console.log("Before swap:",n1,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After swap:",n1,n2);

}
swapValues('Virat','Anushka');
swapValues(1000,2000);
console.log("========= Step 4 =========");
function addThreeValues(n1,n2,n3){
    var add=n1+n2+n3;
    console.log("Addition is:",add);
}
addThreeValues(10.23,600,40);
addThreeValues('Hello','Good','Morning');
