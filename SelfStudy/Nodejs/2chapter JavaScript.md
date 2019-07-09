# 1 ES2015+

# 1.1  const, let

* var은 const와 letd으로 대체

```javascript
if (true) {
    var x = 3;
}
console.log(x);

if(true) {
    const y = 3;
}
console.log(y); // not defined
```

## 1.2 템플릿 문자열

* `(백틱)을 사용한다.

## 1.3 객체 리터럴

``` javascript
var sayNoode = function() {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+6] = 'Fantastic';

oldObjcet.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);
```

```javascript
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
```

* oldObject 와 newObject를 비교해서 보자.
* sayJS 같은 객체의 메서드에 함수를 연걸할 때 더는 (:)과  function을 붙이지 않아도 된다.
* SayNode: SayNode처럼 속성명과 변수명이 겹치는 경우에는 한 번만 쓸 수 있다.
* 객체의 속성명을 동적으로 생성할 수 있다.



## 1.4 화살표 함수

바로 예시 부터 살펴보자.

``` javascript
function add1(x, y){
    return x+y;
}

const add2 = (x, y) => {
    return x+y;
};

const add3 = (x, y) => x+y;
const add4 = (x, y) => (x+y);

function not1(x){
    return !x;
}

const not2 = x => !x;
```

* add1, add2, add3 은 같은 기능을 하는 함수이다.
* 화살표 함수에서는 function 선언 대신 => 기호로 함수를 선언한다.
* 변수에 대입하면 나중에 재사용 할 수 있다.

``` javascript
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function(freind){
            console.log(that.name, friends);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friends);
        });
    },
};
relationship2.logFriends();
```

## 1.5 비구조화 할당

```javascript
var candyMachine = {
    status: {
        name: 'node',
        count: 5
    }
},
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
```



``` javascript
var candyMachine = {
    status: {
        name: 'node',
        count: 5
    }
},
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const { getCandy, status:{ count } } = candMachine;
```

* candyMachine 객체 안의 속성을 찾아서 변수와 매칭해준다.
* count 처럼 여러 단계 안의 속성도 찾을 수 있다.

배열도 비구조화할 수 있다.

```javascript
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = arry[1];
var bool = arr[3];
```

``` javascript
const array = ['nodejs', {}, 10, true];
const [node, obj, ,bool] = array;
```



# 1.6 프로미스

* 자바스크립트와 노드에서는 주로 비동기 프로그래밍을 한다.
* 특히 이벤트 주도 방식 때문에 콜백 함수를 자주 사용한다.
* ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 promise 기반으로 재구성된다.

* 먼저 프로미스 객체를 생성해야 한다.

```javascript
const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('sucess');
    } else {
        reject ('fail');
    }
});

promise
.then((message) => {
    console.log(message); //sucess(resolve) 한 경우 실행
})
.catch((error) => {
    console.error(error); //fail(reject) 한 경우 실행
})

```



* new Promise로 프로미스를 생성할 수 있으며, 안에 resolve 와 reject를 매개변수로 갖는 콜백 함수를 넣어준다.
* 이렇게 만든 promise 변수에 then과 catch 메서드를 붙일 수 있다. 
  *  resolve가 호출되면 then의 message가 'sucess'가 된다.
  *  reject가 호출되면 catch의 error가 'fail'이 된다.