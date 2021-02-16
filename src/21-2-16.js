/**
 * 561. 数组拆分 I
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let allNum = 0
    nums = nums.sort((a,b) => a-b)
    console.log(nums);
    for (let i = 0; i < nums.length; i+=2) {
        allNum += nums[i]
    }
    return allNum
};

console.log(arrayPairSum([1,4,2,3]));