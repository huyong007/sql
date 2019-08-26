// 桶排序算法：
let array = [];
array.length = 11;
for (let i = 0; i < array.length; i++) {
    array[i] = 0;
}
console.log(array, 'array');
let arrayNum = [3, 2, 5, 5, 8];
for (let j = array.length - 1; j >= 0; j--) {
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] === j) {
            array[j] += 1;
        }
    }
    if (array[j] !== 0) {
        while (array[j] - 1 >= 0) {
            console.log(j);
            array[j] -= 1;
        }

    }
}

// 冒泡排序算法

let scoreName = [
    {},
    { name: 'huhu', score: 5 },
    { name: 'haha', score: 3 },
    { name: 'xixi', score: 5 },
    { name: 'hengheng', score: 2 },
    { name: 'gaoshou', score: 8 },
];

let length = scoreName.length;

for (let i = 1; i <= length - 1; i++) {
    for (let j = 1; j <= length - i; j++) {
        if (scoreName[j].score < scoreName[j + 1].score) {
            t = scoreName[j]; scoreName[j] = scoreName[j + 1]; scoreName[j + 1] = t;
        }
    }
}


for (let i = 1; i < -n; i++) {
    console.log(scoreName[i].name, 'scoreName.[i].name');

}