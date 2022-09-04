# Chapter.6 Prototype

1. 생성자에서 name을 입력받고, `Prototype` 에 `Getter`를 설정. 후에 `instance.getName()`을 실행하면 `this`가 `instance`인 상태에서 `getName()`메소드를
   실행할 수 있음.
2. 생성자와 인스턴스의 구조를 출력.
3. `prototype`도 `Constructor`를 갖고 있고, 인스턴스도 `Constructor`를 갖고 있음. `instance.constructor()`
   와 `instance.__proto__.constructor()`는 같은 표현임. `__proto__`가 생략되기 때문.
4. 기본 자료형들의 인스턴스들의 `constructor` 프로퍼티를 수정가능한지 확인. `String`, `Number`, `Boolean`은 수정이 불가능하고 나머지는 수정 가능.
5. `constructor`에 접근하는 여러가지 방식.
6. 메소드 오버라이드. `prototype`에 이미 메소드가 있어도 인스턴스에 같은 이름의 메소드를 재정의하면 재정의한 메소드가 실행됨.
7. `push()`는 `Array`의 프로토타입에 있고, `hasOwnProerty()`는 `Object`의 프로토타입에 정의되어 있다. 해당 메서드가 없다면 Prototype Chain을 계속 타고 올라가면서
   메서드가 있는지 찾고, 실행한다.
8. `toString()`은 `Array`와 `Object` 둘 다에 정의되어 있다. 이 경우 `instance.toString()`을 실행하면 가장 먼저 탐색되는 `Array`의 `toString()`로
   호출한다. 인스턴스에 메서드 오버라이딩을 통해 다시 정의하면 오버라이딩 한 메서드가 호출된다.
9. `Object`의 프로토타입에 메서드를 정의하면 모든 객체들이 그 메서드를 사용할 수 있음.
10. 생성자의 인자를 `arguments`를 이용하면 미리 정의하지 않고 `Array.prototype.slice`를 call해서 사용할 수 있다.