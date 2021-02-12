/**
 * s119 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 线性递推 滚动数组/动态规划
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    rowIndex++
    let arr = [1]
    for (let i = 0; i < rowIndex; i++) {
        if (i === 0 || i === rowIndex -1) {
            arr[i] = 1
            continue
        }
        arr[i] = arr[i-1] * (rowIndex - i)/i
    }
    return arr
};

console.log(getRow(5));