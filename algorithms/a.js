/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 0 || x == 1) {
        return x;
    }
    var tmp = x;
    function sqrt(x) {
        var sqrtx = (x + tmp / x) / 2;
        if (sqrtx == x) {
            return Math.floor(x);
        } else {
            return sqrt(sqrtx);
        }
    }
    return sqrt(x);
};

mySqrt(10);