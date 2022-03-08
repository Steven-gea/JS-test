class List {
    constructor(value) {
      this.value = value;
    //   this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }

  
    push(value) {
      const newNode = new List(value);
      if (!this.length) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
  
    pop() {
      if (!this.length) {
        return null;
      } else {
        let currentNode = this.head;
        let secondToLastNode = this.head;
        while (currentNode.next) {
          secondToLastNode = currentNode;
          currentNode = currentNode.next;
        }
        secondToLastNode.next = null;
        this.tail = secondToLastNode;
        this.length -= 1;
        if (!this.length) {
          this.head = null;
          this.tail = null;
        }
        return currentNode;
      }
    }

    size(){
        return this.length;
    }
  }


    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    console.log(stack.pop())
    console.log(stack.size())