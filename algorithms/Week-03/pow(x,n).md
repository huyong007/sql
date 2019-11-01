```js
var myPow = function (x, n) {
    if (n === 0) return 1;
    let resualt = 1;
    let number = '' + n;
    let m = n % 2;
    m === 0 ? n = Math.abs(n) / 2 : n = Math.abs(n - 1) / 2;
 
    resualt = recurFun(x, n, resualt);
    if (+number < 0) {
        resualt = 1 / resualt;
    }
    if (m === 0) {
        console.log(resualt * resualt, 'resualt');
        return resualt * resualt;
    } else {
        console.log(resualt * resualt * x, 'resualt');
        return resualt * resualt * x;
    }
};
function recurFun(x, n, resualt) {
    if (n === 0) {
        return resualt;
    }
    resualt = x * resualt;
    n -= 1;
    return recurFun(x, n, resualt);
}

myPow(2.000, -10);


```