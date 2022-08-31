var obj = {
    method: function(x) {
        console.log(this, x);
    },
};
obj.method(1);
obj['method'](2);