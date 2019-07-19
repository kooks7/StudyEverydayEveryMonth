# Node.js 파일 시스템

## 1. 파일 서버로서 Node.js

Node.js 파일 시스템 모듈은 컴퓨터에 있는 파일을 가져와 사용 할 수있다.
파일 시스템 모듈을 포함하기 위해, require() 메소드를 사용한다

```javascript
var fs = require('fs');
```

> 주로 사용 하는 파일 시스템 모듈:
>
> * Read files
> * Create files
> * Update files
> * Delete files
> * Rename files

## 2.Read files

fs.readFile() 메소드는 파일을 읽어올 때 사용한다.
우리가 다음 HTML을 가져온다고 가정하다.

ex) demefile1.html

```html
<html>
    <body>
        <h1>
            My Header
        </h1>
        <p>
            My paragraph.
        </p>
    </body>
</html>
```

> HTML 파일을 읽는 Node.js 파일을 만들고 content를 return 하자.

ex) node.js

```javascript
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demofile.html', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);
```

> 서버에 접속하면 html과 같은 파일을 볼 수 있다.

## 3. Create Files

새 파일을 생성하는 파일 시스템 모듈로는:

* fs.appendFile()
* fs.open()
* fs.writeFile()

**fs.appendFile()** 은 지정된 내용을 파일에 추가한다. 파일이 존재 하지 않으면 파일을 만든다.

ex)

```javascript
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
```

**fs.open()** method는 