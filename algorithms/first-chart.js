// 桶排序算法：
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

// 冒泡排序算法

let b = [1, 9, 4, 8, 7];
let arr = [1, 4, 9, 5, 2]
function bubble(arr) {
    let t;
    let a = [];
    let n = arr.length;
    for (let i = 1; i <= n; i++) {
        a[i] = arr[i - 1];
    }
    console.log(a, 'a');

    for (let i = 1; i <= n - 1; i++) {
        for (let j = 1; j <= n - i; j++) {
            console.log(a[j + 1], 'a[j+1]');
            if (a[j] < a[j + 1]) {
                t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        console.log(a[i], 'a[i]');
    }
}

bubble(arr);
bubble(b);