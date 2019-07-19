# Events

## node.js의 Events

컴퓨터에서 발생하는 작업들은 모두 event 이다. 파일을 만들고 열때도 모두 event이다.
Node.js의 객체는 파일을 열고 닫을 때 readStream 객체가 event를 발생시키는 것처럼 event를 발생시킬 수 있다.

ex) 

```javascript
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
    console.log('The file is open');
});
```

## EventEmitter 객체

**EventEmitter** 와 함께 이벤트 핸들러를 할당할 수 있다.

아래의 예에서 "scream" 이벤트가 발생할 때 실행도리 함수를 만들었다.

```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I haer you');
}

//Assgin the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
```

