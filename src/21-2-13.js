/**
 * 448. 找到所有数组中消失的数字
 * 遍历/原地修改
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let len = nums.length
  let arr = []
  nums = new Set(nums)
  for (let i = 1; i < len+1; i++) {
    !nums.has(i) && arr.push(i)
  }
  return arr
};

console.log(findDisappearedNumbers( [1,1]))

