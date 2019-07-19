# 1. Node.js Modules

## 모듈이란?

모듈은 JavaScript 의 라이브러리라고 보면 된다. 즉, 원하는 필요한 fucntion을 설정한 것이다.

## Include Modules

모듈을 포함하기 위해 require() function 을 넣어야 한다.

```javascript
var http = require('http');
```

어플리케이션에서 HTTP 모듈에 접근하기 위해 다음과 같은 코드를 만든다.

```javascript
http.createServer(function (req, res) {
    res.wrtieHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(3000);
```



## Module 만들기

필요한 모듈을 쉽게 만들고 사용 할 수 있다.
다음 코드는 날짜와 시간을 return 하는 모듈이다.

ex) module.js

```javascript
exports.myDateTime = function () {
  return Date();
};
```

exports 키워드를 사용해 모듈 밖에서도 기능을 사용 할 수 있게 했다.

ex) server.js

```javascript
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
```

