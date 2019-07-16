var Point = function (x, y) {
    console.log(x, y);
}

Point.prototype.toString = function () {

}

Object.keys(Point.prototype);




class Lines {
    constructor() {
        this.x = y;
        this.y = x;
    }
    toString() {
        return this.x, this.y;
    }

}

console.log(
    Object.keys(Point.prototype),'\n',
    'Point','\n',
    Object.keys(Lines.prototype),'\n',
    "Lines",'\n',
);

console.log(
    Object.getOwnPropertyNames(Point.prototype),'\n',
    'Point','\n',
    Object.getOwnPropertyNames(Lines.prototype),'\n',
    "Lines",'\n',
)