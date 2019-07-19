# 1장 리액트 소개

* 싱글 페이지 앱의 필요성이 커지면서 페이스북은 싱글 페이지 앱에 대한 풍부한 경험을 바탕으로 React 라는 라이브러리를 발표했다.
* 이는 싱글 페이지 앱 이슈의 해결뿐만 아니라 웹앱 구축에 대한 사고의 변화까지도 가져왔다.

## UI 상태의자동 관리

* 싱글 페이지 앱에서 UI의 추적과 상태 관리는 힘들고 시간이 많이 드는 일이다.
* 그러나 리액트를 사용할 때는 오직 하나만 신경쓰면 된다. 바로 UI의 마지막 상태다.
* 나머지는 리액트가 알아서 관리한다.

## 빠른 DOM 조작

리액트는 메모리상에 가상 DOM을 만들어 조작한다. 



## 조립하기 쉬운 UI를 지원하는 API

* 리액트는 비주올 요소를 하나의 큰 덩어리가 아니라 가급적 작은 여러 컴포넌트로 작게 분해해 다루기를 권장한다.
* 어떤 프로그래밍에서든 대상을 작고 독립적인 묘듈로 만드는 일은 늘 바람직한 방법이다.
* 리액트는 그런 오래된 개념을 사용자 이터페이스 UI와 관련된 사고의 영역으로 확장했다.
* 많은 리액트의 핵심 API는 작은 비주얼 컴포넌트의 쉬운 제작을 중심으로, 나중에 다른 컴포넌트와 결합해 더 크고 복잡한 비주얼 컴포넌트를 만들 수 있게 지원한다.



## 자바스크립트만으로 정의하는 비주얼

* 리액트는 완전히 자바스크립트와 호환되면서도 HTML과 닮은 JSX라고 하는 문법을 사용해 비주얼을 지정할 수 있는 옵션을 제공하기 때문이다.

  

``` javascript
ReactDOM.render(
    <div>
        <h1>Batman</h1>
        <h1>Iron Man</h1>
        <h1>Nicolas Cage</h1>
        <h1>Mega Man</h1>
    </div>,
    destination
);
```



## MVC 아키텍처에서의 'V'

* 리액트는 앱 개발의 모든 사항을 책임지는, 완전히 갖춘 프레임워크가 아니다.

* 그 대신 리액트는 비주얼 요소와 그 상태를 최신으로 유지하는 데 중점을 두는 뷰(view) 레이어에서 작동한다.
* Model-View-Controller 아키텍처에서 M과 C에 해당하는 부분은 무엇이든 원하는 대로 자유롭게 사용할 수 있다는 의미다.



# 2첫 번째 리액트 앱

## JSX 다루기

## 리액트 시작하기

```html
<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <title>React! React! React!</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    </head>
    <body>
        <script>
        
        </script>
    </body>
</html>
```

* 첫번째 두번째 src 스크립트는 핵심 리액트 라이브러리와 리액트가 DOM에 대해 작업할 때 필요한 다양한 기능을 추가한다.
* 세번재 줄은 JSX를 자바스크립트로 변환하는 기능이다.

## 이름 보여주기




```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>React! React! React!</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
    <script type="text/babel">
    	ReactDOM.render(
            <h1>MJ</h1>,
        document.body
        );
    </script>
</body>
</html>
```
* ReactDOM.render 메소드는 리액트에서 가장 자주 사용하게 될 것이다.
* render 메소드는 두 개의 인자를 받는다.
  1. 화면에 출력하고 싶은 HTML (JSX)
  2. 그 JSX를 렌더링해 보여줄 DOM 안의 위치



# 여전히 익숙한 기술

## 목적지 변경

처음 할 일은