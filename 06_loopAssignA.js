console.log('===========================');
var str = "I am very good IT Developer";
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

console.log('======================');
// 1*1 + 2*2 + 3*3
var result = 0;
for (let index = 1; index <=5 ; index++) {
    result = result + index * index * index;
}
console.log(`Answer is ${result}`);


function oddPositionedChars(str) {
    for (let index = 0; index < str.length-1 ; index++) {
        if (index%2!=0 && str.charAt(index)!="") {
            console.log(str.charAt(index));
            }
    }

}
oddPositionedChars();