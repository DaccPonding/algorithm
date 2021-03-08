/**
 * 202
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = n ,fast = n
  const getNode = num => {
    let allNum = 0
    let n = 0
    while (num > 9){
      n = num % 10
      allNum += n * n
      num = parseInt(num / 10)
    }
    return allNum + num * num
  }
  do {
    slow = getNode(slow)
    fast = getNode(getNode(fast))
  }while (slow !== fast)
  return fast === 1
};

// console.log(isHappy(19));
// console.log(isHappy(82));
// console.log(isHappy(111));

