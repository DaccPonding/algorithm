/**
 * 1052. 爱生气的书店老板
 * https://leetcode-cn.com/problems/grumpy-bookstore-owner/
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} x
 * @return {number}
 */

var maxSatisfied = function (customers, grumpy, x) {
  let len = customers.length,num = 0,angryNum = 0,maxNum = 0
  for (let i = 0; i < len; i++) {
    if (!grumpy[i]) {
      // 直接加上不生气时的客人数
      num += customers[i]
    } else {
      angryNum += customers[i]
    }
    // 生气时流失的客人数统计下来
    // 区间长度超出了x 当left时间老板在生气时
    // 因为不生气的已经被统计了
    // left向右移动
    i >= x && grumpy[i - x] && (angryNum = angryNum - customers[i - x])
    maxNum = Math.max(maxNum, angryNum)
  }
  return num + maxNum
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))
console.log(maxSatisfied([4, 10, 10], [1, 1, 0], 2))
console.log(maxSatisfied([2, 6, 6, 9], [0, 0, 1, 1], 1))
console.log(maxSatisfied([9, 10, 4, 5], [1, 0, 1, 1], 1))

