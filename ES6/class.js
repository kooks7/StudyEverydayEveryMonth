// class = 원본, 틀
class Car {
  // constructor => new를 할때 반드시 실행함
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
  }
  drive() {
    // => method
    console.log("부릉부릉");
  }
}

const avante = new Car({ name: "avante", price: 2500, year: 2019 });
const morning = new Car({ name: "morning", price: 1200, year: 2019 });

avante.drive();
morning.drive();

console.log(avante);

class SuperCar extends Car {
  constructor(options) {
    super(options); // 규칙
    console.log("수퍼카가 태어났어요!");
  }
  booster() {
    console.log("부아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ앙");
  }
}
const 벤틀리 = new SuperCar({
  name: "벤틀리",
  price: 10000,
  year: 2019
});

//실습
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

const 피카츄 = new Monster({ name: "피카츄" });
console.log(피카츄);

//실습2
class Dinosaur extends Monster {
  constructor(options) {
    super(options);
    console.log("공룡 탄생!");
  }
  몸통박치기(monster) {
    monster.health -= 10;
    console.log(monster.health);
  }
}
const Tirano = new Dinosaur({ name: "Tirano" });
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
if (피카츄.health <= 0) {
  console.log("뒤짐 씨발");
}
