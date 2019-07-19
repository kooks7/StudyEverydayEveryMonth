# 1. 요청과 응답 이해하기

* 클라이언트에서 서버로 request를 보내고, 서버에서는 요청의 내용을 읽고 처리한 뒤 클라이언트에게 response를 보낸다.
* 서버에서는 요청을 받는 부분과 응답을 보내는 부분이 있어야 한다.
* 요청과 응답은 이벤트 방식이라고 생각하면 된다.
* 클라이언트로부터 요청이 왔을 때 어떤 작업을 수행할지 이벤트 리스너를 미리 등록해두어야 한다.

``` javascript
const http = require('http');

http.createServer((req, res) => {
    //여기에 어떻게 응답할지 적어준다.
});
```

* req 객체는 요청에 관한 정보를, res 객체는 응답에 관한 정보를 담고 있다.

```javascript
const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('waiting in 8080port');
});
```

* res 객체에는 res.write와 res.end 메서드가 있다.
* 우선 res.wrtie의 첫 번째 인자는 클라이언트로 보낼 데이터다.



# 2. 쿠키와 세션 이해하기

* 웹 사이트에 방문해서 로그인을 할때 내부적으로는 쿠키와 세션을 사용한다.
* 로그인한 후에는 새로고침(새로운 요청)을 해도 로그인 상태를 유지하는 이유는 클라이언트가 서버에게 본인이 누구인지 지속적으로 알려주고 있기 때문이다.
* 클라이언트가 누구인지 식별하기 위해서, 서버는 요청에 대한 응답을 할 때 쿠키라는 것을 같이 보내준다.
* 쿠키는 예를들어 name=MJ 같이 단순한 '키-값'의 쌍이다.
* 서버로부터 쿠기가 오면 웹 브라우저는 쿠키를 저장해두었다가 요청할 때마다 쿠키를 동봉해서 보내준다.
* 서버는 요청에 들어 있는 쿠키를 읽어서 사용자가 누구인지 파악한다.
* 브라우저는 쿠키가 있다면 자동으로 동봉해서 보내주므로 따로 처리할 필요가 없다.

* 즉 서버는 미리 클라이언트에 요청자를 추정할 만한 정보를 쿠키로 만들어 보내고, 그 다음부터는 클라이언트로부터 쿠키를 받아 요청자를 파악한다.
* 개인정보 유출 방지를 위해 쿠키를 주기적으로 지워야한다.
* 쿠키는 요처오가 응답의 헤더(header)에 저장 된다.

```javascript
const http = require('http');

const parseCookies = (cookie= '') => //문자열 형식으로 객체로 바꾸는 함수
cookie
.split(';')
.map(v => v.split('='))
.map(([k, ...vs]) => [k, vs.join('=')])
.reduce((acc, [k,v]) => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
}, {});

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { 'Set-cookie': 'mycookie=test'});
    res.end('Hello Cookie');
})
.listen(8082, () => {
    console.log('8082port is wating');
});


```



* createServer 메서드의 콜백에서는 제일 먼저 req 객체에 담겨 있는 쿠키를 분석한다.
* 쿠키는 req.headers.cookie에 들어있다.
* req.headers는 요청의 헤더를 의미한다.
* 응답의 헤더에 쿠키를 기록해야 하므로 res.wrtieHead 메서드를 사용한다.
* 1. 첫 번째 인자로 200이라는 상태 코드를 넣어 두었다. 200은 성공이라는 의미다.
  2. 두 번째 인자로 헤더의 내용을 입력한다. Set-Cookie는 브라우저한테 mycookie=test라는 값의 쿠키를 저장하라는 뜻이다.







+++ 미들웨어

# 3. REST API와 라우팅



* 서버에 요청을 보낼 때는 주소를 통해 요청의 내용을 표현한다.
* 주소가 /index.html이면 서버의 index.html을 보내달라는 뜻
* 요청이 항상 html을 요구할 필요는 없다.



## REST API (REpresentational State Transfer)

* 네트워크 구조의 한 형식이고 서버의 자원을 정의한다. 또한 자원에 대한 주소를 지정하는 방법을 가리킨다.

* 주소는 의미를 명확히 전달하기 위해 명사로 구성된다. 
* ex) /user 이면 사용자 정보에 관련된 자원을 요청하는 것이고, /post라면 게스글에 관련된 자원을 요청하는 것이라고 추측 할 수 있다.
* REST API는 주소 외에도 HTTP 요청 메서드라는 것을 사용한다.
  * GET: 서버 자원을 가져오고자 할 때 사용한다. 요청의 본문(body)에 데이터를 넣지 않는다. 데이터를 서버로 보내야 한다면 쿼리스트링을 사용한다.
  * POST:서버에 자원을 새로 등록하고자 할 때 사용한다. 요청의 본문에 새로 등록할 데이터를 넣어 보낸다.



# 4. http와 http2

