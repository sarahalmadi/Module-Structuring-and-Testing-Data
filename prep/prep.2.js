const height = 10;
const width = 30;

const area = height * width;
const perimeter = 2 * (height + width);

console.log(area); // 300
console.log(perimeter); // 80

const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const output1 = convertToPercentage(0.5);
const output2 = convertToPercentage(0.231);

console.log(output1);
console.log(output2);
