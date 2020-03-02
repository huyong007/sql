// 最小公约数
const lcm = (...arr) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const _lcm = (x, y) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
  };


const mask = (str)=>str.padStart(str.length,'####');

console.log(mask('123221122'));