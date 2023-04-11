import LinkedList, { Node } from ".";

describe("LinkedList", () => {
  let initiated_value = 8;
  let val = 120;
  let node: Node<number>;
  let list: LinkedList<number>;

  beforeEach(() => {
    node = new Node(initiated_value);
    list = new LinkedList(node);
  });

  test("pushFront", () => {
    list.pushFront(val);
    expect(list.head!.val).toBe(val);
    expect(list.tail!.val).toBe(initiated_value);
  });

  test("pushBack", () => {
    list.pushBack(val);
    expect(list.head!.val).toBe(initiated_value);
    expect(list.tail!.val).toBe(val);
  });

  test("insertTo", () => {
    list.insertTo(val, 1);
    expect(list.head!.val).toBe(val);
    expect(list.tail!.val).toBe(initiated_value);
  });

  test("search", () => {
    let values: number[] = [1, 12, 9, 7];

    for (let i of values) {
      list.pushBack(i);
    }

    expect(() => list.search(0)).toThrow();
    expect(list.search(1)!.val).toBe(initiated_value);
    expect(list.search(list.length)!.val).toBe(values[values.length - 1]);
    expect(list.search(list.length + 123)!.val).toBe(values[values.length - 1]);

    expect(list.search(3)!.val).toBe(12);
    expect(list.search(4)!.val).toBe(9);
  });

  test("insertTo", () => {
    let second_val: number = 13390;

    list.insertTo(second_val, list.length);
    list.insertTo(val, list.length);
    expect(list.tail!.val).toBe(val);

    list.insertTo(second_val, list.length + 10);
    expect(list.tail!.val).toBe(second_val);

    list.insertTo(290, 2);
    expect(list.search(2)!.val).toBe(290);

    list.insertTo(294, 4);
    expect(list.search(4)!.val).toBe(294);
  });

  test("delete", () => {
    
    // test empty
    expect(list.delete(1)).toBe(initiated_value);
    expect(() => list.delete(1)).toThrow();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    
    let values = [initiated_value, 1, 12, 9, 7];
    
    for (let i of values) {
        list.pushBack(i);
    }

    let previous_length = list.length;

    expect(list.delete(1)).toBe(8);
    expect(list.search(1)!.val).toBe(values[1]);
    expect(list.length).toBe(previous_length - 1);

    previous_length = list.length;
    expect(() => list.delete(5)).toThrow();
    expect(list.length).toBe(previous_length);
    
    expect(list.delete(3)).toBe(9);
    expect(list.search(3)!.val).toBe(values[values.length - 1]);
    expect(list.length).toBe(previous_length - 1);
  });
});
