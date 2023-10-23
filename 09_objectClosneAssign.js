fuction personalDetail(name,age,city,graduation)){
    name: "Nikhil";
    age: "26";
    city: "Pune";
    graduation: "B.Tech in Engineering";
}
console.log(personalDetail.name);
console.log(personalDetail.age);
console.log(personalDetail.city);
console.log(personalDetail.graduation);


console.log("************");
console.log('Given a string company = “Codemind Technology” ');
console.log('Reverse of given string is as below:');
const company = 'Codemind Technology';
let reverse = '';
for (let index = company.length-1 ; index >=0 ; index--) {
    let char = company.charAt(index);
    if (char==' '){
        break;
    }
    else {
        reverse = reverse + char;
    }
}
console.log(reverse);
