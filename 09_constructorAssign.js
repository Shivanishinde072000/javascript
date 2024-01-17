
  function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    console.log(`Bank Name: ${bankName}, Location: ${location}, IFSC Code: ${ifscCode}, Branch Code: ${branchCode}`);
  }
  

const yesBank= new Bank('Yes Bank', 'Pune','453342', '302');
const sbiBank= new Bank('SBI Bank', 'Mumbai','845643', '103');
const mahBank= new Bank('Maharastra Bank', 'Ahmednagar','624634', '501');
const axisBank= new Bank('Axis Bank', 'Pune','994645', '709');
console.log(yesBank);
console.log(sbiBank);
console.log(mahBank);
console.log(axisBank);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime ="6 PM IST";

console.log(`SBI Bank opening time: ${sbiBank.openTime} , Closing time: ${sbiBank.closeTime}`);
console.log(`Axis Bank opening time: ${axisBank.openTime} , Closing time: ${axisBank.closeTime}`);
console.log(`Bank Name is: ${yesBank.bankName}, Opening time is: ${yesBank.openTime} , Branch Code is: ${yesBank.branchCode}`);



