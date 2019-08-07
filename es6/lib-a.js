

const go = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...go()], '[...go()]');



const obj = {a:1,b:2};

let arr = [...obj];

console.log(arr,'arr');
 