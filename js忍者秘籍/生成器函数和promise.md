- 生成器函数generator和promise可以解决nodejs单线程执行的UI阻塞，并让代码看起来更为优雅
```js
function* (){
    // do some logic
}
```
- generator函数的特性是：
  1. 执行之后返回一个迭代器对象(iterator)
  2. interator的next()方法调用之后返回一个对象{value:value,done:false/true}
  3. 返回的值是yield执行之后的值，此时生成器函数在该位置挂起执行（生成器进入挂起让渡状态），等待下一次值的请求也就是next()
  4. 如果下一次next()方法的参数存在，那么生成器函数内部挂起的yield的返回值就包含了该参数，否则生成器函数内部上一次被挂起的yield的表达式的值就是undefined
  5. 返回对象的done属性为true说明迭代完成，false迭代可以继续
  6. 返回对象的done为false时候，对象的value值是undefined
  7. next()方法执行时传递的参数可以作为上一次yield表达式的返回值，进而在外部和生成器函数内部进行通信
  8. **当我们从生成器中取得控制权后，生成器的执行环境上下文一直是保存的，而不是像标准函数一样退出后销毁** 原理类似闭包

- 应用:(为对象生成唯一id值)
```js
function* Interator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}

const interator = Interator();

console.log({ id: interator.next().value }, 'value');
console.log({ id: interator.next().value }, 'value');
console.log({ id: interator.next().value }, 'value');
console.log({ id: interator.next().value }, 'value');
```

### promise
- 三个状态
  1. pending状态，未完成状态
  2. 完成态
  3. 拒绝态
