console.log(`**************Step 1*****************`);
function greaterNumber(n1,n2) {
    var n1 = 100;
    var n2 = 200;
    var result = n1>n2? n1: n2;
    return result;
    //console.log(result);
}
var greaterNumber()

function isEvenOrOddNum(){
    //var num1 = num1%2 == 0 ? "Given No. is even" : "Given No. is odd";

}

function wordLength(str){
    var lengthOfStr =  str.length;
    //var result = lengthOfStr%2 == 0 ? "Given No. is even", : "Given No. is odd";
    console.log(result);
    return result;
}
var result = wordLength("JavaScript");





// 1. Find the greatest number amongst two numbers.
const greaterNumber = (a, b) => (a > b ? console.log(`${a} is greater`) : console.log(`${b} is greater`));

// Test greaterNumber function
greaterNumber(10, -10);
greaterNumber(800, 899);

// 2. Check if a number is even or odd.
const isEvenOrOddNum = (num) => (num % 2 === 0 ? true : false);

// Test isEvenOrOddNum function
console.log(isEvenOrOddNum(29) ? "Even" : "Odd");
console.log(isEvenOrOddNum(44) ? "Even" : "Odd");
console.log(isEvenOrOddNum(0) ? "Even" : "Odd");
console.log(isEvenOrOddNum(101) ? "Even" : "Odd");

// 3. Check which word has even or odd length.
const wordLength = (word) => (word.length % 2 === 0 ? "EVEN" : "ODD");

// Test wordLength function
console.log(wordLength("JavaScript")); // ODD
console.log(wordLength("developer")); // EVEN
console.log(wordLength("Google")); // EVEN
