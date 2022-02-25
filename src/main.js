import LinkedList, { Node } from "./LinkedList";
import promptBuilder from 'prompt-sync';
import Stack from "./stack";

function main(){

    let prompt = promptBuilder();

    console.log(" Linked List ---------------------------------");
    let list = new LinkedList(new Node(prompt('provide your data: ') , null))
    list.insertToHead(9);
    list.insertToHead(10);
    list.insertToHead(11);

    console.log("---------------------------------");

    console.log(`look for the 4th element, ${list.search(3).val}`);
    console.log(`delete the 4th element, ${list.delete(3)}`);
    console.log(`look for the 4th element, ${list.search(3).val}`);


    console.log("Stacks ---------------------------------");

    let stack = new Stack(new Node(prompt('provide your data: ')))
    console.log(stack.push(180));
    console.log(stack.peek());
    console.log(stack.pop());

    // console.log('--------');
    // stack.display()
    return 0; 
}

main()