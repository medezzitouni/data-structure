import LinkedList, { Node } from "../LinkedList";


export default class Stack{
    /**
     * @name constructor
     * @description create a Stack with the given node
     *    
     * @param  {Node}  node 
     * 
     * @returns {Stack}
     */
    constructor(node){
        this.list = new LinkedList(node);
        this.length = 1;
    }

    /**
     * @name push
     * @description push a value to the satck
     *    
     * @param  {any}  val 
     * 
     * @returns {boolean}
     */
    push(val){
       try {
          this.list.insertToHead(val);
          return true;
       } catch (error) {
           console.log('Error: ', error);
            return false;
       }
    }

    pop(){
        if(this.isEmpty()) return null;
        let ret = this.list.head.val;
        this.list.delete(1);
        return ret;
    }
    peek(){
        return this.isEmpty() ? null : this.list.head.val;
    }
    isEmpty(){
        return !this.list.head && !this.list.length
    }
    isFull(){
        // we don't have a limit for the number of elemements we can push to the stack.
    }
    display(){
        this.list.display()
    }

}