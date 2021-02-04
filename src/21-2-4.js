/**
 * s643
 * 子数组最大平均数 I
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
  let newNum = 0,
    num = 0
  for (let i = 0; i < nums.length + 1 - k; i++) {
    if (i === 0) {
      num = newNum = nums.slice(i, k+i).reduce((prev, current) => prev + current)
      console.log(newNum)
      continue
    }
    newNum = newNum - nums[i-1] + nums[k + i -1]
    console.log(newNum)
    if (newNum > num) {
      num = newNum
    }
  }

  return num / k
};
console.log(findMaxAverage([1,12,-5,-6,50,3],4))


