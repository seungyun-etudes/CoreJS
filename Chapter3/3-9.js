var obj1 = {
    outer: function() {
        console.log(this);
        var innerFunc = function() {
            console.log(this);
        };
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc,
        };
        obj2.innerMethod();
    },
};
obj1.outer();