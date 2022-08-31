var newArr2 = [10, 20, 30].map(function(index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
});
console.log(newArr2);