const yearOfBirth = 1997; // declaration
let currentYear = 2026; // declaration

currentYear++; // statement
`I am ${currentYear - yearOfBirth} years old`; // statement
console.log(`I am ${currentYear - yearOfBirth} years old`);
// Output: I am 29 years old
console.log("hello there!");
// Output: hello there!
convertToPercentage(0.5); // should return "50%"
convertToPercentage(0.231); // should return "23.1%"
function convertToPercentage(decimal) {
  return `${decimal * 100}%`;
}
