// Node class to hold values and pointers to the next node in the list
class Node {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode
    }
}

// Linkedlist Data structure, made up of nodes that point to the next node in the list
// Has a head and tail node to point the start and the end of the linked list
class LinkedList {
    constructor() {
        // set head to an empty node when first initializing
        this.head = new Node(null)
        // set tail to an empty node when first initializing
        this.tail = new Node(null)
        this.length = 0;
    }
    
    toString() {
        // output string that we will return
        output = ''
        // tracker node that starts at the head
        currentNode = this.head
        while (currentNode != null) {
            // add the value  of the current_node to the output
            output += `${currentNode.value} --> `
            // move the current_node onto the next node
            currentNode = currentNode.nextNode;
        }
        // return the output string which is the linkedlist node values
        return output;
    }

    addToHead(value) {
        // create a node to add
        const newNode = new Node(value) 
        // check how many nodes the list is made up of
        // if the list is made up of an empty node / no nodes
        if (this.head === null && this.tail === null) {
            // set the head to the new node
            this.head = newNode;
            // set the tail to the new node as our list is going from 0 to 1 nodes
            this.tail = newNode;
        } else { // the list is one or more nodes
            // point the current head as the next node of the new node
            newNode.nextNode = this.head;
            // set the head to the new node
            this.head = newNode;  
        }
        // increment length by 1
        this.length += 1 
    }
    
    addToTail(value) {
        // create a new node to add
        const newNode = new Node(value)
        // check how many nodes the list is made up of 
        // if the list is made up of an empty node / no nodes
        if (this.head === null && this.tail === null) {
            // set the head to the new node as the new node will be the head and the tail
            this.head = newNode;
            // set the tail to the new node
            this.tail = newNode;
        }
        // the list is made up of more than one node
        else {
            // set the next node of the current node tail to the new node
            this.tail.next_node = newNode;
            // set the tail to the new node
            this.tail = newNode;
        }
        // increment length by 1
        this.length += 1
    }

    removeHead() {
        // check how many nodes the list is made up of 
        // if the list is empty / no nodes
        if (!this.head){
            // do nothing
            return null
        }
        // if the list only has one element
        if (this.head === this.tail){
            // set the head and the tail to null
            this.head = null;
            this.tail = null;
        }
        // otherwise there is at least one node, therefore there is a head
        else {
            // save the value of head to return later
            const headValue = this.head.value;
            // set the next node of the head node to the head
            this.head = this.head.nextNode;
            // return the value of the head
            return headValue;
        }
    }

    removeTail() {
        // check how many nodes the lsit is made up of
        // if the list is empty / no nodes
        if (!this.tail){
            // do nothing
            return null
        }
        // if the list is only one node
        if (this.tail === this.head) {
            // set head and tail to null
            this.head = null;
            this.tail = null;
        }
        // otherwise
        else {
            // save the value of the tail to return later'
            const tailValue = this.tail.value;
            // create a pointer node starting at the head
            let currentNode = self.head;
            // create a while loop that checks when the pointer node is not the tail node
            while (currentNode !== self.tail){
                // while we are not the tail move the pointer node to the next node
                // this loop allows us to traverse the list until we are the node before the tail node
                currentNode = currentNode.nextNode;
            }
            // set the value of the next node pointer node to null
            currentNode.nextNode = null;
            // set the tail to the pointer node
            this.tail = currentNode;
            // return the tail value
            return tailValue;
        }
    }

    contains(target) {
        // check that the list is made up of nodes that could contain a value
        if (!this.head) {
            // no values so can't contain so return false
            return false;
        }
        // otherwise
        else {
            // check through each node in the list until we see the target value or we can not move to another node
            currentNode = this.head;
            while (currentNode.nextNode !== null) {
                // check if the value of the current node equals the target value
                if (currentNode.value === target) {
                    // return true
                    return true
                }
                // set the current node to the next node
                currentNode = currentNode.nextNode;
            }
            // if we did not find the value in the while loop then the value is not in the list
            return false;
        }
    }
}