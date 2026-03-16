// Predict and explain first...
//  =============> write your prediction here
//When we run the code the result of summing (10, 32) in the template literal, the console.log will output the result of summing as "undefined".
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here
// The Semicolon after the return "return;" is ending the function immediately, so the code after it is never executed. To fix this, we need to remove the semicolon after the return statement and return the result of the addition instead.
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
