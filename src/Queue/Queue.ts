import ThrowError from "../Error";
import LinkedList, { Node } from "../LinkedList";

export default class Queue<T> {
  list: LinkedList<T>;
  /**
   * @name constructor
   * @description create a Stack with the given node
   *
   * @param  {Node}  node
   *
   * @returns {Queue}
   */
  constructor(node: Node<T> | null) {
    this.list = new LinkedList(node);
  }

  /**
   * @name enqueue
   * @description enqueue a value to the queue
   *
   * @param  {T}  val
   *
   * @returns {boolean}
   */
  enqueue(val: T): boolean {
    return this.list.pushFront(val);
  }

  /**
   * @name dequeue
   * @description dequeue (return and delete) the last element enqueued to the queue
   *
   *
   * @returns {T}
   */
  dequeue() {
    if (this.isEmpty()) return null;
    return this.list.delete(this.list.length);
  }

  /**
   * @name peek
   * @description peek, return the last element enqueued to the queue
   *
   *
   * @returns {T}
   */
  peek() {
    return this.isEmpty() ? null : this.list.head!.val;
  }

  /**
   * @name isEmpty
   * @description check the queue if it's empty
   *
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.list.isEmpty();
  }

  /**
   * @name isFull
   * @description check if the queue is full
   *
   *
   * @returns {boolean}
   */
  isFull(): never {
    throw new ThrowError(
      "NotDefined",
      "isFull, not defined since there's no limit to the Queue"
    );
  }

  /**
   * @name display
   * @description display the queue
   */
  display(): void {
    this.list.display();
  }
}
