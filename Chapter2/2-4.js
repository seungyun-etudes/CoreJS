function a() {
    var x;
    var x;
    var x;
    // parameter까지 선언부 먼저 hoisting

    x = 1; // 수집 대상 1의 할당 부분
    console.log(x); // (1)
    console.log(x); // (2)
    x = 2; // 수집 대상 3의 할당 부분
    console.log(x); // (3)
}
a(1);