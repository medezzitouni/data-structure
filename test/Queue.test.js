import { Node } from "../src/LinkedList";
import Queue from '../src/Queue';


describe('Queue', () => {
    let initial_value = 14;
    let pushed_value = 1545;

    test('enqueue is working 😂 ', () => {

        let queue = new Queue(new Node(initial_value));

        expect(queue.enqueue()).toBe(false)
        expect(queue.enqueue(null)).toBe(false)
        expect(queue.enqueue(pushed_value)).toBe(true)
    })

    test('peek is working 😂 ', () => {

        let queue = new Queue(new Node(initial_value));

        expect(queue.peek()).toBe(initial_value)
        queue.dequeue();
        expect(queue.peek()).toBe(null)
    })

    test('dequeue is working 😂 ', () => {
        
        let queue = new Queue(new Node(initial_value));

        expect(queue.dequeue()).toBe(initial_value)
        expect(queue.peek()).toBe(null)
        expect(queue.dequeue()).toBe(null)
       
    })
});