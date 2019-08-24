const s = new Set();
[2, 3, 4, 5, 6, 2, 3, 2, 2, 1, 1].forEach(x => s.add(x));

for (let i of s) {
    console.log(i, 'i');

}

console.log(s.size ,'s.size ');
console.log(s.has(1),'s.has(1)');
console.log(s.delete(1),'s.delete(1)');
console.log(s.clear())

