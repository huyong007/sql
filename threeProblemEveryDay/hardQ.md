- 一个有promise组成的数组对象[promiseA,promiseB,promiseC],实现链式调用
```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```
```js
// reduce的妙用一:
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
console.log(res(3));
console.log([].reduce((a, b) => a + b, 1));
```

- 未理解
Creates a deep clone of an object.

Use recursion. Use Object.assign() and an empty object ({}) to create a shallow clone of the original. Use Object.keys() and Array.prototype.forEach() to determine which key-value pairs need to be deep cloned.
```js
const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone;
};

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

```