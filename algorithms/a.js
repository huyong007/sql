/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (s) {
    if (s.length === 0 || s.length === 1) {
        return true;
    }
    let arrS = s.split('');
    return recurFun(0, n - 1, arrS);
};

function recurFun(left, right, arrS) {
    if (left === right) {
        return true;
    }
    if (arrS[left] === arrS[right]) {
        return true;
    } else {
        return false;
    }
}


