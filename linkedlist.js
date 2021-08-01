class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  insert(value) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }
  remove() {}
  removeTail() {
    // TODO: Traverse till node just before tail
    // TODO: make next null and reassign tail to this object
    let node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    node.next = null;
    delete this.tail;
    this.tail = node;
  }
  isHead(node) {
    return node === this.head;
  }
  isTail(node) {
    return node === this.tail;
  }
  traverse() {
    let node = this.head;
    while (node.next) {
      console.log(node.value);
      node = node.next;
      if (node.next === null) {
        console.log(node.value);
      }
    }
  }
  reverseTraverse() {
    let currentNode = this.head;
    const values = [];
    while (currentNode.next !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    values.push(currentNode.value);
    return values.reverse();
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode.value === value;
  }
}

const list = new LinkedList(4);
list.insert(5);
list.insert(7);
list.insert(8);
list.traverse();
// console.log(list.head, list.tail);
// list.removeTail();
// list.traverse();
// console.log(list.head, list.tail);
// console.log(list.contains(8));
console.log(list.reverseTraverse());
