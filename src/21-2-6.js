/**
 * 1423. 可获得的最大点数  滑动窗口题
 * 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
 * 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
 * 你的点数就是你拿到手中的所有卡牌的点数之和。
 * 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let allNum = 0
    let minAllMum = 0
    let newMinAllNum = 0
    let len = cardPoints.length
    let diffLen = cardPoints.length - k
    for (let i = 0; i < len; i++) {
        allNum += cardPoints[i]
        if (i < diffLen) {
            newMinAllNum = minAllMum = allNum
        }else {
            newMinAllNum = newMinAllNum - cardPoints[i-diffLen] + cardPoints[i]
            minAllMum = Math.min(newMinAllNum, minAllMum)
        }
    }
    return allNum - minAllMum
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));