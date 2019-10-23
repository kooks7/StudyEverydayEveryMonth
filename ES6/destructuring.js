//ES5
const computer = {
  model: "macbook-pro",
  year: 2017,
  price: 400
};

const model1 = computer.model;
const year1 = computer.year;
const price1 = computer.price;

//ES6
const laptop = {
  model: "gram",
  year: 2018,
  price: 100
};

const { model, year, price } = laptop;

// 실제
const tag = `1.${model} , 2.${year}, 3${price} `;
console.log(tag);
