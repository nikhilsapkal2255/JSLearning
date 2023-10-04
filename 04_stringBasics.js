
var greet = 'Good Morning';
console.log("===============Length property================");
var totalLenght =greet.length;
console.log('Lengthof the string is: ', totalLenght);


console.log("========== charAt()==============");
var charAt0 = greet.charAt(0);
console.log("Character at index 0is:",charAt0);

console.log("========== charAt()==============");
var charAt5 = greet.charAt(5);
console.log("Character at index 0is:",charAt5);

var lastIndexChar = greet.charAt(greet.totalLenght-3);
console.log("Lastindex char is  ", lastIndexChar);

console.log("========== concatination==============");
var firstName = 'Nikhil';
var lastName = '  Sapkal';
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf==============");
var indexOfM = greet.indexOf('M');
console.log("Index of M is:  ", indexOfM);

console.log(greet.indexOf('nin'));

console.log("Index of char Z : ",greet.indexOf('z'));

console.log("Index of char D: ",greet.indexOf('D'));
console.log("Index of char o : ",greet.indexOf('o'));

console.log("============Replace===============");
var result = greet.replace('Morning','Afternoon');
console.log(result);
var result = greet.replace(' ','-');
console.log(result);
console.log("============TOuPPERcASE===============");
var insult = greet.toUpperCase('result');
console.log(insult);

console.log("==========TRIM============");
var str = "           Good Afternoon     ";
var lengthBeforeTrim = str.length;
console.log("Length Before trim :  ", str.lenght);
var result = str.trim();
var lengthAfterTrim = str.length;
console.log("Length after trim: ", result.length);
console.log('Removed extra spaces are: ');

var city = "  My city is Pune              ";
var beforeTrim = city.length;
var cityAfterEndTrim = city.trimEnd();
city.trimEnd();

console.log("==================include()=================");
var result = greet.includes('Morning');
console.log("Is morning word available:  ",result);

console.log("==================search()=================");
var result = greet.search('n');
console.log(result);

console.log('=========Slice=========');
var greet = "hello good morning buddy!!!!";
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6,10);
console.log(result);

console.log("=========Split===========");
var result= greet.split(" ");
console.log(result);

var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log('Total word is : ', words.length);
console.log(`Total word is : ${words.length}`);

console.log(`I am "UI" Developer`);

var num1=10;
var num2=20;
var result = num1+num2;
console.log("Addition of", num1, "and",num2,"is : ", result);
console.log(`Addition of ${num1} and ${num2} is : ${result}`);

