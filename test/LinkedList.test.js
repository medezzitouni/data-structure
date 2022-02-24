import LinkedList, { Node } from "../src/LinkedList";


describe('instert', () => {

    let val = 120;
    let initiated_value = 8;
    let key = 1;
    test('insertToHead: the value got inserted into the head', () =>{
        let list = new LinkedList(new Node(initiated_value, null))
        list.insertToHead(val);
        expect(list.head.val).toBe(val);
        expect(list.tail.val).toBe(initiated_value);

    })

    test('insertToTail: the value got inserted into the tail', () =>{
        let list = new LinkedList(new Node(initiated_value, null))
        list.insertToTail(val);
        expect(list.head.val).toBe(initiated_value);
        expect(list.tail.val).toBe(val);
        
    })

    test('insertTo: the value got inserted into the head', () =>{
        let list = new LinkedList(new Node(initiated_value, null));
        list.insertTo(val, key);
        expect(list.head.val).toBe(val);
        expect(list.tail.val).toBe(initiated_value);
        
    })

    test('search: the right value got returned', () =>{
        let list = new LinkedList(new Node(initiated_value, null));
        let vals = [1, 12, 9, 7]
        for(let i of vals){
           list.insertToTail(i);
        }
     
        expect(list.search(0).val).toBe(undefined);
        expect(list.search(1).val).toBe(initiated_value);
        expect(list.search(list.length).val).toBe(vals[vals.length-1]);
        expect(list.search(list.length+123).val).toBe(vals[vals.length-1]); // if you give a key that it's greater than the list's length, the function should return the tail's value

        expect(list.search(3).val).toBe(12);
        expect(list.search(4).val).toBe(9);

        
    })

    test('insertTo: the value got inserted at the index provided', () =>{

        let list = new LinkedList(new Node(initiated_value, null));
        let second_val = 13390

        list.insertTo(second_val, list.length);
        list.insertTo(val, list.length);
        expect(list.tail.val).toBe(val);

        list.insertTo(second_val, list.length+10);
        expect(list.tail.val).toBe(second_val);

        
        list.insertTo(290, 2);
        expect(list.search(2).val).toBe(290);

        list.insertTo(294, 4);
        expect(list.search(4).val).toBe(294);
    })

    test('delete: the right value got deleted', () =>{
        let list = new LinkedList(new Node(initiated_value, null));
        let vals = [1, 12, 9, 7]
        for(let i of vals){
           list.insertToTail(i);
        }

        // delete the first element
        let old_length = list.length;
        expect(list.delete(1)).toBe(true);
        expect(list.search(1).val).toBe(vals[0]);
        expect(list.length).toBe(old_length-1);

        // give a key that's greater than the list's length
        old_length = list.length
        expect(list.delete(5)).toBe(false);
        expect(list.length).toBe(old_length);

        expect(list.delete(3)).toBe(true);
        expect(list.search(3).val).toBe(vals[vals.length-1]);
        expect(list.length).toBe(old_length-1);



        
    })
})