


// object creation using object literals
let person = {
    name: "Jenny",
    age: "22",
    city: "Pune",
    isMarried: true,
    show: function () {
        console.log(`hii , how are you?`);
    }
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

console.log(`Adding method in an object`);
person.show();
person.display= function(){
    console.log(`I am inside  display function`);
}
console.log(person);
person.display();


console.log(`============Nested Object==============`);
const personElon ={
    name: 'Elon Musk',
    age: 54,
    companies: {
    Tesla: '300B USD',
    Twitter: '10B USD',
    SpaceX: '200B USD',
    },
    kidsName: ["Deny", "chimmy","stew"],


}
console.log(personElon.companies.Tesla);
console.log(personElon.kidsName[0]);
console.log(personElon.kidsName.length);


personElon.kidsName.push("stew");
for (const kids of personElon.kidsName) {
    console.log(kids);
}
// personElon.companies.tesla.location



