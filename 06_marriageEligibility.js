

function  marriageEligibilityChecker(gender,age){
 if(gender=="Male" && age>=21)
{
    console.log(`Gender is: ${gender} & Age: ${age} , 'Yes' you are eligible for marriage.`);
}
else if(gender=="Female" && age>=18)
{
    console.log(`Gender is: ${gender} & Age: ${age} , 'Yes' you are eligible for marriage.`);
}
else{
    console.log(`Gender is: ${gender} & Age: ${age} , Sorry you are 'not' eligible for marriage.`);
}
}
marriageEligibilityChecker("Male",17);
marriageEligibilityChecker("Male",25);
marriageEligibilityChecker("Female",28);
marriageEligibilityChecker("Female",16);
marriageEligibilityChecker("Other",35);
marriageEligibilityChecker("Other",41);