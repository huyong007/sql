var module = {
    id: 'hello',
    exports: {}
}

var load = function (module) {
    function greet(name) {
        console.log('hello', +name + '!');

    }
    module.exports = greet;

    return module.exports;
};
var exports = load(module);

save(module, exported);