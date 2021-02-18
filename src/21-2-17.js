/**
 * 566. 重塑矩阵
 * 二位数组的一维表示
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let allLen = r * c
  let oldR = nums.length
  let oldC = nums[0].length
  if (oldR * oldC !== allLen){
    return nums
  }

  let newNums = new Array(r).fill(0).map(() => new Array(c).fill(0))

  for (let i = 0; i < allLen; i++ ) {
    newNums[Math.floor(i/c)][i%c] = nums[Math.floor(i/oldC)][i%oldC]
  }
  return newNums
};

console.log(matrixReshape([[1,2],[3,4]], 4, 1))
console.log(matrixReshape([[1,2,3,4]], 2, 2))
console.log(matrixReshape([[1,2],[3,4]], 1, 4))
