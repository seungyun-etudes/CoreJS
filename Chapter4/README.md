# Chapter.4 콜백 함수

콜백 함수의 동작 원리와 사용법을 학습하였음.

1. `setInterval()`은 콜백 함수를 인자로 받고, `timeout`밀리초 마다 콜백 함수를 실행한다. 익명 함수를 인자로 넘겨 실행하였다.
2. 이번에는 익명함수를 `cbFunc`에 저장하고 인자로 넘겨 실행하였음.
3. `array`의 `map()`도 콜백 함수를 인자로 받고 함수의 결과값으로 새로운 배열을 생성함.
4. 콜백 함수에 들어오는 인자는 이름에 상관없이 들어오는 순서가 중요함.
5. `map()`을 구현하였음. 콜백 함수와 this를 인자로 받아 callback 함수를 호출하고 순회하며 새로운 배열을 생성해 반환함.
6. 콜백 함수에서 `this`는 콜백 함수에서 정의한 대로 동작. 각 함수마다 다름. Chapter 3에서 예제를 작성한 바 있음.
7. 메서드를 콜백 함수로 전달해서 실행하는 경우 메서드가 아닌 함수로서 호출됨.
8. `self`에 `this`를 담아 강제로 `object`를 가리키도록 할 수 있음.
9. `object`의 메소드를 콜백으로 사용 가능
10. 함수를 return하는 메소드를 object에 정의하여 콜백 함수로 전달하였다. 정의는 `obj1`에서 했지만 호출은 각각 `obj1`, `obj2`, `obj3`에서 했기 떄문에 각각 다른 결과가 출력된다.
11. `bind()` 메소드를 활용하여 콜백의 `this`에 다른 값을 바인딩할 수 있다.
12. `에스프레소`, `아메리카노`, `카페모카`, `카페라떼` 순으로 `coffeeList`에 추가하고 0.5초 대기
13. 같은 코드에서 함수에 이름을 붙임.
14. 같은 코드를 Promise를 이용해 구현하였음.
15. 반복되는 코드를 콜백 함수를 리턴하는 하나의 함수로 축약.
16. Generator을 이용하여 같은 코드를 구현하였다. 
17. async 함수로 정의하고, await 키워드로 실행이 완료될 때 까지 대기하는 방식으로 똑같이 구현하였다.