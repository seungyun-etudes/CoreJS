var obj = {
    methodA: function() {
        console.log(this);
    },
    inner: {
        methodB: function() {
            console.log(this);
        },
    },
};
obj.methodA();
obj['methodA']();

obj.inner.methodB();
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB']();