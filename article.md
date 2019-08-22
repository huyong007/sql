### 啊哈算法js实现
- 桶排序的简单实现
```Javascript
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
```
<!-- 冒泡排序的JavaScript实现 -->
```javascript
let t;//排序中需要用到的变量
let a = [];//给出排序后的数组
function bubbleSequence(arr) {
    let arrLength = arr.length;
    for (let i = 1; i <= arrLength; i++) {
        a[i] = arr[i - 1];
    }
    console.log(a, 'a');
    for (let i = 1; i <= arrLength - 1; i++) {
        for (let j = 1; j <= arrLength - i; j++) {
            if (a[j] < a[j + 1]) {
                t = a[j + 1]; a[j + 1] = a[j]; a[j] = t;
            }
        }
    }
    for (let i = 1; i <= arrLength; i++) {
        console.log(a[i]);
    }
}


bubbleSequence([2, 3, 1, 0, 7, 9]);
```
* 排序为从小到打排序，两个for循环，内层循环每一次循环找到相邻的更小的数字，往后移动一位，
* 每次一套（不是一次）循环找到当前比较的所有的元素中最小的排在最后，
* i=1对应的内层j轮询比较出第一小的数字，i=2，比较出第二小的数字，以此类推
* 假设有五个数字需要比较，比较初第四小的数字进行排序之后就整个排序结束了
* 下图以一个length为6的数组为例子拆解了整个过程