//ES5
function makeRequest(url, method) {
  if (!method) {
    method = "GET";
  }
  doSomething(url, method);
}

//ES6
function makeRequest2(url, method = "GET") {
  console.log(url, method);
}
// 사용자 입력값이 있을때
makeRequest2("hello", "post");
// 두번째 인자가 없을 때
makeRequest2("hello");

//  예시
const sum = (a = 0, b = 0) => a + b;
sum(); //0
