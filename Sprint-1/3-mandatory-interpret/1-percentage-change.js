let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// line 4: Number
// line 5: Number
// line 4: replaceAll
// line 5: replaceAll
// line 10: console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Add a comma between "," and ""

// c) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

// d) Identify all the lines that are variable declarations
// let in lines 1 and 2
// const in lines 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//the function replaceAll is used to remove all commas from the string carPrice, additionally the function Number is used to convert the resulting string into a number. So the purpose of this expression is to convert the string representation of the car price into a numerical value that can be used for calculations.
