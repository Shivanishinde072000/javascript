

let str="I am very good IT developer";
let vowelCount=0;
for (let index = 0; index <str.length; index++) {
    let char=str.charAt(index).toLowerCase();
    if(char=='a' || char=='e' || char=='i' ||char=='o' || char=='u' ){
        vowelCount=vowelCount+1;
    }
    
}
console.log(`Total number of vowels are: ${vowelCount}`);


function cubeSum(){
    let sum=0;
   for (let index = 1; index <=5; index++) {
    var result=index*index*index;
    sum=sum+result;
    
   }
   console.log(sum);
}
cubeSum();

function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
        
        let char= str.charAt(index);
        if(index%2==1 && char!=" "){
            console.log(str.charAt(index));
        }
    }
}
oddPositionedChars('Hard work always pays back');
oddPositionedChars('Soon I will be UI IT Champ');