const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  remove(data) {
    if (!this.head) {
      throw new Error('Cannot remove from an empty list');
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.length--;
      return true;
    }
    throw new Error('Value not found in list');
  }

  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.length) {
      throw new RangeError('Index out of bounds');
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return this;
  }

  printList() {
    let parts = ['Head'];
    let current = this.head;
    while (current) {
      parts.push(String(current.data));
      current = current.next;
    }
    parts.push('Null');
    return parts.join(' -> ');
  }
}

module.exports = LinkedList;
