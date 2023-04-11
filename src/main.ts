import LinkedList, { Node } from "./LinkedList";
import promptBuilder, { Prompt } from 'prompt-sync';
import Stack from "./Stack";

function linkedListMain(list: LinkedList<number>){
    
    list.pushFront(8);
    list.pushFront(2);
    list.pushFront(0);
    
    console.log('LinkedList');
    console.log(`look for the 4th element, ${list.search(4)?.val}`);
    console.log(`delete the 4th element, ${list.delete(4)}`);
    console.log(list.array());
    console.log(`look for the 4th element`, list.search(4));


}

function stackMain(stack: Stack<number>) {
    console.log('push Nan', stack.push(NaN));
    console.log('get peek', stack.peek());
    console.log('pop', stack.pop());
    
    console.log('Stack:');
    stack.display()
}

function main(){
    let prompt: Prompt = promptBuilder();
    linkedListMain(new LinkedList(new Node(Number(prompt('provide your data for a Linkedin: ')) , null)));
    // stackMain(new Stack(new Node(Number(prompt('provide your data for a Stack: ')))));
}

main()