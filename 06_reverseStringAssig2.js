function reverseString(str){
let result=" ";
    for (let index = str.length-1; index>=0; index--) {
        if(str.charAt(index) !=" "){
            result=result+str.charAt(index);
        }
        
            
    }
    console.log(result); 
}
reverseString('Hard word always pays back');
