class A {
    constructor() {
        this.p = 'p';
    }
    print() {
        console.log(this.x, this.y)
    }
}
A.prototype.n = 'n';
class B extends A {
    constructor() {
        super();
        this.p = 'q';
    }
    get m() {
        console.log(super.p, super.n, 'super.p super.m');
    }
}
let cp = new B();
console.log(B.__proto__ === A, 'B._proto_ === A');


console.log(B.prototype.__proto__ === A.prototype, 'B.prototype._proto_ === A.prototype');





