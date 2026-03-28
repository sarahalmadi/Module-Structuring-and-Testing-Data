function getOrdinalNumber(num) {
  // special cases for 11, 12, 13
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }

  const lastDigit = num % 10;
  if (lastDigit === 1) {
    return num + "st";
  } else if (lastDigit === 2) {
    return num + "nd";
  } else if (lastDigit === 3) {
    return num + "rd";
  } else {
    return num + "th";
  }
}
module.exports = getOrdinalNumber;
console.log(getOrdinalNumber(1)); // "1st"
console.log(getOrdinalNumber(2)); // "2nd"
console.log(getOrdinalNumber(3)); // "3rd"
console.log(getOrdinalNumber(4)); // "4th"
console.log(getOrdinalNumber(11)); // "11th"
console.log(getOrdinalNumber(12)); // "12th"
console.log(getOrdinalNumber(13)); // "13th"
console.log(getOrdinalNumber(21)); // "21st"
console.log(getOrdinalNumber(22)); // "22nd"
