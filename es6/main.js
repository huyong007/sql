var it = makeIterator(['a', 'b']);

console.log(it.next(), 'it.next()');
console.log(it.next(), 'it.next()');
console.log(it.next(), 'it.next()');




function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true };
        }
    };
}

const obj = {
    1: 9,
    2: 10,
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
}

for (i in obj) {
    console.log(i, obj[i], 'i,obj[i]');
}