var func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8);

var bindFunc2 = func.bind({ x: 2 }, 4, 5);
bindFunc2(6, 7);
bindFunc2(8, 9);