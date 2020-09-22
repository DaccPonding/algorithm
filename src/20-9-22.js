/**
 * s28.实现 strStr() 函数。
 给定一个 haystack 字符串和一个 needle 字符串
 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 如果不存在，则返回  -1。
 * @param haystack
 * @param needle
 * @returns {number}
 */
let strStr = function(haystack, needle) {
  if(typeof needle === 'string'){
    if (needle === '') return 0
    for(let i=0; i<haystack.length-needle.length+1; i++){
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i+j] !== needle[j]) break
        if (j === needle.length-1){
          return i
        }
      }
    }
  }
  return -1
};
console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))



