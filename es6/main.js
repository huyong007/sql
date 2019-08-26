let set = new Set([1, 2, 3]);

set = new Set(Array.from(set, val => val * 2));

console.log(set, 'set');

let obj = { length: 2 };

Array.from(obj, () => 3);

console.log(obj,'obj');
// reflect 概述