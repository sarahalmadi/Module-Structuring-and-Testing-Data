function repeat(string, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

module.exports = repeat;
