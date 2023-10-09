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
var str = "i am ui Developer";
var count = 0;
for (let index = 0; index < str.length-1 ; index++) {
    var char = str.charAt(index);
    if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
        count = count +1 ;
    }
}
console.log(`Total no. of vowels are : ${count}`);

console.log('===========================');
var str = "I am ui Developer";
var count = 0;
var vowelCaps = "AEIOU";
var vowelLower = 'aeiou';
for (let index = 0; index < str.length-1 ; index++) {
    var char = str.charAt(index).toUpperCase();
    if (vowelCaps.includes(char) || vowelLower.includes(char) ) {
        count = count +1 ;
    }
}
console.log(`Total no. of vowels are : ${count}`);

