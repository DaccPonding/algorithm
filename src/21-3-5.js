function ListNode (val) {
  // 数据域
  this.val = val
  // 指针域
  this.next = null
}

// 创建链表
function createList (arr, pos) {
  let head = null
  let p = head
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      p = head = new ListNode(arr[i])
    }else {
      p.next = new ListNode(arr[i])
      p = p.next
    }
  }
  pos >=0 && (p.next = getNode(head, pos))
  return head
}

function getNode (listNode, num) {
  if (num === 0 || listNode === null) return listNode
  return getNode(listNode.next, num-1)
}

/**
 * 141
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 空链表和单节点链表
  if (head === null || head.next === null) return false
  // p 慢指针 q快指针
  // let p = q = head
  // do {
  //   p = p.next
  //   q = q.next.next
  // }
  // while (p!== q && q && q.next)
  // return p === q

  let p = head ,q = head.next
  while (p!==q && q && q.next) {
    p = p.next
    q = q.next.next
  }
  return p === q
};
let a = createList([3,2,0,-4],1)

console.log(hasCycle(a))
// console.log(hasCycle(main([1],-1)))
// console.log(hasCycle(main([1,2],-1)))

/**
 * 142
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) return null
  let p = q = head
  do {
    p = p.next
    q = q.next.next
  } while (p!== q && q && q.next)
  if (p !== q) return null
  p = head
  while (p!==q){
    p = p.next
    q = q.next
  }
  return q
};
console.log(detectCycle(createList([3, 2, 0, -4], 1)))
// console.log(detectCycle(createList([1, 2], 0)))
// console.log(detectCycle(createList([1], -1)))
