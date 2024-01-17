


function jenny(callback){
console.log(`After session ...Jenny stated homework`);
console.log(`Jenny completed all the steps`);
console.log(`She is ready to call Bill...`);

callback();

}

let bill= function(){
    console.log(`I am bill and I am going to play cricket`);
    console.log(`Once jenny complete her homework`);
    console.log(`She will definetly call me back...`);
    console.log(`Then I will copy all the assignment as it is..`);
}


jenny(bill);


let greet = function(){
    console.log(`Hey...Good Morning...`);
}

setTimeout(greet, 5000); //1 Sec = 1000 Mili Sec


setTimeout(function(){
    for (let index = 0; index < 5; index++) {
        console.log(index);
        
    }
   
}, 3000);

// let result = setInterval(function(){
//     console.log(`Hello..`);
// }, 2000);

// clearInterval(result);