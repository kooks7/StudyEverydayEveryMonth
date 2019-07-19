# HTTP Module

## 1. HTTP Module 에서 제작

Node.js 는 HTTP 라는 모듈에서 만들어진다. 이 모듈은 Node.js 가 Hyper Text Transfer Protocol (HTTP)로 데이터를 전송할 수 있게 해준다. 

ex)

```javascript
var http = require('http');
```

## 2. Node.js 웹 서버

HTTP 모듈은 HTTP 서버를 만들 수 있다. 이 모듈은 특정 port로 수신하고 response를 클라이언트에게 전달한다.

ex)demo_server.js

```javascript
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //response 
    res.end(); // response 끝
}).listen(3000); // 3000포트로 대기
```

> function이 http.createServer() 메소드로 가고 누군가가 3000포트로 요청을 하면 실행된다.



## 3. HTTP Header 추가하기

만약 HTTP 서버의 응답이 HTML로 보이게 된다면, HTTP Headerd에 성공 content type을 보낼 수 있다.

ex)

```javascript
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello world!');
    res.end();
}).listen(3000);
```

> res.writeHead() :상태코드를 나타내는 메소드. 200의 의미는 OK이다.
> 두번째 인자는 response headers를 나타낸다.

## 4. Query String 읽기

http.createServer() 로 전송되는 function 은 req 인자를 가지고 있다. 이것은 client의 request를 나타낸다.
이 객체는 "url" 이라는 프로퍼티를 가지고 있고 도메인 이름 뒤에 나오는 URL 일부를 포함한다.

ex)

```javascript
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end()
}).listen(3000);
```

> http://localhost:3000/kooks > /kooks 

## 5. Query String 분리

URL 모듈과 같이 쿼리 문자열을 읽을 수 있는 부분으로 쉽게 분리 할 수있는 기본 모듈이 있다.

ex)

```javascript
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.wrtieHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + "" +q.month;
    res.end(txt);
}).listen(3000);
```

> http://localhost:3000/?year=2019&month=July  : 2019 July



