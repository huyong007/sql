/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) {
        return myPow(1 / x, -n)
    }
    let half = Math.floor(n / 2);
    let resualt = myPow(x, half);
   
    if (n % 2 === 0) {
        return resualt = resualt * resualt;
    } else {
        return resualt = resualt * resualt * x;
    }


};
myPow(2, 10);