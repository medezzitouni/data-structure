
class Node{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(node){
        this.head = node;
        this.length = 0;
        this.tail = node;
    }
    instertTo(val, index){

        if(index >= this.length){
            this.insertToTail(val, index)
            return;
        }

        if(index == 0){
            this.insertToHead(val, index);
            return;
        }

        let tarverse = this.head;
        let i = 0;

        while(!tarverse.next || i == index){
            tarverse = tarverse.next;
            i++;
        }
        if(i == index){
            let tmp = tarverse.next
            tarverse.next = new Node(val, tmp);
        } 

        this.length++;
    }
    insertToHead(val, index){

        if(index != 0) return;

        this.head = new Node(val, this.head);
        this.length++;
    }
    insertToTail(val, index){

        if(index < this.length) return;

        this.tail.next = new Node(val, null);
        this.tail = this.tail.next;
        this.length++;
    }
}