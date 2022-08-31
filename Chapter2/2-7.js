function a() {
    var b;
    var b = function b() {}; // ← 바뀐 부분

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
}
a();