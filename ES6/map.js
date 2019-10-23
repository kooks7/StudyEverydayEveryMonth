//ES5
const numbers = [1, 2, 3];
const dNumber = [];

for (var i = 0; i < numbers.length; i++) {
  dNumber.push(numbers[i] * 2);
}

//ES6
const tNumbers = numbers.map(number => number * 3);

const data = [3, 5, 7, 9];

data.map(e => {
  return `<h1>{e}</h1>`;
});

//실습
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const heights = images.map(e => e.h);
console.log(heights);

//실습2

function plunk(arr, key) {
  const result = arr.map(e => e[key]);
  //만약 e.key를 하면 => e."w" 와 같다.
  return result;
}
const result = plunk(images, "w");
console.log(plunk(images, "h"));
