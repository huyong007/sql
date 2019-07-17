class Point {
    constructor() {
        this.p = 'p';
    }
    print() {
        console.log(this.x, this.y)
    }
}
Point.prototype.n = 'n';
class ColorPoint extends Point {
    constructor() {
        super();
        this.p = 'q';
    }
    get m() {
        console.log(super.p, super.n, 'super.p super.m');
    }
}
let cp = new ColorPoint();
cp.m;


