
const LinkedList = require("../Reverse/reverse");

describe('LinkedList.reverse()', () => {
  test('reverses a non-empty list (1->2->3 becomes 3->2->1)', () => {
    const list = new LinkedList();
    [1,2,3].forEach(v => list.add(v));
    list.reverse();
    expect(list.printList()).toBe('Head -> 3 -> 2 -> 1 -> Null');
    expect(list.length).toBe(3);
  });

  test('reversing a single-node list leaves it unchanged', () => {
    const list = new LinkedList();
    list.add(10);
    list.reverse();
    expect(list.printList()).toBe('Head -> 10 -> Null');
    expect(list.length).toBe(1);
  });

  test('reversing an empty list keeps it empty (Head -> Null)', () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.printList()).toBe('Head -> Null');
    expect(list.length).toBe(0);
  });

  test('reversing a list with duplicate values preserves correct reversed order', () => {
    const list = new LinkedList();
    [2,2,3,3,2].forEach(v => list.add(v));
    list.reverse();
    expect(list.printList()).toBe('Head -> 2 -> 3 -> 3 -> 2 -> 2 -> Null');
    expect(list.length).toBe(5);
  });
});
