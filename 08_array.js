let array = [10 , 23, 30 , 23,24,32];
console.log(typeof array);
console.log(array);
console.log(`total elements ${array}`);

console.log(`==================Accessing or Updating Array=============`);
let element = array[2];
console.log(element);
let lastElement = array[array.length-1];
console.log(lastElement);

console.log(`=========Updating an element ================`);
array[2] = 9999;
console.log(array);

console.log(`=========indexof() ================`);
console.log(array.indexOf(10));

console.log(`=========traversing in array==========`);
let arrayNum = [22, 11, 33, 44, 55, 66];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
}
console.log(`=========traversing in array in reverse==========`);
for (let index = arrayNum.length-1 ; index >=0 ; index--) {
    const element = arrayNum[index];
    console.log(element);
}

console.log(`=========traversing in array==========`);

for (let index = 0; index < arrayNum.length; index++) {
    if (index%2==0) {
        const element = arrayNum[index];
        console.log(element);          
    }
}

console.log(`=========Adding element in last==========`);
let arrayNums = [22, 11, 33, 44, 55, 66];
arrayNums.push(88);
console.log(arrayNums);

console.log(`=========Removing element in last==========`);
let arrayNumbers = [22, 11, 33, 44, 55, 66];
arrayNumbers.pop;
console.log(arrayNumbers);

