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
 * 206
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) return head
  let newListNode = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newListNode

  // let changeNode = head
  // while (changeNode){
  //   const next = changeNode.next
  //   changeNode.next = newListNode
  //   newListNode = changeNode
  //   changeNode = next
  // }
  // return newListNode

};

console.log(reverseList(createList([1, 2, 3, 4, 5])))
console.log(reverseList(createList([1, 2])))
