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
  removeTail() {}
  isHead() {}
  isTail() {}
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
}

const list = new LinkedList(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.traverse();
console.log(list.head, list.tail);
