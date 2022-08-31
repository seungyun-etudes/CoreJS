# Chapter 1. 데이터 타입

데이터 타입의 종류, 변수, 불변값과 가변값, immutable object 등에 대해 공부하고,
얕은 복사(shallow copy)와 깊은 복사(deep copy) 함수를 구현하여 학습하였음.
또한 null, empty, undefined의 차이를 이해하였음.

1. 변수 선언
2. 변수 선언 및 데이터 할당
3. `string` 타입과 `number` 타입
4. `object` 타입
5. `object` 타입의 내부 값 수정
6. `object` 타입 내 `array` 타입
7. `object` 타입을 대입 연산자로 받으면 같은 메모리 주소를 가리킴 _(Shallow Copy)_
8. `primitive type`인 `number`타입 변수는 b=a 로 대입하였어도 b의 값을 수정하면 b가 다른 데이터 메모리를 가리키도록 할 수 있음. 하지만 object를 대입연산자로 복사하고 내부 값만
   바꾸는 경우 `obj1`과 `obj2`가 같은 `object`를 가리키고 있기 때문에 `obj2`의 값을 수정하면 `obj1`의 값도 바뀜.
9. `8`의 문제의 수정을 원하면 새로운 `object`를 `var obj2 = {...}`형식으로 대입해야 함.
10. `changeName()`함수에서 `Shallow Copy` 하고 있기 때문에 원본 `object`의 값도 변했음.
11. `10`의 문제를 막고 싶다면 새로운 `object`를 만들어 return 해주는 함수를 작성해야함.
12. 반복문을 이용해 내부 속성들을 함께 복사하는 `copyObject()` 구현.
13. `12`에서 구현한 `copyObject()` 테스트
14. `object` 안에 `object`가 있는 경우, `12`에서 구현한 `copyObject()`로는 완벽한 DeepCopy가 불가능함.
15. 이를 해결하기 위해서는 `user2.urls`를 한번 더 copy 하는 방법이 있고,
16. 재귀함수를 이용해 객체 내의 객체를 모두 순회하며 _(DFS)_ 복사하는 방식으로 `copyObject()`를 작성하는 방법이 있다. 이 경우 의도대로 `object`의 DeepCopy가 정상적으로 수행된다.
17. 다만 `16`의 방식으로 구현하면 `object` 내에 `array`가 있는 경우 array가 index가 key인 `object`로 변환된다.
18. `object`를 `JSON String`으로 변환하고, `JSON String`을 다시 `object`로 변환할 수 있다. 다만 이 경우 메서드는 복사되지 않는다.
19. 변수를 선언하고 값을 대입하지 않는 경우와 `object`를 선언했는데 없는 `property`의 값은 `undefined`이고, 선언하지 않은 변수에 접근하면 `ReferenceError`가 발생.
    return이 없는 function은 `undefined`를 반환한 것으로 간주함.
20. `array`를 선언하고 비어 있는 칸은 `empty`
21. `undefined`가 array 안에 있는 경우 forEach로 순회할 때 무시함. `map`은 배열 각 요소에 함수를 수행하여 새로운 배열을 생성. `filter`는 요소들에 대해 함수를 실행하여
    결과가 `true`인 요소만 모아서 배열 생성. `reduce`는 map에 누산기인 accumulator가 추가된 형태.
22. `null`은 `object`이고 값만을 비교하면 `undefined`와 같지만 strict하게 구분하면 다르다.