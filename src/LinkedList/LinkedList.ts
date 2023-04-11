import ThrowError from "../Error";
import Node from "./Node";

export default class LinkedList<T> {
  length: number = 0;
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;

  /**
   * @name constructor
   * @description create a LinkedList with the given node
   *
   * @param  {Node} node
   *
   * @returns {LinkedList}
   */
  constructor(node: Node<T> | null) {
    this._head = node;
    this._tail = node;
    if (node) this.length++;
  }

  public get head() {
    return this._head;
  }

  public get tail() {
    return this._tail;
  }
  /**
   * @name instertTo
   * @description Instert the value into the List at the specific index given
   *
   * @param   {T} val
   * @param  {number} index
   */
  insertTo(val: T, index: number): boolean {
    if ((!this._head && !this.length) || index == 1) {
      this.pushFront(val);
      return true;
    }

    if (index >= this.length) {
      this.pushBack(val);
      return true;
    }

    let iter: Node<T> = this._head!;
    let i = 1;

    while (iter.next && i != index - 1) {
      iter = iter.next;
      i++;
    }

    if (i == index - 1) {
      let tmp = iter.next;
      iter.next = new Node(val, tmp);
      this.length++;
      return true;
    }

    return false;
  }

  /**
   * @name pushFront
   * @description Instert the value into the Head of the List
   *
   * @param   {T} val
   * @param  {number} index
   */
  pushFront(val: T): boolean {
    if (!this._head && !this.length)
      this._head = this._tail = new Node(val, null);
    else 
      this._head = new Node(val, this._head);
    this.length++;
    return true;
  }

  /**
   * @name pushBack
   * @description Instert into the Tail of the List
   *
   * @param   {T} val
   * @param  {number} index
   */
  pushBack(val: T) {
    if (!this._head && !this.length)
      this._head = this._tail = new Node(val, null);
    else {
      this._tail!.next = new Node(val, null);
      this._tail = this._tail!.next;
    }
    this.length++;
  }

  /**
   * @name search
   * @description Find the first element with the key.
   *
   * @param   {number} key
   *
   * @returns  {Node | never}
   */
  search(key: number) {
    if (!key)
      throw new ThrowError(
        "KeyError",
        `key = ${key} does't exist, LinkedList starts at 1`
      );

    if (!this._head) throw new ThrowError("EmptyError", "The List is empty");

    if (key >= this.length) return this._tail;
    if (key == 1) return this._head;

    let iter: Node<T> = this._head;
    let i = 1;

    while (iter.next && i != key) {
      iter = iter.next;
      i++;
    }

    return iter && i == key ? iter : null;
  }

  /**
   * @name delete
   * @description Delete the first element with the key.
   *
   * @param   {int} key
   *
   * @returns  {boolean}
   */
  delete(key: number): T | null {
    let val: T | null = null;

    if (!this._head)
      throw new ThrowError("EmptyListError", "The List is empty");

    if (key > this.length)
      throw new ThrowError(
        "KeyError",
        `key = ${key} does't exist, LinkedList starts at 1`
      );

    if (key == 1) {
      val = this._head.val;
      this._head = this._head.next;
      this.length--;
      if (this.length <= 1) this._tail = this._head;
      return val;
    }

    let iter: Node<T> = this._head;
    let i = 1;

    while (iter.next && i != key - 1) {
      iter = iter.next;
      i++;
    }

    if (iter) {
      val = iter.next?.val ?? null;
      iter.next = iter.next?.next ?? null;
      if (!iter.next) this._tail = iter;
      this.length--;
      return val;
    }

    return null;
  }

  /**
   * @name display
   * @description display all List's elements.
   *
   * @returns  {void}
   */
  display() {
    if (!this._head) console.log(null);

    let tmp: Node<T> | null = this._head;
    while (tmp) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
  }

  /**
   * @name array
   * @description converts the linkedList to an array.
   *
   * @returns  {Node<T>[]}
   */
  array(): T[] {
    if (!this._head) return [];

    let arr: T[] = [];

    let tmp: Node<T> | null = this._head;
    while (tmp) {
      arr.push(tmp.val);
      tmp = tmp.next;
    }

    return arr;
  }

  /**
   * @name isEmpty
   * @description check the List if it's empty
   *
   *
   * @returns {boolean}
   */
  isEmpty() {
    return !this._head && !this.length;
  }
}
