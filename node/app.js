function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
        console.log(a, b, 'a,b');

    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();

console.log(sixth);

console.log([1,2,3][4],'10');

