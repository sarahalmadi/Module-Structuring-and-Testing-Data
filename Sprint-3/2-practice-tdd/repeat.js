function repeat(string, times) {
  if (times < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  let result = "";
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

module.exports = repeat;
