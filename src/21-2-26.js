class Node {
  constructor(data) {
    this.data = data
    this.subNode = null
  }


}



let data = new Array(10)
let next = new Array(10)
// ind 节点地址 下一个节点的地址 数据值
const add = (ind, p, value) => {
  next[p] = next[ind]
  next[ind] = p
  data[p] = value
}
function main(){
  let head = 3
  data[head] = 0
  add(3, 5, 1)
  add(5,2,2)
  add(2,7,3)
  add(7,8,100)
  add(2,6,10)
  let p = head
  while (p!==undefined){
    console.log(p,'节点',data[p],'当前节点的值');
    p = next[p]
    console.log(p,'下一个节点的地址');
  }
  console.log(p);
}

main()