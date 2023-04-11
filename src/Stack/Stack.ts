import ThrowError from "../Error";
import LinkedList, { Node } from "../LinkedList";

export default class Stack<T> {
  private _list: LinkedList<T>;

  /**
   * @name constructor
   * @description create a Stack with the given node
   *
   * @param  {Node}  node
   *
   * @returns {Stack}
   */
  constructor(node: Node<T> | null) {
    this._list = new LinkedList(node);
  }

  get list(){
    return this._list;
  }
  /**
   * @name push
   * @description push a value to the stack
   *
   * @param  {T}  val
   *
   * @returns {boolean}
   */
  push(val: T): boolean {
    return this._list.pushFront(val);
  }

  /**
   * @name pop
   * @description pop (return and delete) the last element pushed to the stack
   *
   *
   * @returns {any}
   */
  pop() {
    if (this.isEmpty()) return null;
    return this._list.delete(1);
  }

  /**
   * @name peek
   * @description peek, return the last element pushed to the stack
   *
   *
   * @returns {any}
   */
  peek() {
    return this.isEmpty() ? null : this._list.head!.val;
  }

  /**
   * @name isEmpty
   * @description check the stack if it's empty
   *
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this._list.isEmpty();
  }

  /**
   * @name isFull
   * @description check if it's full
   *
   *
   * @returns {boolean}
   */
  isFull(): never {
    throw new ThrowError(
      "NotDefined",
      "isFull, not defined since there's no limit to the Stack"
    );
  }

  /**
   * @name display
   * @description display the stack
   */
  display(): void {
    this._list.display();
  }
}
