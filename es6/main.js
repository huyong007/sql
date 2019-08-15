let a = { b: 'c' }
// 改变一个对象的属性可以使用扩展运算符，也可以使用
Object.assign(a,
    Object.defineProperty({}, 'invisiable', {
        enumerable: true,
        value: 'hello'
    })
);

console.log(a, 'a');

Object.
console.log(a,'a');





