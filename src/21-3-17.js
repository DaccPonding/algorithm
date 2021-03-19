/**
 * 设计实现双端队列。
 你的实现需要支持以下操作：

 MyCircularDeque(k)：构造函数,双端队列的大小为k。
 insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
 insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
 deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
 deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
 getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
 getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
 isEmpty()：检查双端队列是否为空。
 isFull()：检查双端队列是否满了。
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.container = new Array(k)
  this.head = 0
  this.tail = 0
  this.count = 0
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  this.container[this.head] = value
  this.count++
  if (this.head === this.tail && this.count < this.container.length) {
    this.tail = (this.tail + 1) % this.container.length
  }
  this.head = this.head === 0 ? this.container.length - 1 : this.head - 1
  return true
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  this.container[this.tail] = value
  this.count++
  if (this.head === this.tail && this.count < this.container.length) {
    this.head = this.head === 0 ? this.container.length - 1 : this.head - 1
  }
  this.tail = (this.tail + 1) % this.container.length
  return true
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.count--
  this.head = (this.head + 1) % this.container.length
  return true
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.count--
  this.tail = this.tail === 0 ? this.container.length - 1 : this.tail - 1
  return true
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() && -1 || this.container[(this.head + 1) % this.container.length]
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() && -1 || this.container[this.tail === 0 ? this.container.length - 1 : this.tail - 1]
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.count === this.container.length
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
let circularDeque = new MyCircularDeque(3) // 设置容量大小为3
console.log(circularDeque.insertLast(1))			        // 返回 true
console.log(circularDeque.insertLast(2))			        // 返回 true
console.log(circularDeque.insertFront(3))			        // 返回 true
console.log(circularDeque.insertFront(4))			        // 已经满了，返回 false
console.log(circularDeque.getRear())  				// 返回 2
console.log(circularDeque.isFull())				        // 返回 true
console.log(circularDeque.deleteLast())			        // 返回 true
console.log(circularDeque.insertFront(4))			        // 返回 true
console.log(circularDeque.getFront())				// 返回 4
