

// var generateParentthesis = function (n) {
//     let arrlist = [];
//     function generate(left, right, n, s) {
//         if (left === n && right === n) {
//             arrlist.push(s);
//             return;
//         }
//         if (left < n) generate(left + 1, right, n, s + ')');
//         if (left > right) generate(left, right + 1, n, s + '(');
//     }
//     generate(0, 0, n, '');
//     return arrlist;
// }

function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
        console.log(path,index,'path,index');
        
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}

subsets([1, 2, 3]);