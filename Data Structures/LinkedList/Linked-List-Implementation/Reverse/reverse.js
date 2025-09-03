const LinkedList = require('../LinkedList');

function printExample(values) {
  const list = new LinkedList();
  values.forEach(v => list.add(v));

  console.log('Original List:', list.printList());
  list.reverse();
  console.log('Reversed List:', list.printList());
  console.log('---');
}

// Example 1: multi-node
printExample([1, 2, 3, 4]);

// Example 2: single node
printExample([10]);

// Example 3: empty list
const empty = new LinkedList();
console.log('Original List:', empty.printList());
empty.reverse();
console.log('Reversed List:', empty.printList());

module.exports = LinkedList;
