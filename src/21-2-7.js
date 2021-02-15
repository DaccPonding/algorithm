/**
 * 665. 非递减数列  使i+1变大会影响后续比较，尽量修改i 贪心策略
 * 给你一个长度为n的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 我们是这样定义一个非递减数列的：对于数组中任意的i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let num = 0
    let x = 0
    let y = 0
    for (let i = 0; i < nums.length-1 ; i++) {
        x = nums[i]
        y = nums[i + 1]
        // 出现递减
        if (x > y) {
            if (i > 0 && y < nums[i-1]){
                nums[i + 1] = x
            }else {
                nums[i] = y
            }
            if (++num > 1) {
                return false
            }
        }
    }
    return true
};

console.log(checkPossibility([-1,4,5,3]), true);
console.log(checkPossibility([4,2,3]), true);
console.log(checkPossibility([4,2,1]), false);
console.log(checkPossibility([-1,4,2,3]), true);
console.log(checkPossibility([3,4,4,2,3]), false);
console.log(checkPossibility([5,7,1,8,9]), true);
console.log(checkPossibility([3,4,2]), true);
console.log(checkPossibility([1,3,5,2,4]), false);
console.log(checkPossibility([1,3,5,4,4]), true);

