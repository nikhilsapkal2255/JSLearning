


// object creation using object literals
let person = {
    name: "Jenny",
    age: "22",
    city: "Pune",
    isMarried: true,
}
console.log(typeof person);
console.log(person);

//property access
// 1. Dot Notation
let personName = person.name;
console.log(`Person name is ${personName}`);

console.log(`Person age is : ${person.age}`);

//1. [] Notation
let nameOfPerson = person["name"]
console.log(`Person name is: ${nameOfPerson}`);

console.log(`Adding property in object`);
person.city="Pune";
console.log(person);
console.table(person);

console.log(`Update property in object`);
person.age = 22;
console.log(person);

console.log(`Delete property in object`);
delete person.age;
console.log(person);


