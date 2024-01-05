
function gradeSystem(marks){

if (marks<0 || marks>100 || marks==undefined || isNaN(marks) ) {//Invalid Input
    console.log(`${marks} Invalid input`);
} 
else if(marks<35){//fail
    console.log(`Your marks is ${marks} , Unfortunetly you are Failed`);

}
else if(marks>=35 && marks<50){
    console.log(`Your marks is ${marks} , You are pass...Grade is => 'C'`);
}
else if(marks>=50 && marks<75){
    console.log(`Your marks is ${marks} , You are pass...Grade is=> 'B'`);
}
else{
    console.log(`Your marks is ${marks} , You are pass...Grade is=> 'A'`);
}
}

gradeSystem(-1);
gradeSystem(101);
gradeSystem(undefined);
gradeSystem(null);
gradeSystem(NaN);