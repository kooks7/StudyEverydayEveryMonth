//ES5
const numbers = [10, 20, 30];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  //sum = sum + numbers[i];
}

//ES6
sum = numbers.reduce((acc, number) => {
  return acc + number; // 1) 0 + 10 => 10 2) 10 + 20 => 30 3) 30+ 30 = 60
}, 0);
console.log(sum);

let multiply = numbers.reduce((acc, number) => acc * number);

const strings = ["apple", "is", "good"];

const summed = strings.reduce((acc, str) => acc + str, "");
console.log(summed);

// map함수 구현하기

const dNumbers1 = numbers.map(e => e * 2);
const dNumbers2 = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);
console.log(dNumbers2);

//실제로
/*
올바르게 닫힌 괄호 :(((()))), ()()
잘못 닫힌 과호 : )()(
*/
//'abc'.split('') => ['a','b','c'];
function isGoodParens(string) {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === "(") {
      ++acc;
    } else {
      --acc;
    }
    return acc;
  }, 0);
}
// '()()' acc:0 , char:( => 1  , ) =>0  , (=> 1  ,  )=> 0

//실습
const attendance = [
  { id: 1, type: "sit" },
  { id: 2, type: "sit" },
  { id: 3, type: "stand" },
  { id: 4, type: "sit" },
  { id: 5, type: "stand" }
];

const sitting = attendance.reduce((acc, person) => {
  if (person.type == "sit") {
    ++acc;
  }
  return acc;
}, 0);
console.log(sitting);

//실습2
//samples 에 있는 중복되는 값 지우기
const samples = [10, 20, 30, 20, 40, 10, 50];
function unique(arr) {
  return arr.reduce((acc, element) => {
    if (!acc.find(e => e === element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
console.log(unique(samples));
