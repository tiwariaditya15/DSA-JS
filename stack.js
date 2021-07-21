// class Stack {
//   constructor (size) {
//     this._storage = []
//     this.MAX = size;
//     this.top = -1;
//   }

//   pop() {
//     if (!this.isEmpty()) {
//       const val = this._storage[this.top];
//       this.top -= 1;
//       console.log("Popped.");
//       return val;
//     }
//     console.log(`Stack is empty`);
//   }

//   isEmpty() {
//     return this.top < 0;
//   }

//   isFull() {
//     return this.top === this.MAX - 1;
//   }

//   push(value) {
//     if (!this.isFull()) {
//       this._storage[++this.top] = value;
//       return console.log("Pushed.", this.top);
//     }
//     console.log("Stack is full.");
//   }
// }

// const stack = new Stack(5);

// stack.push(1);
// stack.push(1);
// stack.push(1);
// stack.push(1);
// stack.push(1);
// stack.push(1);
// console.log(stack._storage);
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack._storage);

class Stack {
  constructor() {
    this._storage = {};
    this._length = -1;
  }

  push(value) {
    this._storage[++this._length] = value;
    return value;
  }

  pop() {
    if (this._length >= 0) {
      const retValue = this._storage[this._length];
      delete this._storage[this._length];
      this._length--;
      return retValue;
    }
    return undefined;
  }

  peak() {
    if (this._length >= 0) {
      return this._storage[this._length];
    }
    return undefined;
  }
}

const stack = new Stack();
stack.push(5);
// console.log({ stack });
stack.push(8);
// console.log({ stack });
// stack.pop();
// console.log({ stack });
console.log(stack.peak());
// console.log({ stack });
