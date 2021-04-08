/**
 * s.20
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  // let arr = []
  // for (let i = 0; i < s.length; i++) {
  //   switch (s[i]){
  //     case '(':
  //     case '[':
  //     case '{': arr.push(s[i]); break;
  //     case ')': {
  //       if (arr.length===0 || arr.pop() !== '(') return false
  //       break
  //     }
  //     case ']':{
  //       if (arr.length===0 || arr.pop() !== ']') return false
  //       break
  //     }
  //     case '}':{
  //       if (arr.length===0 || arr.pop() !== '}') return false
  //       break
  //     }
  //   }
  // }
  // return arr.length === 0


  let arr = []
  let bracketMap = new Map([[')','('],[']','['],['}','{']])
  console.log(bracketMap);
  for (let i = 0; i < s.length; i++) {
    if (bracketMap.has(s[i])){
      if (arr.length===0 || arr.pop()!=bracketMap.get(s[i])) return false
    }else {
      arr.push(s[i])
    }
  }
  return arr.length === 0
};

