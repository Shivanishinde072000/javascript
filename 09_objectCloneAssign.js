

const bankSBI={
    name:"SBI",
    branch_Name:"Wakad, Pune",
    branchCode:"SBI303",
    IFSC_Code:"SBI0003546"

}

const bankLocation={
    street:"Wakad Rd, Pune",
    city:"Pune",
    pin:411057
}

console.log(`Object bankSBI: `, bankSBI);
console.log(`Object bankLocation: `, bankLocation);

const cloneBankDetails=Object.assign({},bankSBI,bankLocation);
console.log(`Cloned object details are:`,cloneBankDetails);

const rateOfInterest={
    homeLoanInterest: "15%",
    personalLoanInterest: "12%",
    dueInterest:"13%"
}

const sbiDetails=Object.assign({},bankSBI,bankLocation,rateOfInterest);
console.log(`SBI Details are:`,sbiDetails);
