/**
 * 995. K 连续位的最小翻转次数
 * 模拟翻转 超时
 * 滑动窗口
 * @param {number[]} a
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(a, k) {
  let len = a.length
  if (k > len) return -1
  let right = 0
  let num = 0


  // let left = 0
  // while (right < len){
  //   if (!a[right]){
  //     if (left + k > len) return -1
  //     for (let i = 0; i < k; i++) {
  //       a[left + i] ^= 1
  //     }
  //     num++
  //   }
  //   left++
  //   right++
  // }


  // 滑动窗口 o(N) o(k)
  // let arr = []
  // while (right < len){
  //   // 超出上次翻转的范围 出栈
  //   if (right >= arr[0] + k){
  //     arr.shift()
  //   }
  //   // 需要翻转
  //   if (arr.length % 2 === a[right]){
  //     if (right + k > len) return -1
  //     num++
  //     arr.push(right)
  //   }
  //   right++
  // }


  // 滑动窗口 o(N) o(1)
  let reverseFlag = 0
  while (right < len){
    // 如果之前的第三次遍历产生翻转,那么去除该次翻转
    if (right >= k && a[right-k]>1){
      reverseFlag ^= 1
    }
    // 和翻转标记相等时代表需要翻转
    if (a[right] === reverseFlag){
      if (right + k > len) return -1
      num++
      // 更新翻转标记
      reverseFlag ^= 1
      a[right] += 2
    }
    right++
  }

  return num
};

// console.log(minKBitFlips([0,1,0], 1))
// console.log(minKBitFlips([0,0,1,1,0,0,1,0], 5))
console.log(minKBitFlips([0,0,0,1,0,1,1,0], 3))
// console.log(minKBitFlips([1,1,0], 2))
// console.log(minKBitFlips([0,1,0], 2))
