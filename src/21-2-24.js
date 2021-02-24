/**
 * 832. 翻转图像
 * https://leetcode-cn.com/problems/flipping-an-image/
 * @param {number[][]} a
 * @return {number[][]}
 */
var flipAndInvertImage = function(a) {
  let len = a.length
  let subLen = a[0].length

  for (let i = 0; i < len; i++) {
    // a[i].reverse()
    // for (let j = 0; j < subLen; j++) {
    //   a[i][j] ^= 1
    // }

    let left = 0
    let right = subLen - 1
    while (left < right) {
      if (a[i][left] === a[i][right]) {
        a[i][left] ^= 1
        a[i][right] ^= 1
      }
      left++
      right--
    }
    if (left === right) {
      a[i][left] ^=1
    }
  }
  return a
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))
