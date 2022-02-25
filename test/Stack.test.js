import { Node } from "../src/LinkedList";
import Stack from "../src/stack";



describe('Stack', () => {
    let initial_value = 14;
    let pushed_value = 1545;

    test('push is working 😂 ', () => {

        let stack = new Stack(new Node(initial_value));

        expect(stack.push()).toBe(false)
        expect(stack.push(null)).toBe(false)
        expect(stack.push(pushed_value)).toBe(true)
    })

    test('peek is working 😂 ', () => {

        let stack = new Stack(new Node(initial_value));

        expect(stack.peek()).toBe(initial_value)
        stack.pop();
        expect(stack.peek()).toBe(null)
    })

    test.only('pop is working 😂 ', () => {
        
        let stack = new Stack(new Node(initial_value));

        expect(stack.pop()).toBe(initial_value)
        expect(stack.peek()).toBe(null)
        expect(stack.pop()).toBe(null)
       
    })
});