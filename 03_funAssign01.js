console.log("========================================Assignment no. 3====================================");
console.log('--------------------------------------------Step 1 -----------------------------------------');
console.log('***********************1st Function with No Argument and No return type*********************');
console.log("1. JavaScript is the  most innovative language on the internet");
console.log('***********************2nd Function with No Argument and No return type*********************');
console.log("2. Just one small positive thought in the morning can change your whole day.");
console.log('--------------------------------------------Step 2 -----------------------------------------');

function personalDetails(firstName, lastName, collegeName){
var firstName = console.log("firstName: Nikhil");
var lastName = console.log('lastName: Sapkal');
var collegeName = console.log('collegeName: R.I.T');
}
personalDetails();

console.log('--------------------------------------------Step 3 -----------------------------------------');

function swapValues(valueOne, valueTwo) { // function declaration
    console.log('Before Swap====>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After Swap====>', valueOne, valueTwo);
}
swapValues("Virat","Anushka");
swapValues('1000','2000')
console.log('--------------------------------------------Step 4 -----------------------------------------');
function addThreeValues(num1,num2,num3) {
var addThreeValues = console.log(num1 + num2 + num3);    
}
addThreeValues('10.23','600','40');
addThreeValues('Hello ',' Good ',' Morning ');