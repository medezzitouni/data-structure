import { Node } from "../src/LinkedList";
import Stack from "../src/stack";


describe('Stack', () => {
    let initial_value = 14;
    let pushed_value = 1545;

    test('enqueue is working 😂 ', () => {

        let stack = new Stack(new Node(initial_value));

        expect(stack.enqueue()).toBe(false)
        expect(stack.enqueue(null)).toBe(false)
        expect(stack.enqueue(pushed_value)).toBe(true)
    })

    test('peek is working 😂 ', () => {

        let stack = new Stack(new Node(initial_value));

        expect(stack.peek()).toBe(initial_value)
        stack.dequeue();
        expect(stack.peek()).toBe(null)
    })

    test.only('dequeue is working 😂 ', () => {
        
        let stack = new Stack(new Node(initial_value));

        expect(stack.dequeue()).toBe(initial_value)
        expect(stack.peek()).toBe(null)
        expect(stack.dequeue()).toBe(null)
       
    })
});