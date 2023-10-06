function squareOfWordLength(str) { 
 var lengthOfStr =  str.length;
 var result = lengthOfStr*lengthOfStr;
 //console.log(result);
 return result;
}
console.log(`****************STEP 1***************`);

var result = squareOfWordLength("Javascript");
console.log(`1.1. Given string is "JavaScript" and its square of length is:${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`1.2. Given string is "Google Chrome" and its square of length is:${result}`);

var result = squareOfWordLength("Developer Smart");
console.log(`1.3. Given string is "JavaScript" and its square of length is:${result}`);

console.log(`****************STEP 2***************`);

function givenStr(){
    var givenStr = "I am Angular Developer";
    var words = givenStr.split(" ");
    var averageLength = givenStr.length / words.length;
    var multiply = givenStr.length * words.length;     
    console.log(`2.1. the string length and divide by total number words a Result is ${averageLength}`);
    console.log(`2.2. the string length and multiple by the total words ${multiply}`);
}

var result1 = givenStr("I am Angular Developer")
