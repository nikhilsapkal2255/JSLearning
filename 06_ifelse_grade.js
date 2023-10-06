var voteEligible = function(age){
    if (age==0||age<0||age>130 ||age==null ||isNaN(result)) {
        console.log(`Invalid Data: ${age}`);
    } else {
        if (age<18) {
            console.log("You are not eligible for vote",age);
        } else{
            console.log("You are eligible for vote",age);
        }
    }
}
voteEligible(0);
voteEligible(130);
voteEligible(-20);
voteEligible(null);
voteEligible(undefined);
voteEligible("Jenny");
