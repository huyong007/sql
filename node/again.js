// 问题一：上述是ES6函数的尾调函数针对的用法，没看懂
function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;

            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;

        }
    };
}

var sum = tco(function (x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    } else {
        return x
    }
});

sum(1, 100000);



// 问题二：
const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
]

var x = 1;
console.log(arr, 'arr');
arr.forEach(e => {
    console.log(e, 'e');

})
console.log(x, 'x');
// 此处为何没有计算arr第一个数值
setTimeout(() => {
    x = 0;
    console.log(arr, 'arr');
    console.log(x, 'x');
    arr.forEach(e => {
        console.log(e, 'e');

    })
}, 1000);