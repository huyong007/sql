exports.done = false;
var b = require('./lib-b');
console.log('在lib-a之中,b.done=%j', b.done);
exports.done = true;
console.log('a.js执行完毕');
