

function stringHandsOn(){
    var givenStr = "   Hey you are doing good, keep it up    ";
    console.log(`1. Given string is : ${givenStr}`);
    console.log(`2. Given string is : ${givenStr.length}`);
    var lengthBeforeTrim = givenStr.length;
    var result = givenStr.trim();
    var lengthAfterTrim = givenStr.length;
    console.log("3. Length after trim: ", result.length);
    console.log('4. Removed extra spaces are: ',givenStr.length-result.length);
    console.log('5.',result.length-1);
   console.log('6. Total word is : 8 ',); 
   var result = givenStr.search('good');
   console.log(result);
    var result = givenStr.slice(25);
    console.log(result);
    result.endsWith("up");
    result.startsWith("up");
}
stringHandsOn();