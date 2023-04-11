import { Node } from "../LinkedList";
import Stack from ".";

describe("Stack", () => {
  let initial_value = 14;
  let pushed_value = 1545;
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack(new Node(initial_value));
  })

  test("push", () => {
    expect(stack.push(pushed_value)).toBe(true);
  });

  test("peek", () => {
    expect(stack.peek()).toBe(initial_value);
    stack.pop();
    expect(stack.peek()).toBe(null);
  });

  test("pop", () => {
    let prev_length = stack.list.length;

    expect(stack.pop()).toBe(initial_value);
    expect(stack.list.tail).toBe(null);
    expect(stack.peek()).toBe(null);
    expect(stack.pop()).toBe(null);

    stack.push(3);
    stack.push(7);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.list.head?.val).toBe(7);
    
  });
});
