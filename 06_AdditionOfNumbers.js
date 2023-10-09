// 1 to 10
var sum = 0;
for (let index = 0; index <=10; index++) {
    sum = sum + index;
}
console.log(`Addition of 1 to 10 is : ${sum}`);

// reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1 ; index >=0 ; index--){
   reverseStr = reverseStr + str.charAt(index);
}
console.log(`Reverse string is ${reverseStr}`);

//count the vowels
var str = "I am UI Developer";
