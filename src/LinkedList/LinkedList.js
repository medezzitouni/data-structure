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
    insertTo(val, index){

        if(!this.head && !this.length){
            this.insertToHead(val);
            return;
        }
        if(index > 1 && index >= this.length){
            this.insertToTail(val)
            return;
        }

        if(index == 1){
            this.insertToHead(val);
            return;
        }

        let traverse = this.head;
        let i = 1;

        while(traverse.next && i != index-1){
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
        if(val == undefined || val == null) throw 'This function accept 1 arg'
        if(!this.head && !this.length)
            this.head = this.tail = new Node(val, null);    
        else
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
        if(!this.head && !this.length) {
            this.insertToHead(val);
            return;
        }
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

        if (key == 0){
            console.log(`the key provided does't exist, the List starts with the index = 1 not 0`);
            return {};
        }

        let traverse = this.head;
        let i = 1;
        
        if (key >= this.length) return this.tail;
        if (key == 1) return this.head;

        
        while(traverse.next && i != key){
            traverse = traverse.next;
            i++;
        }

        return traverse && i == key ? traverse : null;
    }

    /**
     * @name delete 
     * @description Delete the first element with the key.
     *
     * @param   {int} key 
     *     
     * @returns  {boolean}
     */
    delete(key){

        if(this.length == 0) throw 'the list is empty'

        if (key > this.length){
            console.log(`the key provided does't exist, it exceeds the List length ${this.length}`);
            return false;
        }

        if (key == 1) {
            this.head = this.head.next ? this.head.next : null;
            this.length--;
            return true;
        };

        let traverse = this.head;
        let i = 1;

        while(traverse.next && i != key-1){
            traverse = traverse.next;
            i++;
        }

        if(traverse){
            traverse.next = traverse.next.next;
            this.length--;
            return true;
        }
        return false;

    } 

    /**
     * @name display 
     * @description display all List's elements.
     *     
     * @returns  {void}
     */    
    display(){
        let tmp = this.head;
        while(tmp){
            console.log(tmp.val);
            tmp = tmp.next;
        }
    }
}