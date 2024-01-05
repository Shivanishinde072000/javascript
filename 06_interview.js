function interview(gradScore,hscScore,sscScore,candidateName){

    if (gradScore>=70 && hscScore>=80 && sscScore>=90) {
        console.log(`Congratulations...${candidateName} you are eligible for TCS interview.`);
    }
    
    else {
        console.log(`Unfortunetly '${candidateName}' you are not eligible for interview`);
    }
}
interview(80,86,90,'Shivani');
interview(70,65,55,'Awanti');
interview(60,79,88,'Vaishali');
