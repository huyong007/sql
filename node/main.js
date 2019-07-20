'use strict';

var { greet, hello, c } = require('./app');

var s = 1;

var a = greet(s);
var b = hello();

console.log(a + b - c, 'a+b');
