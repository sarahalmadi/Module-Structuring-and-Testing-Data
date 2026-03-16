// Predict and explain first...
// Predict the output of the following code:
// =============> Write your prediction here
//when we run the code, the console.log will output "the last digit of 42 is 3."

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function getLastDigit is not using the parameter passed to it, instead it's always using the const num which is set to 103. Therefore, it will always return the last digit of 103, which is 3, regardless of the input provided to the function. To fix this, we need to modify the getLastDigit function to use the parameter passed to it instead of the constant num, and remove the const num declaration.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
