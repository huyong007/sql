

const proto = {
    foo: 'hello'
};

const obj = {
    foo: 'world',
    find() {
        console.log(super.foo, 'super.foo');
        super.foo;
    }
};

Object.setPrototypeOf(obj, proto);

obj.find();
