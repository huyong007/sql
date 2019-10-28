/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arrList = [];
    function generate(left, right, n, s) {
        if (left === n && right === n) {
            arrList.push(s);
            console.log(s, left, right, 's2');
            return;
        }
        console.log(s, left, right, 's1');

        if (left < n) generate(left + 1, right, n, s + '(');
        if (left > right) generate(left, right + 1, n, s + ')');
    }
    console.log('s3');
    generate(0, 0, n, '');
    return arrList;
};

generateParenthesis(3);