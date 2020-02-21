'usr strict'

var
    fs = require('fs');

url = require('url');
path = require('path');
http = require('http');

var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

function loadFileFun(filepath, request, response) {
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
            return true;
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
}
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname, path.extname(pathname), 'pathname');
    var filepathArr = [];
    if (!path.extname(pathname)) {
        filepathArr.push(path.join(root, '/index.html'), path.join(root, '/default.html'))
        console.log(filepathArr, 'filepathArr');

    } else {
        var filepath = path.join(root, pathname);
    }

    if (filepathArr.length > 0) {
        for (let i = 0; i < filepathArr.length; ++i) {
            fs.stat(filepathArr[i], function (err, stats) {
                if (!err && stats.isFile()) {
                    console.log('200 ' + request.url);
                    response.writeHead(200);
                    fs.createReadStream(filepath).pipe(response);
                    return;
                }
                if (i === 2) {
                    console.log('404 ' + request.url);
                    response.writeHead(404);
                    response.end('404 Not Found');
                }
            });
        }
    } else {
        loadFileFun(filepath, request, response);
    }

});

server.listen(8080);

console.log('server is running at http://127.0.0.1:8080');

// 作业未完成

