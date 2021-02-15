/**
 * 485. 最大连续1的个数
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    let left = 0
    let right = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]){
            left++
        }
        if (!nums[i]){
            right = Math.max(right, left)
            left = 0
        }
    }
    return Math.max(right, left)
};
console.log(findMaxConsecutiveOnes([1]));