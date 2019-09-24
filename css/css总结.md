## css规则
  ### 规则一：引用css的方式
  - html文件的head标签内部使用link标签，href属性值为css文件在文件系统中的相对位置
  - html文件的head标签中加入style标签内部包裹css元素
  - html文件的元素标签内部使用style="color:red;",最不推荐的就是这种写法
  ### 规则二：selector选择器的使用
  - h1 div{};空格是选择父元素的后代选择器，比如：是选择h1作为父元素，其下面的的所有类型子代元素(和空格分不太清楚)
  - h1>div{};>是选择所有的子代选择器，比如：是选择h1作为父元素，其下面的的儿子类型子代元素(和空格分不太清楚)
  - h1,div{};","是选择所有能够匹配上的列举的元素，比如：选择所有h1和所有div元素应用样式
  - p～div{};'~'是后继选择器，比如：选择以h1元素为兄弟节点的下面所有的子代div元素
  - h1+div{};“+”是选择直接后继元素选择器，比如：选择以h1元素为兄弟节点，它下面的第一个div元素（只选择一个元素）   
  - 疑问：以p作为父元素，应用这些规则似乎不太对应,其中空格选择子代元素无法应用，逗号无法应用到自身身上，加号能够选择所有的加好后的元素，波浪号能够选择第一个子元素和第一个兄弟元素
  ### @rules语法的使用
  - @media(min-width:50em){body {color:red}};
  - @import '../utiles/common.css';
  ### 重复选择器应用到同一个元素的的匹配规则
  - 正常情况下在同一个.css文件中是从上到下进行匹配
  - 优先级是写在元素内部的规则高于class规则，class规则高于元素本身的在.css中书写的规则


### 进度
- 层叠和样式：
  + https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks
  + https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_Started/Selectors
  