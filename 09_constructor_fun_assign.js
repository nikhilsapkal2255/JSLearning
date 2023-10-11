console.log(`===========================Assignment on Function Constructor================================`);

console.log(`***********************Step 2*************************`);


function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode =ifscCode;
    this.branchCode = branchCode;
    // this.show = function(){
    //     console.log(`Bank Details ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
    // }
}

const yesBank = new Bank('YesBank','Pune','yes1112312','B323123');
console.log(yesBank);

const sbiBank = new Bank('SBIBank','PCMC','SBI1112312','B323452354');
console.log(sbiBank);

const mahBank = new Bank('MAHBank','Satara','MAH1112312','B34374576');
console.log(mahBank);

const axisBank = new Bank('AxisBank','Kolhapur','AXIS1112312','B89708790');
console.log(yesBank);

console.log(`***********************Step 5 Log OpenTime & CloseTime*************************`);

Bank.prototype.openTime = `openTime =  "9 AM IST"`;
Bank.prototype.closeTime = `closeTime = "6 PM IST"`;
console.log(`sbiBank ${sbiBank.openTime} && ${sbiBank.closeTime}`);
console.log(`***********************Step 6 Log BankName, OpenTime & CloseTime*************************`);
console.log(`axisBank ${axisBank.openTime} && ${axisBank.closeTime}`);

console.log(`***********************Step 7 Log BankName, OpenTime & CloseTime*************************`);
console.log(`The bank name is : YesBank |Branch Code: B323123 ${yesBank.openTime} && ${yesBank.closeTime}`);




