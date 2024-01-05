
function dayOfTheWeek(dayNum){

switch (dayNum) {
    case 1:
        console.log(`Day number ${dayNum} ===>Monday`);
        break;

        case 2:
        console.log(`Day number ${dayNum} ===>Tuesday`);
        break;
        case 3:
        console.log(`Day number ${dayNum} ===>Wensday`);
        break;
        case 4:
        console.log(`Day number ${dayNum} ===>Thursday`);
        break;
        case 5:
        console.log(`Day number ${dayNum} ===>Friday`);
        break;
        case 6:
        console.log(`Day number ${dayNum} ===>Saturday`);
        break;
        case 7:
        console.log(`Day number ${dayNum} ===>Sunday`);
        break;
    default:
        console.log(`${dayNum} is Invalid Input`);
        break;
}
}
dayOfTheWeek(null);
dayOfTheWeek(2);
dayOfTheWeek(undefined);
dayOfTheWeek(6);
dayOfTheWeek(NaN);
dayOfTheWeek(1);
dayOfTheWeek(-1);



