### 课程重点原则摘要
- 第一课:react哲学
  - 组件功能单一原则
  - 简单应用,自上而下的编写应用
  - 复杂应用,自下而上的编写应用
  - state确定三个原则
    - 是否可以由父组件的props传递而来
    - 是否随着事件推移保持不变
    - 是否可以计算出该数据  
  - 数据流单向传递:从高层组件向底层组件通过props传递,从底层组件向高层组件通过绑定方法传递,比如input输入框的onChange事件中,在search组件内部通过绑定方法,调用在高层组件中定义的search组件的一个方法属性Onchange(),进入到高层组件之后,通过这个调用的方法在高层组件内部进行相应的操作,比如改变高层组件内部的数据
  - 数据流的单向传递:从高层组件想底层组件传递,是通过首先在高层组件内部定义一个数据属性,把这个数据属性绑定到在render中的底层组件上,在底层组件上面通过this.props.thisProp接收这个属性进行进一步的处理
  - 注意方法的绑定记得要绑定到该组件之内,如果存在重复名字的方法,使用bind(this)
- props的原则:所有的react组件都必须像纯函数一样保护它们的props不被更改
- 使用state的原则:
  - 不要直接修改state,而是使用this.setState来进行修改
  - state的更新可能是异步的,对于依赖state更新下一个状态,,解决方案:在setState()里面接收一个函数而不是一个对象,这个函数用上一个state作为第一个参数,将此次更新被应用时的props作为第二个参数
  - state的合并会被合并-------这个合并的影响并不是很理解,看到的解释是第二个合并会完全保留第一个合并,并且完全替换第二个更新
- jsx的使用规范
  - jsx也是一个种表达式
- diff算法的要求
  - 组件应该保持尽量多的复用
  - key值应该具有稳定性,可预测性,以及列表唯一的性质
- HOC 高阶组件总结
  - HOC章节中很多都是看不明白,但是大致的意思是HOC就像一个化妆间,通过这个化妆间的人的某些属性改变了
- Render Props 这个章节也是看的不是很懂,懵逼程度高于HOC
- context的使用原理很简单,对于可复用的数据抽离出来形成一个单独的概念context,就像一个方法在整个程序中多次使用就抽离出来,形成一个单独的function进而避免重复劳动
### 课程进度
| 时间      | 大章节目                                                                                                                  | 小章节       | 预算(min) | 实际                       |
| :-------- | :-----------------------------------------------------------------------------------------------------------------------: | :----------: | :-------: | :------------------------: |
| 2019-6-24 | charts:https://react.docschina.org/docs/state-and-lifecycle.html                                                          |
| 2019-6-25 | charts:https://react.docschina.org/docs/state-and-lifecycle.html                                                          | 生命周期方法 |
| 2019-6-26 | charts:https://react.docschina.org/docs/introducing-jsx.html                                                              | jsx简介      |
| 2019-6-27 | charts:https://react.docschina.org/docs/higher-order-components.html                                                      | 高阶组件     | 60        | 50                         |
| 2019-6-27 | charts:https://react.docschina.org/docs/render-props.html                                                                 | render props | 60        | 40                         |
| 2019-6-27 | charts:https://react.docschina.org/docs/context.html#reactcreatecontext                                                   | context      | 60        |                            |
| 2019-6-27 | charts:https://medium.com/free-code-camp/introducing-rekit-studio-a-real-ide-for-react-and-redux-development-baf0c99cb542 | rekit demo   | 60        |
| 2019-6-27 | charts:https://redux.js.org/introduction/getting-started                                                                  | redux        | 60        |
| 2019-6-27 | charts:https://redux.js.org/introduction/getting-started                                                                  | redux        | 60        | 把老师课程上的代码都敲一遍 |


### 学习失误总结
- 大部分的失误都是自己书写错误导致的错误,并且这种错误因为自己的自信并未仔细检查导致了更难以察觉

### 问题聚集
- diff算法中使用id和index作为两种不同的key的比较并未理解清楚