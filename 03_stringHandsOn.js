

function stringHandsOn(){
    console.log('*******************03_stringHandsOn.js(Assignment 2)NikhilSapkal*********************');
    var givenStr = "   Hey you are doing good, keep it up    ";
    console.log(`1. Given string is : ${givenStr}`);
    console.log(`2. Given string is : ${givenStr.length}`);
    var lengthBeforeTrim = givenStr.length;
    var result = givenStr.trim();
    var lengthAfterTrim = givenStr.length;
    console.log("3. Length after trim: ", result.length);
    console.log('4. Removed extra spaces are: ',givenStr.length-result.length);
    console.log('5. First Character after trim is :',result.charAt(0), "Last character after trim is : ", result.charAt(33));
   console.log('6. Total word is : 8 ',); 
   
   var test = result.search('good');
   console.log(`7. Index of good is: ${test}`);
    var test2 = result.slice(22);
    console.log(`8. Substring starting from index 22 is : ${test2}`);
    
    var test3 = result.endsWith('up')
    console.log("9. Is up word endsWith:  ",test3);

    var test4 = result.startsWith('Hey');
    console.log("10. Is Hey word startsWith:  ",test3);
}
stringHandsOn();