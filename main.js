import LinkedList from "./LinkedList";
import Node from "./Node";
import promptBuilder from 'prompt-sync';


function main(){

    let prompt = promptBuilder();
    let list = new LinkedList(new Node(prompt('provide your data: ') , null))
    list.insertToHead(9);
    list.insertToHead(10);
    list.insertToHead(11);

    list.display();

    console.log("---------------------------------");

    console.log(`look for the 4th element, ${list.search(3).val}`);
    console.log(`delete the 4th element, ${list.delete(3)}`);
    console.log(`look for the 4th element, ${list.search(3).val}`);
    return 0;
}

main()