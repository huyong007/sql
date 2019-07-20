'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');

ws1.write('使用stream写入文本数据');

ws1.write('END.');

ws1.end();

var ws2 = fs.createReadStream('output2.txt');

// ws2.write(new Buffer('使用Stream写入二进制数据。。。\n', 'utf-8'));

// ws2.write(new Buffer('END', 'utf-8'));

// ws2.end();

var rs = fs.createReadStream('sample.txt');

var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws, { end: false });



