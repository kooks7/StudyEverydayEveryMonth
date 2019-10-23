//ES5
const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((acc, num) => (acc += num), 0);
};

//1
const addAll = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((acc, num) => (acc += num), 0);
};
console.log(addAll(1, 2, 3, 4, 5, 6));

//2
const defaultColors = ["red", "blue", "yellow"];
const addedColors = ["orange", "green"];

const sum = defaultColors.concat(addedColors);
const es6sum = [...defaultColors, ...addedColors];
const justsum = [defaultColors, addedColors];

console.log(es6sum);

// 실제 : 인자가 몇개 들어올지 모르는 상황
function logging() {
  console.log(arguments);
  console.log(...arguments);
}
logging(1, 2, 3, 4);

function logging1(a, b) {
  [a, b, ...rest] = arguments;
  console.log(rest);
}
logging1(1, 2, 3, 4);
