

var generateParentthesis = function (n) {
    let arrlist = [];
    function generate(left, right, n, s) {
        if (left === n && right === n) {
            arrlist.push(s);
            return;
        }
        if (left < n) generate(left + 1, right, n, s + ')');
        if (left > right) generate(left, right + 1, n, s + '(');
    }
    generate(0, 0, n, '');
    return arrlist;
}