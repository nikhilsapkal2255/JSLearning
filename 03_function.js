console.log("=======1. Function Type: Function With No Argument and no return type==========");
function myPersonalDetails(){
    console.log("MyName: Nikhil");
    console.log("City: Pune");
}
myPersonalDetails(10000)

console.log("=======2. Function Type: Function With Argument and no return type==========");
function swap(valueOne, valueTwo) { // function declaration
    console.log('Before Swap====>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After Swap====>', valueOne, valueTwo);
}
swap(100,200); // function call / invocation
swap("anushka","virat")
swap("pune","mumbai")