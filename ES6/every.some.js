//ES5

const computers = [
  { name: "mac-air", ram: 8 },
  { name: "gram", ram: 4 },
  { name: "mac-pro", ram: 16 }
];

let everyComputersAvailable = true;
let someCoumputersAvailable = true;

for (var i = 0; i < computers.length; i++) {
  const computer = computers[i];
  if (computer.ram < 8) {
    everyComputersAvailable = false;
    break;
  }
  if (computer.ram > 8) {
    someComputersAvailable = true;
    break;
  }
}

//ES6
everyComputersAvailable = computers.every((computer = computers.ram > 8));
someCoumputersAvailable = computers.some((computer = computers.ram > 8));

//실제로는?
const data = [
  { name: "Mj", answer: "you pork" },
  { name: "Min", answer: "" },
  { name: "Jae", answer: "great!" }
];

const everyUsertAnwerd = data.every(e => e.answer.lenght > 0);
console.log(everyComputersAvailable);

// 실습1
// 모든 사람이 제출하면 every => false
// 한명이라도 제풀 하면 some => true

const users = [
  { id: 1, submit: true },
  { id: 2, submit: false },
  { id: 3, submit: true },
  { id: 4, submit: true }
];
users.every(e => e.submit);
users.some(e => e.submit);

// const res = users.every(e => e.submit);

//실습2
function some(arr, callback) {
  return !arr.every(e => !callback(e));
}
some(users, e => e.submit);
