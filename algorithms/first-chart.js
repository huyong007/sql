let array = [];
array.length = 11;
for (let i = 0; i < array.length; i++) {
    array[i] = 0;
}
console.log(array, 'array');
let arrayNum = [3, 2, 5, 5, 8];
for (let j = array.length - 1; j >= 0; j--) {
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] === j) {
            array[j] += 1;
        }
    }
    if (array[j] !== 0) {
        while (array[j] - 1 >= 0) {
            console.log(j);
            array[j] -= 1;
        }

    }
}