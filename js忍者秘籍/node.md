- 模块机制的原理
  1. Node在加载一个js文件的时候准备module.exports变量实际上是同一个变量，并且初始化为空对象{}
  2. 实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包
  3. 变量module是Node在加载js文件前准备的一个变量，并将其传入加载函数
  4. 在模块加载完毕之后**return module.exports**，这样就把闭包中的变量给到了其他模块
  5. 其他模块使用require就可以引入该变量
```js
// 准备module对象:
var module = {
    id: 'hello',
    exports: {}
};
var load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }
    
    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};
var exported = load(module);
// 保存module:
save(module, exported);
```
