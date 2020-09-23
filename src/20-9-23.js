/**
 * s78.子集
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 回溯类型
 */

var subsets = function(nums) {
  return nums.reduce((total,num)=>total.concat(total.map(item=>item.concat(num))),[[]])
};
