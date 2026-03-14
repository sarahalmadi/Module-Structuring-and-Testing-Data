const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2. Removing the trailing "p" from the string to isolate the numeric part, which represents the price in pence
// 3. Padding the numeric string with leading zeros to ensure it has at least three characters, which helps in separating pounds and pence correctly
// 4. Extracting the pounds part by taking all characters except the last two, which represent the pence
// 5. Extracting the pence part by taking the last two characters of the padded string, and ensuring it has two characters by padding with zeros if necessary
// 6. Console.log: formatting and printing the price in pounds and pence using template literals
