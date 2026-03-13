const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num represents a random integer between 1 and 100
// the expression contains Math random, which generates a random number between 0 and 1 (it could be: 0.5, 0.999 put it will never be 1).
// Math.floor removes the decimal part of a number, so it rounds down to the nearest whole number such as (3.8 becomes 3).
console.log(num);
