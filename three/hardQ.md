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

#### proxy
- 代理访问的基本原理是什么,为何会存在对象设置代理的时候只设置对象的set方法作为handle,但是仍然能够取到值呢,只设置对象的get方法,对对象设置值仍然能够设置成功?
```js
const a = { b: 1, c: 2 };

const proxy = new Proxy(a, {
    get: (target, key) => {
        if (key === 'b') {
            return 3;
        }
    }
});


console.log(proxy.b);
console.log(a.b);

proxy.b = 4;

console.log(proxy.b);
console.log(a.b);//为何被修改了,不是没有set方法吗

```