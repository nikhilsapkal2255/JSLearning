console.log(`**************************STEP 1**************************`);
class vehicle{
//properties
    Make
    Model
    CubicCapacity
    FuelType
    SeatingCapacity

    //constructor
    constructor(Make, Model, CubicCapacity, FuelType, SeatingCapacity){
    this.Make = Make;
    this.Model = Model;
    this.CubicCapacity = CubicCapacity;
    this.FuelType = FuelType;
    this.SeatingCapacity = SeatingCapacity;
    }
    //methods
    details(){
        console.log(`Vehicle Make:-${this.Make}; Model:-${this.Model}; CubicCapacity:-${this.CubicCapacity}; FuelType:-${this.FuelType}; Seating Capacity:-${this.SeatingCapacity}`);
}
}

const vehicleMercedes = new vehicle ('Mercedes','G-Class','3982cc','Petrol','5seater');
console.log(vehicleMercedes);

const vehicleAudi = new vehicle ('Audi','R8','5204cc','Petrol','2seater');
console.log(vehicleAudi);

const vehicleBMW = new vehicle ('BMW','3-Series GT','1998cc','Petrol','5seater');
console.log(vehicleBMW);

const vehicleMahindra = new vehicle ('Mahindra','Thar','2187cc','Diesel','4seater');
console.log(vehicleMahindra);

const vehicleTata = new vehicle ('Tata','G-Class','3982cc','CNG','5seater');
console.log(vehicleTata);

console.log(`==============Traversing of Array===============`);
const arrayOfVehicles = [vehicleMercedes,vehicleAudi, vehicleBMW, vehicleMahindra, vehicleTata]
for (const element of arrayOfVehicles) {
    element.details();
}

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
const collegeRIT = new college (`RIT`,'Islampur','Chhatrapati Shivaji University','416415');
console.log(collegeRIT); 

const collegeWalchand = new college (`Walchand`,'Sangli','Chhatrapati Shivaji University','416416');
console.log(collegeWalchand); 

const collegeDange = new college (`Dange`,'Ashta','Chhatrapati Shivaji University','416417');
console.log(collegeDange); 

const collegeCOEP = new college (`COEP`,'Pune','Pune University','411033');
console.log(collegeCOEP);

console.log(`******************Step 3*********************`);

const arrayOfCollege = [collegeRIT,collegeWalchand, collegeDange, collegeCOEP]
for (const element of arrayOfCollege) {
    element.details();
}

console.log(`******************Step 3*********************`);

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

const n2 = new college(`Walchand`,'Sangli','Chhatrapati Shivaji University','416416');

const n3 = new college(`Dange`,'Ashta','Chhatrapati Shivaji University','416417');

const n4 = new college(`COEP`,'Pune','Pune University','411033');

function traversObject(colObject) {
    for (const key in colObject) {
                            console.log(`${key},${colObject[key]}`);
    }
}
traverseObject(n1college);
traverseObject(n2college);
traverseObject(n3college);
traverseObject(n4college);











console.log(`My Code`);
function traverseObject(objectcollege) {
    for (const collegeName in objectcollege) {
        console.log(`${collegeName}`);
    }
    for (const Address in objectcollege) {
        console.log(`${Address}`);
    }
    for (const University in objectcollege) {
        console.log(`${University}`);
    }
    for (const PinCode in objectcollege) {
        console.log(`${PinCode}`);
    }
}
traverseObject(collegeRIT)
traverseObject(collegeWalchand)
traverseObject(collegeDange)
traverseObject(collegeCOEP)



