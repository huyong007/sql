exports.done = false;
var a = require('./lib-a');
console.log('在b.js之中,a.done=%j', a.done);
exports.done = true;
console.log('b.js执行完毕');