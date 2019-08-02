function add(...values) {
    let sum = 0;
    let inSum = 0;
    for (var val of values) {
        console.log(val, 'val');

        sum += val;
    }
    for (var key in values) {
        console.log(key, 'key');
        console.log(typeof key, 'key typeof string');

        inSum += +key;
    }
    console.log(sum, 'sum');
    console.log(inSum, 'inSum');

}

add(2, 5, 3);