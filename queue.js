/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this._storage = {};
    this._tail = -1;
    this._head = -1;
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    if (this._tail === -1 && this._head === -1) {
      this._storage[++this._tail] = value;
      this._head = this._head + 1;
      return value;
    }
    this._storage[++this._tail] = value;
    return value;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    if (this._head === this._tail) {
      const returnValue = this._storage[this._head];
      delete this._storage[this._head];
      this._head = this._tail = -1;
      return returnValue;
    }
    if (this._head < this._tail) {
      const returnValue = this._storage[this._head];
      delete this._storage[this._head];
      this._head++;
      return returnValue;
    }
    return undefined;
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    return this._storage[this._tail];
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
console.log({ queue });
queue.dequeue();
queue.dequeue();
console.log({ queue });
console.log(queue.peek());
