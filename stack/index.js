import { LinkedList } from '../singly_linked_list'

class Stack {
    constructor() {
        this.size = 0;
        this.storage = new LinkedList();
    }
    length() {
        return this.size;
    }

    push(value) {
        this.size += 1
        this.storage.addToHead(value)
    }
    
    pop() {
        this.size -1
        const headValue = this.head.value;
        this.storage.removeHead();
        return headValue;
    }
}
