import { Node } from "../LinkedList";
import Queue from ".";

describe("Queue", () => {
  let initial_value = 14;
  let pushed_value = 1545;
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue(new Node(initial_value));
  });

  test("enqueue", () => {
    expect(queue.enqueue(pushed_value)).toBe(true);
  });

  test("peek", () => {
    expect(queue.peek()).toBe(initial_value);
    queue.dequeue();
    expect(queue.peek()).toBe(null);
  });

  test("dequeue", () => {
    expect(queue.dequeue()).toBe(initial_value);
    expect(queue.peek()).toBe(null);
    expect(queue.dequeue()).toBe(null);


    queue.enqueue(3);
    queue.enqueue(7);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(3);
    expect(queue.list.tail?.val).toBe(7);
  });
});
