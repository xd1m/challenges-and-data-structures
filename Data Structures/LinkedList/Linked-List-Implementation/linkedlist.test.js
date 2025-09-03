// linkedlist.test.js
const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  test('add() appends nodes to the end', () => {
    const list = new LinkedList();
    list.add(1).add(2).add(3);
    expect(list.printList()).toBe('Head -> 1 -> 2 -> 3 -> Null');
    expect(list.length).toBe(3);
  });

  test('remove() removes a node by value (first occurrence)', () => {
    const list = new LinkedList();
    list.add(1).add(2).add(3).add(2);
    const removed = list.remove(2);
    expect(removed).toBe(true);
    expect(list.printList()).toBe('Head -> 1 -> 3 -> 2 -> Null');
    expect(list.length).toBe(3);
  });

  test('printList() on empty list', () => {
    const list = new LinkedList();
    expect(list.printList()).toBe('Head -> Null');
  });

  test('includes() finds existing values', () => {
    const list = new LinkedList();
    list.add(5).add(10);
    expect(list.includes(5)).toBe(true);
    expect(list.includes(42)).toBe(false);
  });

  test('insertAt() inserts at a specific index', () => {
    const list = new LinkedList();
    list.add(5).add(10).add(30);
    list.insertAt(20, 2);
    expect(list.printList()).toBe('Head -> 5 -> 10 -> 20 -> 30 -> Null');
    expect(list.length).toBe(4);
  });

  test('remove() throws on empty list', () => {
    const list = new LinkedList();
    expect(() => list.remove(1)).toThrow('Cannot remove from an empty list');
  });

  test('remove() throws when value not found', () => {
    const list = new LinkedList();
    list.add(1).add(2).add(3);
    expect(() => list.remove(100)).toThrow('Value not found in list');
  });

  test('insertAt() throws when index > length', () => {
    const list = new LinkedList();
    list.add(1);
    expect(() => list.insertAt(2, 3)).toThrow('Index out of bounds');
  });

  test('insertAt() at head (index 0)', () => {
    const list = new LinkedList();
    list.add(2).add(3);
    list.insertAt(1, 0);
    expect(list.printList()).toBe('Head -> 1 -> 2 -> 3 -> Null');
  });
});
