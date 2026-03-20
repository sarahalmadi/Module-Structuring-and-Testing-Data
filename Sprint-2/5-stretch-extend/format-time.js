// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `00:${minutes} am`;
  }

  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  if (hours > 12) {
    const newHour = String(hours - 12).padStart(2, "0");
    return `${newHour}:${minutes} pm`;
  }

  const newHour = String(hours).padStart(2, "0");
  return `${newHour}:${minutes} am`;
}
console.assert(formatAs12HourClock("01:00") === "01:00 am");
console.assert(formatAs12HourClock("11:59") === "11:59 am");
console.assert(formatAs12HourClock("12:59") === "12:59 pm");
console.assert(formatAs12HourClock("13:01") === "01:01 pm");
console.assert(formatAs12HourClock("00:01") === "00:01 am");
console.assert(formatAs12HourClock("23:59") === "11:59 pm");
console.assert(formatAs12HourClock("10:05") === "10:05 am");
console.assert(formatAs12HourClock("20:05") === "08:05 pm");
console.assert(formatAs12HourClock("00:00") === "00:00 am");
