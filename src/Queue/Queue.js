import LinkedList, { Node } from "../LinkedList";


export default class Queue{
    /**
     * @name constructor
     * @description create a Stack with the given node
     *    
     * @param  {Node}  node 
     * 
     * @returns {Queue}
     */
    constructor(node){
        this.list = new LinkedList(node);
        this.length = 1;
    }

    /**
     * @name enqueue
     * @description enqueue a value to the queue
     *    
     * @param  {any}  val 
     * 
     * @returns {boolean}
     */
     enqueue(val){
       try {
          this.list.insertToHead(val);
          return true;
       } catch (error) {
           console.log('Error: ', error);
            return false;
       }
    }

    /**
     * @name dequeue
     * @description dequeue (return and delete) the last element enqueued to the queue
     *
     * 
     * @returns {any}
     */
     dequeue(){
        if(this.isEmpty()) return null;
        let ret = this.list.last.val;
        this.list.delete(this.length);
        return ret;
    }

    /**
     * @name peek
     * @description peek, return the last element enqueued to the queue
     *   
     * 
     * @returns {any}
     */
    peek(){
        return this.isEmpty() ? null : this.list.last.val;
    }

     /**
     * @name isEmpty
     * @description check the queue if it's empty
     *   
     * 
     * @returns {boolean}
     */
    isEmpty(){
        return !this.list.head && !this.list.length
    }

     /**
     * @name isFull
     * @description check if the queue is full 
     *   
     * 
     * @returns {boolean}
     */
    isFull(){
        // we don't have a limit for the number of elemements we can push to the queue.
    }

     /**
     * @name display
     * @description display the queue 
     */
    display(){
        this.list.display()
    }

}