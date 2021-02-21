/**
 * 1438. 绝对差不超过限制的最长连续子数组
 * 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。
 * 如果不存在满足条件的子数组，则返回 0 。
 * 滑动窗口/单调队列
 * 滑动窗口/有序集合（树
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let max = []
    let min = []
    let len = nums.length
    let num = 0
    let left = 0
    let right = 0

    while (right < len) {
        while(max.length && max[max.length - 1] < nums[right]){
            max.pop()
        }
        while(min.length && min[min.length - 1] > nums[right]){
            min.pop()
        }
        max.push(nums[right])
        min.push(nums[right])
        while (max.length && min.length && max[0] - min[0] > limit) {
            nums[left] === max[0] && max.shift()
            nums[left] === min[0] && min.shift()
            left++
        }
        num = Math.max(num, right - left + 1)
        right++
    }
    return num
};
console.log(longestSubarray([4,2,2,2,4,4,2,2], 0));