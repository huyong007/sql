- 一个有promise组成的数组对象[promiseA,promiseB,promiseC],实现链式调用
```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```


