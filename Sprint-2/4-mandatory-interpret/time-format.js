function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61)); // should return "00:01:01"
// You will need to play computer with this example - use the Python Visualizer https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Three times: totalHours, remainingMinutes, remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0 because totalHours is 0, and it is the first time pad is called in the program

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00" because padstart adds "0" to the start of the string "0" until the string is 2 characters long, which is the first argument passed to padstart

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1 because remainingSeconds is 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01" because padstart adds "0" to the start of the string "1" until the string is 2 characters long, which is the first argument passed to padstart
