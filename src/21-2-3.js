/**
 * s888 公平的糖果棒交换
 * https://leetcode-cn.com/problems/fair-candy-swap/
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    // 求平均值 暴力破解
    // let arr = []
    // let allA = A.reduce((prev, curr) => prev + curr)
    // let allB = B.reduce((prev, curr) => prev + curr)
    // let mount =  (allA + allB) / 2
    // if (mount === parseInt(mount)){
    //     A.map(numA => {
    //         B.map(numB => {
    //             allA - mount === numA - numB && (arr = [numA,numB])
    //         })
    //     })
    // }

    // 哈希表
    let allA = A.reduce((prev, curr) => prev + curr)
    let bSet = new Set(B)
    let mount =  (allA + B.reduce((prev, curr) => prev + curr)) / 2

    let numB
    for (let i = 0; i < A.length; i++) {
        numB = mount + A[i] - allA
        if (bSet.has(numB)){
            return [A[i], numB]
        }
    }

    return []
};

console.log(fairCandySwap([20,35,22,6,13], [31,57]));


