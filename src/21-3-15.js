/**
 * 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。
 * 使用链表实现
 请你完成 FrontMiddleBack 类：
 FrontMiddleBack() 初始化队列。
 void pushFront(int val) 将 val 添加到队列的 最前面 。
 void pushMiddle(int val) 将 val 添加到队列的 正中间 。
 void pushBack(int val) 将 val 添加到队里的 最后面 。
 int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：

 将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
 从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。
 * @constructor
 */
var FrontMiddleBackQueue = function() {
  this.container = null
  this.head = this.center = this.tail = this.container
  this.count = 0
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  let data = {
    pre: null,
    data: val,
    next: null
  }

  if (this.count) {
    this.container.pre = data
    data.next = this.container
    this.head = this.container = data
  }else {
    this.head = this.tail = this.center = this.container = data
  }
  this.count++
  if (this.count % 2 === 1 && this.count !== 1) {
    this.center = this.center.pre
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  let data = {
    pre: null,
    data: val,
    next: null
  }
  if (this.count){
    data.next = this.center
    data.pre = this.center.pre
    this.center.pre = data
    data.pre.next = data
  }else {
    this.head = this.tail = this.center = this.container = data
  }
  this.count++
  if (this.count % 2 === 1 && this.count !== 1) {
    this.center = this.center.pre
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  let data = {
    pre: null,
    data: val,
    next: null
  }
  if (this.count){
    data.pre = this.tail
    this.tail.next = data
    this.tail = data
  }else {
    this.head = this.tail = this.center = this.container = data
  }
  this.count++
  if (this.count % 2 === 0 && this.count !== 1) {
    this.center = this.center.next
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  let value = -1
  if (this.count) {

    this.count--
    this.container = this.head.next
    value = this.head.data
    this.head = this.container
    this.head && (this.head.pre = null)

    if (this.count % 2 === 0 && this.count!==0) {
      this.center = this.center.next
    }
  }

  return value
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  let value = -1
  if (this.count) {
    this.count--
    if (this.count % 2 === 0) {
    }else {
      value = this.center.pre.data
    }
  }
  return value
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  let value = -1

  if (this.count) {
    this.count--
    value = this.tail.data
    this.tail = this.tail.pre
    this.tail && (this.tail.next = null)
    if (this.count % 2 === 0 && this.count!==0) {
      this.center = this.center.pre
    }
  }
  return value
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

let q = new FrontMiddleBackQueue()
console.log(q.pushFront(1))   // [1]
console.log(q.pushBack(2))    // [1, 2]
console.log(q.pushBack(3))    // [1, 2]
console.log(q.pushBack(4))    // [1, 2,3,4]
console.log(q)
console.log(q.popMiddle())      // 返回 2 -> [1,3,4]
console.log(q.popMiddle())      // 返回 3 -> [1,4]
console.log(q.popMiddle())      // 返回 1 -> [4]
console.log(q.popMiddle())      // 返回 4 -> []


// console.log(q.pushFront(1))   // [1]
// console.log(q.pushBack(2))    // [1, 2]
// console.log(q.pushMiddle(3))  // [1, 3, 2]
// console.log(q.pushMiddle(4))  // [1, 4, 3, 2]
// console.log(q.popFront());     // 返回 1 -> [4, 3, 2]
// console.log(q.popMiddle())    // 返回 3 -> [4, 2]
// console.log(q.popMiddle())    // 返回 4 -> [2]
// console.log(q.popBack())      // 返回 2 -> []
// console.log(q.popFront())     // 返回 -1 -> [] （队列为空）
