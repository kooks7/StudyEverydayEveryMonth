//ES5
const users = [
  { name: "song" },
  { name: "Tony", phone: "000" },
  { name: "Binzeeno", phone: "000" },
  { name: "scott" }
];

let user = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Tony") {
    user = users[i];
    break;
  }
}

//ES6
user = users.find(user => {
  return user.name === "Tony";
});

//실제로는?
const data = [
  { id: 1, name: "Tony" },
  { id: 2, name: "Hulk" },
  { id: 3, name: "Thor" },
  { id: 4, name: "Pepper" }
]; //DB에서 조회한 값
const wahtWeWant = data.find(e => e.id === 3);
console.log(wahtWeWant);

//실습1
const products = [
  { name: "banana", type: "fruits" },
  { name: "carrot", type: "vegi" },
  { name: "apple", type: "fruits" },
  { name: "agg", type: "dairy product" },
  { name: "yogurt", type: "dairy product" }
];
// 프로덕트 중 이름이 xx제품을 가져오기
const product = products.find(e => e.name === "agg");
console.log(product);
