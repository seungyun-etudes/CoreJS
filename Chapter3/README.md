# Chapter.3 this

각 환경에서 `this`에 접근할 때 어떤 객체가 반환되는지, 그리고 어떻게 조작하고 사용하는지 공부해 보았음. 

1. 전역환경에서 `this`는 브라우저 환경에서는 `window`, `Node.js` 환경에서는 `global`을 가리킴. 현재 `Node.js`를 이용해 테스트하고 있기 때문에 global을 가리킴.
2. `this`와 `global`이 같다.
3. 전역 변수를 만들면 `global` 또는 `window`의 property로 추가된다.
4. 전역변수와 추가된 property는 일반적인 경우 똑같이 사용할 수 있다.
5. 전역변수는 삭제할 수 없지만, `window`의 `property`는 delete할 수 있기 때문에 삭제하는 경우에 차이가 생긴다.
6. 같은 메모리의 함수를 가리키고 있더라도 함수가 호출될 때 실행되는 컨텍스트에 따라 `this`가 변함.
7. `o.a` 는 `o['a']`와 같은 expression.
8. `methodA()`는 `obj`, `methodB`는 `inner`를 가리킴.
9. `object` 내부 `function`을 그냥 call 하면 `this`가 `global`. `method`는 `this`가 `object`.
10. `self`에 `this`를 함수가 호출되기 전에 저장해서 `innerFunc2()` 에서는 `outer`가 출력됨.
11. `ES6`부터 적용된 `Arrow Function`을 사용하면 내부에 `this`가 없어 체인을 따라 올라가며 `this`를 찾는다.
12. `setTimeout()`, `forEach()`, `addEventListener()`처럼 CallBack 함수를 사용하는 경우 CallBack 함수를 사용하는 함수가 결정한다. `setTimeout()`
    과 `forEach()`는 전역 객체를, `addEventListener()`는 Event Listener가 붙은 `DOM element` 를 `this`로 한다.
13. 생성자는 항상 새로운 `object`를 만들고, `this`는 그 새로운 `object`를 뜻함.
14. `call()`은 `Function.prototype`에 정의되어 있음. `Function`의 인스턴스들은 모두 사용할 수 있다. `call()`은 첫 번째 인자를 `this`로 사용하도록 하는
    함수로, `this`를 명시적으로 정의한다.
15. `obj`의 `method()`를 똑같이 호출해도 두번째에서 `this`를 정의했기 때문에 다른 결과가 나타남.
16. `apply()`는 call과 같은데 함수가 필요한 인자를 `array`로 전달.
17. `index(0, ...)`와 `length`가 있는 `object`를 `유사배열객체(array-like object)`라고 함. `push()`를 하면 요소가 추가되고, `slice()`는 array로 새로
    복제해 주는 메소드이다.
18. 모든 `<div>` 태그들을 `object`로 만들고, `slice()`를 이용해 `array`로 만든 후 `forEach()`를 사용할 수 있도록 함.
19. `string`또한 array-like임. `push()`를 `string`에 사용하면 문자열 뒤에 붙음. 또 Array.prototype에 정의된 여러 메소드 사용 가능.
20. 알아보기 쉽기 위헤 `Array.from()`을 사용해 array-like object를 `array`로 변환할 수 있는 함수가 제공됨.
21. 생성자에서 `call()`과 `apply()`를 활용하여 상속 생성자처럼 사용할 수 있다.
22. `forEach()`로 순회하며 대소비교하며 최대, 최소값을 구한다.
23. `Math.min`, `Math.max`에 apply를 사용하여 `22`의 코드를 아주 간결하게 작성할 수 있음.
24. `...numbers`를 하면 array를 펼칠 수 있다.
25. `bind()`는 function에 this를 주입하여 새로운 함수를 생성함.
26. bind된 function은 `name` 프로퍼티가 바뀜