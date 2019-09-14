// // 桶排序算法：
// let array = [];
// array.length = 11;
// for (let i = 0; i < array.length; i++) {
//     array[i] = 0;
// }
// console.log(array, 'array');
// let arrayNum = [3, 2, 5, 5, 8];
// for (let j = array.length - 1; j >= 0; j--) {
//     for (var i = 0; i < arrayNum.length; i++) {
//         if (arrayNum[i] === j) {
//             array[j] += 1;
//         }
//     }
//     if (array[j] !== 0) {
//         while (array[j] - 1 >= 0) {
//             console.log(j);
//             array[j] -= 1;
//         }

//     }
// }

// // 冒泡排序算法

// let scoreName = [
//     {},
//     { name: 'huhu', score: 5 },
//     { name: 'haha', score: 3 },
//     { name: 'xixi', score: 5 },
//     { name: 'hengheng', score: 2 },
//     { name: 'gaoshou', score: 8 },
// ];

// let length = scoreName.length;

// for (let i = 1; i <= length - 1; i++) {
//     for (let j = 1; j <= length - i; j++) {
//         if (scoreName[j].score < scoreName[j + 1].score) {
//             t = scoreName[j]; scoreName[j] = scoreName[j + 1]; scoreName[j + 1] = t;
//         }
//     }
// }


// for (let i = 1; i < -n; i++) {
//     console.log(scoreName[i].name, 'scoreName.[i].name');
// }

```javascript 
// 计数排序JavaScript实现，极客时间学习笔记
// 需要排序的数组a
let a = [2, 5, 3, 0, 2, 3, 0, 3];
/* c的key代表着需要排序的数组中从小到
大的数值，value代表需要排序的数组中
该数值出现了几次 */
let c = [];
// 排序后的结果R
let R = [];
/* 第一步求出需要排序的数组中的最大值，
以便给出c中需要多少key来对应要排序的a中的从小到大的数值
*/
let max = a[0];
for (let i = 0; i < a.length - 1; i++) {
    if (max >= a[i]) {
        continue;
    }
    max = a[i];
}
console.log(max, 'max');// max=5；
// 获取value为0，key代表a中value的数组c
for (let i = 0; i <= max; i++) {
    c[i] = 0;
}
console.log(c, c.length, 'c');//[ 0, 0, 0, 0, 0, 0 ] 6 'c'

// 获取a中的每个值出现的个数，并将个数分配给c中的key对应的value；
for (let i = 0; i < a.length; i += 1) {
    c[a[i]]++;
}
console.log(c, 'c1');//[ 2, 0, 2, 3, 0, 1 ] 'c1'

/* 
计算排序中最关键的部分；对c的value依次累加，得出c2，
解释：在c2的第四个元素为7，表明小于或等于3的元素有‘七个’，
第六个元素表明小于等于5的元素有‘八个’，
至此，我们这里面提到的‘七个’和‘八个’，
就可以作为排序后的该元素在排序后的元素的游标index，
这是一种利用一个外部数组来进行辅助排序的做法，思路很巧妙，
计数排序一般只适合正整数场景低于负数可以进行加操作转换成正整数，
小数进行乘于某个数进行转化，
并且不适合排序中数组很小，而最大值过大的场景，如果这样得出的中间c太长
*/
for (let i = 1; i <= c.length - 1; i++) {
    c[i] = c[i - 1] + c[i];
}
console.log(c, 'c2');//[ 2, 2, 4, 7, 7, 8 ] 'c2'
for (let i = a.length - 1; i >= 0; i--) {
    let index = c[a[i]] - 1;
    R[index] = a[i];
    c[a[i]]--;
}
console.log(R, 'R');
![扫描和我一起学习吧](https://tva1.sinaimg.cn/large/006y8mN6gy1g6yx21rxjij30u01hd186.jpg)
```