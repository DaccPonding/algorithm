/**
 * s1208 使字符串尽量相等 求最大连续数
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let left = 0
  let right = 0
  let maxNum = 0
  for (let i = 0; i < s.length; i++) {
    maxNum += Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
    if (maxNum > maxCost) {
      maxNum -= Math.abs(s[left].charCodeAt()-t[left].charCodeAt())
      left++
    }
    right++
  }
  return right - left
}

console.log(equalSubstring('krrgw', 'zjxss', 19))
