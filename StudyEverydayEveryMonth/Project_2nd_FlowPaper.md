## 1. 추가 설치 패키지

* expression, mysql
*  express New --view=ejs
* npm i

## 2. public 폴더에 필요한 자료 넣기

* 필요한 탬플릿 가져오기
* image, JavaScript, CSS 파일은 public 폴더에 넣기

## 3. routes/index.js 작성

``` javascript
1.	var express = require('express');
2.	var router = express.Router();
3.	
4.	/* GET home page. */
5.	router.get('/', function(req, res, next) {
6.	  res.render('index', { title: 'Express' });
7.	});
8.	
9.	module.exports = router;
```

## 4. 회원가입 처리하기

​	1) index.ejs에 가입 양식 넣기

```html
 <article id="signup">
      <h2 class="major">Sign up</h2>
      <div id="sign_up_div">
      <div class="form">
        <div class="fields">
          <div class="field">
            <label for="name">ID</label>
            <input type="text" name="id" id="id" />
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="field half">
            <label for="phone">Phone</label>
            <input type="tel" name="phone" id="phone"/>
          </div>
          <div class="field half">
              <label for="birth">Identity num</label>
              <input type="text" name="id_num" id="id_num" />
            </div>
          <div class="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div class="field">
            <label for="address">Address</label>
            <textarea name="address" id="address" rows="2"></textarea>
          </div>
```

2) public/my.js 에 sign-up 클릭 만들기

```javascript
$(document).ready(function() {

    $("#signup_btn").click(function(){
        const id = $("#id").val();
        const name = $("#name").val();
        const password = $("#password").val();
        const id_num = $("#id_num").val();
        const phone = $("phone").val();
        const address = $("address").val();
        const email = $("#email").val();
    

    const send_params = {
        id,
        name,
        password,
        id_num,
        phone,
        address,
        email
    };

    $.post('/member_insert',send_params, function(data, status){
        const parsed_data = JSON.parse(data);
        alert(data);
    });
})
});
```

3) /routes/member_insert.js 만들기

