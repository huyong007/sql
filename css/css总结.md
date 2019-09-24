## css规则
  ### 规则一：引用css的方式
  - html文件的head标签内部使用link标签，href属性值为css文件在文件系统中的相对位置
  - html文件的head标签中加入style标签内部包裹css元素
  - html文件的元素标签内部使用style="color:red;",最不推荐的就是这种写法
  ### 规则二：selector选择器的使用(标签选择器，类选择器，ID选择器)
  - A E;	元素A的任一后代元素E (后代节点指A的子节点，子节点的子节点，以此类推)(和‘>’分不太清楚)
  - A > E;>元素A的任一子元素E(也就是直系后代)(和空格分不太清楚)
  - h1,div{};","是选择所有能够匹配上的列举的元素，比如：选择所有h1和所有div元素应用样式
  - B ~ E;B元素后面的拥有共同父元素的兄弟元素E
  - B + E;元素B的任一下一个兄弟元素E（只选择一个元素） 
  - E:first-child;	任一是其父母结点的第一个子节点的元素E
  - 选择器 p.key 选中所有class属性为key的<p> 元素  
  - 选择器 [type='button'] 选中所有 type 属性为 button 的元素
  - (*）来表示”任意元素“
  - 疑问：以p作为父元素，应用这些规则似乎不太对应,其中空格选择子代元素无法应用，逗号无法应用到自身身上，加号能够选择所有的加好后的元素，波浪号能够选择第一个子元素和第一个兄弟元素
  ### @rules语法的使用
  - @media(min-width:50em){body {color:red}};
  - @import '../utiles/common.css';
  ### 重复选择器应用到同一个元素的的匹配规则
  - 正常情况下在同一个.css文件中是从上到下进行匹配
  - 优先级(确定度)是写在元素内部的规则高于ID选择器的规则，ID选择器规则高于class规则，class规则高于元素本身的在.css中书写的规则

### 不知道的规则
- 如果我们想单独设置某个效果失效，我们可以把其相应的属性设置为normal或inherit
- 1“em”等于1个字母“m”的宽度（相对于父元素字号大小）;因此1.5em就是1.5倍的父元素字号大小，可以通过设置全局的父元素的字体大小来达到控制子元素大小的目的
- 背景色可以设置 transparent 属性来移除掉所有的颜色，呈现出父元素的背景色
- CSS可以在元素的前后插入文本：在选择器的后面加上::before 或者 ::after 。在声明中，指定 content 属性，并设置文本内容
- 内边距总是跟元素的背景色一样，所以当你设置背景色时，你会发现背景色在元素本身和内边距上都生效了。外边距总是透明的。


### 进度
- 层叠和样式：
  + https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks
  + https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_Started/Boxes
  