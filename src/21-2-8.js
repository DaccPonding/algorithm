/**
 * 978. 最长湍流子数组
 * 暴力破解 + 滑动窗口 // 动态规划
 * 当 A的子数组A[i], A[i+1], ..., A[j]满足下列条件时，我们称其为湍流子数组：
 若 i <= k < j，当 k为奇数时，A[k] > A[k+1]，且当 k 为偶数时，A[k] < A[k+1]；
 或 若i <= k < j，当 k 为偶数时，A[k] > A[k+1]，且当 k为奇数时，A[k] < A[k+1]。
 也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。
 返回 A 的最大湍流子数组的长度。
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let len = arr.length
    let num = 1
    let allNum = 1

    // for (let i = 0; i < len-1; i++) {
    //     if (arr[i] === arr[i+1]){
    //         allNum = Math.max(allNum, num)
    //         num = 1
    //         continue
    //     }
    //     num === 1 && (flag = i%2?arr[i] > arr[i+1] : arr[i] < arr[i+1])
    //     if (i%2) {
    //         // 奇数
    //         if (flag){
    //             // 奇大于偶
    //             if (arr[i] > arr[i+1]) {
    //                 num++
    //             }else {
    //                 allNum = Math.max(allNum, num)
    //                 num = 2
    //                 // 偶大于奇
    //                 flag = false
    //             }
    //         }else {
    //             // 偶大于奇
    //             if (arr[i] < arr[i+1]) {
    //                 num++
    //             }else {
    //                 allNum = Math.max(allNum, num)
    //                 num = 2
    //                 // 奇大于偶
    //                 flag = true
    //             }
    //         }
    //     }else {
    //         // 偶数
    //         if (flag){
    //             // 奇大于偶
    //             if (arr[i] < arr[i+1]) {
    //                 num++
    //             }else {
    //                 allNum = Math.max(allNum, num)
    //                 num = 2
    //                 // 偶大于奇
    //                 flag = false
    //             }
    //         }else {
    //             // 偶大于奇
    //             if (arr[i] > arr[i+1]) {
    //                 num++
    //             }else {
    //                 allNum = Math.max(allNum, num)
    //                 num = 2
    //                 // 奇大于偶
    //                 flag = true
    //             }
    //         }
    //     }
    //
    // }
    // return Math.max(allNum, num)


    // let i = 0
    // while (i < len){
    //     if (len === 1){
    //         return 1
    //     }
    //     if (i === 0) {
    //         num = arr[i]!==arr[i+1] && 2 || 1
    //     }else if (arr[i-1] > arr[i] && arr[i] < arr[i+1] || arr[i-1] < arr[i] && arr[i] > arr[i+1]){
    //         num++
    //     }else if (arr[i] !== arr[i-1]) {
    //         allNum = Math.max(allNum, num)
    //         num = 2
    //     }
    //     i++
    // }
    //     return Math.max(allNum, num)

    let left = 0
    let right = 0
    let i = 0
    while (right < len - 1){
        if (left === right ){
            arr[right] === arr[right+1] && left++
            right++
        }else {
            if (arr[right - 1] > arr[right] && arr[right] < arr[right+1] || arr[right - 1] < arr[right] && arr[right + 1] < arr[right]){
                right++
            }else {
                allNum = Math.max(allNum,right - left + 1)
                left = right
            }
        }
    }
    return Math.max(allNum,right - left + 1)
};



//
console.log(maxTurbulenceSize([100]));
console.log(maxTurbulenceSize([4,8,12,16]));
console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]));
console.log(maxTurbulenceSize([0,1,1,0,1,0,1,1,0,0]));
console.log(maxTurbulenceSize([0,8,45,88,48,68,28,55,17,24]));
console.log(maxTurbulenceSize([4,5]));
console.log(maxTurbulenceSize([37,199,60,296,257,248,115,31,273,176]));
