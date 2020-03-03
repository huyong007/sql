


mask('111111')//'11####'

MINI

text-shadow

求两个或两个以上数字之间的最小公约数

>>js

Performs right-to-left function composition.

Use Array.prototype.reduce() to perform right-to-left function composition. The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
```