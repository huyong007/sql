// let mix = (object) => ({
//     with: (...mixins) => mixins.reduce(
//         (c, mixin) => Object.create(
//             c, Object.getOwnPropertyDescriptors(mixin)
//         ), object)
// });

// let a = { a: 'a' };

// let b = { b: 'b' };

// let c = { c: 'c' };

// let d = mix(c).with(a, b);

// console.log(d.c,'d');


let s = Symbol('傻逼');
let s1 = Symbol('clearn');

console.log(s, ' s');
console.log(s1, ' s1');

