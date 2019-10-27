/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 思路：
// 1，取nums2数组中的元素直接填充到数组nums1中，然后排序
```javascript 
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; ++i) {
        nums1[m + i] = nums2[n - i - 1];
    }
    nums1.sort((a, b) => a - b);
};
```
    // 2,双指针，两个都是从大到小的顺序遍历两个数组，然后逐渐向前移动，
    // 并比较大小，大的数字等于引入的第三个变量
    // 引入变量p用来为nums1添加元素，并随着元素的添加向前移动，而
    ```javascript
var merge = function (nums1, m, nums2, n) {
    m -= 1;
    n -= 1;
    let p = n + m + 1;
    while (n >= 0 && m >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[p] = nums1[m];
            m--;
        } else {
            nums1[p] = nums2[n];
            n--;
        }
        p--;
    }
    if (n < 0) return;
    while (n >= 0) {
        nums1[p] = nums2[n];
        n--;
        p--;
    }
};
```
这道题目首先开始审题的时候就没搞清题意，导致直接使用使用数组的方法浪费了半个小时的时间，边界问题需要多思考，双指针加上辅助指针的使用技巧以后多多学习