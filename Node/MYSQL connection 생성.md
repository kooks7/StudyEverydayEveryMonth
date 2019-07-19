# MySQL

## connection 만들기

Node.js 와 MySQL database를 시작하기 위해 아래의 코드를 사용한다.

ex)**db_connection.js**

``` javascript 
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "host",
    password: "pwd"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})
```

> **db_connection.js** 를 실행 하기

## Query Database

MySQL 데이터베이스를 읽고 쓰기 위해SQL 구문을 사용한다. 

``` javascript
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result:" + result);
    });
});
```



# MySQL 데이터베이스 생성

## 1. 데이터베이스 생성

MySQL 데이터 베이스 생성을 위해, "**CREATE DATABASE**" 구문을 사용한다:

```javascript
var mysql = require('mysql');

var con = mysql.createConncetion({
	host: "localhost",
    user: "username",
    password: "pwd"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});
```



## 2. 테이블 생성

MySQL에 테이블을 생성하고자 한다면 "**CREATE TABLE**" 구문을 사용해야한다.

``` javascript
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "userpwd",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customor (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
```

> 실행하면 선택한 database에 table이 생성된다.

## 3. Primary Key

테이블을 생성할 때 필수적으로 unique key와 함께 column을 생성해야 한다.

"**INT AUTO_INCREMENT PRIMARY KEY**" 를 사용하면 자동적으로 고유 식별 번호를 생성 해줄 수 있다.

``` javascript
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "host",
    password: "pwd",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
              if (err) throw err;
    		 console.log("Table created");
              });
    
});
```













