import { LinkedList } from "../singly_linked_list"; 

export class Queue {
    constructor () {
        // size property to track the size of the queue
        this.size = 0;
        // storage property that is made up of a linked list
        this.storage = new LinkedList()
    }
    // length function that returns the size of the Queue
    length() {
        return this.size
    }

    // enqueue adds a node with the value to the end(tail) of the queue
    enqueue(value) {
        // add the value to the tail
        this.storage.addToTail(value);
        // increment size by 1
        this.size += 1
    }

    // dequeue removes the node at the from (head) of the queue
    dequeue() {
        // check if the queue is empty
        if (this.size === 0) {
            // if it is do nothing
            return null;
        }
        // create a variable to hold the head value to return later
        const headValue = this.storage.head.value;
        // remove the head
        this.storage.removeHead()
        // decrement the size value
        this.size -= 1;
        // return the head value
        return headValue;
    }
}