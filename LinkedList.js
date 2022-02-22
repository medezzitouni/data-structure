import Node from './Node'
export default class LinkedList{

    /**
     * @name constructor
     * @description create a LinkedList with the given node
     *    
     * @param  {Node}   node 
     * 
     * @returns {LinkedList}
     */
    constructor(node){
        this.head = node;
        this.length = 1;
        this.tail = node;
    }

    /**
     * @name instertTo
     * @description Instert the value into the List at the specific index given
     * 
     * @param   {*}    val     
     * @param  {int}   index 
     */
    instertTo(val, index){

        if(index >= this.length){
            this.insertToTail(val)
            return;
        }

        if(index == 1){
            this.insertToHead(val);
            return;
        }

        let traverse = this.head;
        let i = 1;

        while(traverse.next || i != index-1){
            traverse = traverse.next;
            i++;
        }

        if(i == index-1){
            let tmp = traverse.next
            traverse.next = new Node(val, tmp);
            this.length++;
        } 

    }

    /**
     * @name insertToTail
     * @description Instert the value into the Head of the List
     * 
     * @param   {*}    val     
     * @param  {int}   index 
     */
    insertToHead(val){
        this.head = new Node(val, this.head);
        this.length++;
    }

    /**
     * @name insertToTail
     * @description Instert into the Tail of the List
     * 
     * @param   {*}    val     
     * @param  {int}   index 
     */
    insertToTail(val){
        this.tail.next = new Node(val, null);
        this.tail = this.tail.next;
        this.length++;
    }

    /**
     * @name search 
     * @description Find the first element with the key.
     *
     * @param   {int} key 
     *     
     * @returns  {Node}
     */
    search(key){

        let traverse = this.head;
        let i = 1;

        if (key >= this.length) return this.tail;
        if (key == 1) return this.head;

        while(traverse.next || i != key){
            traverse = traverse.next;
            i++;
        }

        return traverse && i == k ? traverse : null;
    }
}