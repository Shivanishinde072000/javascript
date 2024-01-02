function squareOfWordLength(word){

    var wordLength=word.length;
    console.log(`Length of word is:${wordLength}, Sqaure of word length:${wordLength*wordLength}`);
}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Crome");
squareOfWordLength("Developer Smart");

function wordLen(){
    var givenString="I am React Developer";
    var wordsCount=givenString.split(" ");
    var totalWords=wordsCount.length;
    var stringLength=givenString.length;

    var result=stringLength/totalWords;
    console.log(`Length of given string:${stringLength}, Total words in string is:${totalWords}, Division is:${result}`);
}
 wordLen();

