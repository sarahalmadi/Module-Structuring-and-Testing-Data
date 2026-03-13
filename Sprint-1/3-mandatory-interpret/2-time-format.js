const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There is 1 function call in this program: console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. In this context, it is used to determine the number of seconds that are left after accounting for the full minutes in the movie length. For example, if movieLength is 8784 seconds, then 8784 % 60 would give us the remaining seconds after converting as many full minutes as possible from the total seconds.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is calculating the total number of full minutes in the movie length. It does this by first subtracting the remaining seconds (which we calculated in the previous step) from the total movie length, and then dividing the result by 60 to convert it from seconds to minutes. This gives us the total number of complete minutes in the movie length, excluding any leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It shows the length of the movie in hours, minutes, and seconds. A better name for this variable could be "FormattedMovieDuration"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It will work if movieLength is a positive integer.
