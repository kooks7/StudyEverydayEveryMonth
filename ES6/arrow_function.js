//ES5

function add(a, b) {
  return a + b;
}

//ES6
const multiply = (a, b) => {
  return a * b;
};

const mul = (a, b) => a * b;

const sqare = a => a * a;
const loggin = () => console.log("logging...");

// object 안에 함수
const obj = {
  name: "kim",
  sayHello: function() {
    console.log("Hello!");
  },
  sayBye() {
    console.log("Bye!");
  }
};
obj.name;
obj.sayHello();
obj.sayBye();
