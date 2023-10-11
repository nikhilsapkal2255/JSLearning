console.log(`**************************STEP 2**************************`);
class college {
    //properties
    collegeName
    Address
    University
    PinCode

    //constructor
    constructor(collegeName, Address, University, PinCode){
        this.collegeName = collegeName;
        this.Address = Address;
        this.University = University;
        this.PinCode = PinCode;
    }
    //methods
    display(){
        console.log(`College Name: ${this.collegeName}; Address ${this.Address};University ${this.University} ; Pincode ${this.PinCode}`);
    }
}

const n1 = new college(`RIT`,'Islampur','Chhatrapati Shivaji University','416415');
console.log(n1);
const n2 = new college(`Walchand`,'Sangli','Chhatrapati Shivaji University','416416');
console.log(n2);
const n3 = new college(`Dange`,'Ashta','Chhatrapati Shivaji University','416417');
console.log(n3);
const n4 = new college(`COEP`,'Pune','Pune University','411033');
console.log(n4);
function traversObject(colObject) {
    for (const key in colObject) {
            
                console.log(`${key},${colObject[key]}`);
    }
}
traverseObject(n1college);
traverseObject(n2college);
traverseObject(n3college);
traverseObject(n4college);