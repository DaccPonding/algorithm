/**
 * 1004. 最大连续1的个数 III
 * 滑动窗口
 * @param {number[]} a
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(a, k) {
  let len = a.length
  let num = 0
  let maxNum = 0
  let right = 0
  let left = 0
  while (right < len) {
    if (!a[right]){
      num++
    }
    if (num > k) {
      num -= a[left]^1
      maxNum = Math.max(right - left, maxNum)
      left++
    }
    right++
  }
  return Math.max(right - left, maxNum)
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([0,0,0,1], 4))
