/**
 * 766. 托普利茨矩阵
 * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
 * 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵
 * @param {number[][]} s
 * @return {boolean}
 */
var isToeplitzMatrix = function (s) {
  let xLen = s[0].length
  let yLen = s.length
  for (let i = 1; i < yLen; i++) {
    for (let j = 1; j < xLen; j++) {
      if (s[i][j] !== s[i-1][j-1]){
        return false
      }
    }
  }
  return true
}

console.log(isToeplitzMatrix([[1,2],[2,2]]))
