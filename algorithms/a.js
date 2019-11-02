/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let resualtList = new Array();
    if (nums === null) return resualtList;
    recurFun(resualtList, nums, [], 0);
    return;
};

function recurFun(resualtList, nums, list, index) {
    // terminator
    if (index === nums.length) {
        resualtList.push([list]);
        return;
    }
    // not pick the number at this index
    recurFun(resualtList, nums, list, index + 1);
    list.push(nums[index]);
    // pick the number at this index
    recurFun(resualtList, nums, list, index + 1);
    // reverse the current state 
    list.splice(list.length - 1, 1);
}

subsets([1,2,3]);