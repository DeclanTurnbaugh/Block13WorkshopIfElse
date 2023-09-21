/*Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)";
"The empty string is falsy (the only falsy string)";*/

const input = "";

switch (input) {
  case false:
    console.log("The boolean value false is falsy.");
    break;
  case null:
    console.log("The null value is falsy.");
    break;
  case undefined:
    console.log("Undefined is falsy.");
    break;
  case 0:
    console.log("The number 0 is falsy (the only falsy number).");
    break;
  case "":
    console.log("The empty string is falsy (the only falsy string).");
    break;
  default:
    console.log("The input is true.");
}

/*Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";*/

const numberLineNum1 = 0;
const numberLineNum2 = -11;
const sum = numberLineNum1 + numberLineNum2;

if (sum > 100) {
  console.log(sum + " is greater than 100.");
} else if (sum > 0) {
  console.log(sum + " is larger than 0.");
} else if (sum === 0) {
  console.log(sum + " is equal to 0.");
} else if (sum < -1000) {
  console.log(sum + " is less than -1000.");
} else if (sum < 0) {
  console.log(sum + " is a negative number.");
}

// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

const greaterThanNum1 = 5;
const greaterThanNum2 = 5;

if (greaterThanNum1 >= 5 && greaterThanNum2 >= 5) {
  console.log("Both numbers are greater than or equal to 5.");
} else {
  console.log("Both numbers are NOT greater than or equal to 5.");
}

// Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

const param1A = 0;
const param1B = false;
const param2A = "horse";
const param2B = "horse";

if (param1A == param1B && param2A == param2B) {
  console.log("All paramaters are the same; true.");
} else {
  console.log("At least one parameter is different; false.");
}
