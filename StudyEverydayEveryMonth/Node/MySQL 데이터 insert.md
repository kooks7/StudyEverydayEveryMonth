# MySQL 데이터 삽입

## 1. Insert Into Table

"**INSERT INTO**" MySQL의 table에 데이터를 넣기 위해 사용

ex) 테이블에 데이터 넣기

```javascript
var mysql = require('mysql');

var con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1325",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customor (name, adress) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, reuslt) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
```





## 2. 여러개의 자료 넣기

한 개 이상의 데이터를 넣기 위해 ? 마크를 사용한다: **INSERT INTO customers (name, address) VALUES ?**

ex) table 에 한 개 이상의 데이터 넣기

``` javascript
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "mydb"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
var sql = "INSERT INTO customor (name, address) VALUES?";
    var values = [
        ['John', 'Highway71'],
        ['MJ', 'Uptown']
    ];
    con.query(sql, [values], function (err, result) {
		if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
})
```



 























