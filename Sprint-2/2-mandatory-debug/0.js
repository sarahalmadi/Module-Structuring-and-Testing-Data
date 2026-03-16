// Predict and explain first...

// =============> write your prediction here
//When we run the code, the result of multiplying (10, 32) in the template literal, the console.log will output the result of multiplying 10 and 32 as "undefined".
//console.log inside the function must be replaced with return statement to return the result of the multiplication, so that it can be used in the template literal.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Since the function multiply does not return any value, it implicitly returns undefined. Therefore, when the template literal tries to use the result of multiply(10, 32), it will output "The result of multiplying 10 and 32 is undefined". To fix this, we need to modify the multiply function to return the result of the multiplication instead of just logging it to the console.
//console.log inside the function must be replaced with return statement to return the result of the multiplication, so that it can be used in the template literal.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
