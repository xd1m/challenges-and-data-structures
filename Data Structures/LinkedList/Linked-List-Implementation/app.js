// app.js
const LinkedList = require('./LinkedList');

const list = new LinkedList();
list.add(5).add(10).add(20).add(30);
console.log(list.printList()); // Head -> 5 -> 10 -> 20 -> 30 -> Null

list.remove(10);
console.log(list.printList()); // Head -> 5 -> 20 -> 30 -> Null

console.log(list.includes(20)); // true
console.log(list.includes(100)); // false

list.insertAt(15, 2);
console.log(list.printList()); // Head -> 5 -> 20 -> 15 -> 30 -> Null
