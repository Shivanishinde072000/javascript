//FE -Function Expression
//storing function inside variable
// var display = function () {
//   console.log("Display");
// };

// display(); //FE- function call

function maleMarriageEligibility(gender, age, boyName) {
  var result = gender == "Male" && age > 21 ? `Hey, "${boyName}" you are eligible for marriage.`
      : `Unfortunately "${boyName}" you are not eligible for marriage.`;

  console.log(result);
};
maleMarriageEligibility("Male", 25, "BillGates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

function femaleMarriageEligibility(gender, age, girlName) {
    var result = gender == "Female" && age >=18 ? `Hey,  "${girlName}" you are eligible for marriage. `
        : `Unfortunately "${girlName}" you are not eligible for marriage.`;
  
    console.log(result);
  };
  femaleMarriageEligibility("Female", 16, "Jennyfer");
  femaleMarriageEligibility("Female", 27, "Malinda Gates");