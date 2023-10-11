




function Bank(bankName,city,pin){
    this.bankName = bankName;
    this.city = city;
    this.pin = pin;
    this.show = function(){
        console.log(`Bank Details ${this.bankName} ${this.city} ${this.pin}`);
    }
}
const sbiBank = new Bank('SBI','Pune','411033')
console.log(sbiBank);
console.log(sbiBank.bankName, sbiBank.city, sbiBank.pin);

const AxisBank = new Bank ('Axis','Mumbai','434001');
console.log(AxisBank);

const HDFCBank = new Bank ('HDFC','Banglore','500001');
console.log(HDFCBank);

Bank.prototype.country = "Bharat";
console.log(AxisBank.country);
console.log(HDFCBank);
console.log(HDFCBank.country);

sbiBank.show();
AxisBank.show();

console.log(AxisBank instanceof Bank);