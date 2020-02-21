/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let arrList = [];
    function generate(left, right, n, s) {
        if (left === n && right === n) {
            arrList.push(s);
            return;
        }
        if (left < n) generate(left + 1, right, n, s + '(');
        if (left > right) generate(left, right + 1, n, s + ')');
    }
    generate(0, 0, n, '');
    return arrList;
};

climbStairs(3);