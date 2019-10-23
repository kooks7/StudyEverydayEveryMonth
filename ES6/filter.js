//ES5
const products = [
  { name: "banana", type: "fruits" },
  { name: "carrot", type: "vegi" },
  { name: "apple", type: "fruits" },
  { name: "agg", type: "dairy product" },
  { name: "yogurt", type: "dairy product" }
];

const fruit = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruits") {
    fruit.push(products[i]);
  }
}

//ES6
const 유제품 = products.filter(element => {
  return element.type === "dairy product";
});
console.log(유제품);

//실제 사용
const comments = [
  { id: 1, author: "민재", contents: "1" },
  { id: 1, author: "김민", contents: "2" },
  { id: 1, author: "민재", contents: "3" },
  { id: 1, author: "민재", contents: "4" }
];
const 민재 = comments.filter(comment => comment.author === "김민");
console.log(민재);

//실습1
const number = [1, 3, 5, 6, 10, 54, 25, 330, 220, 5];
const numUnder10 = number.filter(e => e <= 10);
console.log(numUnder10);

const result = number.filter(number =>
  number > 10 && number < 100 ? true : false
);

//실습2
//filter를 사용해서 reject함수를 만들자
//reject 함수는 filter와 완전히 반대 작용을 하는 함수

function reject(arr, callback) {
  return arr.filter(e => {
    return !callback(e);
  });
}

console.log(reject(number, number => number > 10));

//  => [1,3,5,6];
