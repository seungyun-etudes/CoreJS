var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function(v, i) {
    console.log(v, i);
});
arr2.forEach(function(v, i) {
    console.log(v, i);
});

arr1.map(function(v, i) {
    return v + i;
}); // [NaN, 2]
console.log(arr1);

arr2.map(function(v, i) {
    return v + i;
}); // [empty, 2]
console.log(arr2);

arr1.filter(function(v) {
    return !v;
}); // [undefined]
console.log(arr1);

arr2.filter(function(v) {
    return !v;
}); // []
console.log(arr2);

arr1.reduce(function(p, c, i) {
    console.log(p+c+i)
}, ''); // undefined011

arr2.reduce(function(p, c, i) {
    console.log(p + c + i);
}, ''); // 11