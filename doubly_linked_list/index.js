class DoubleNode {
    constructor(value, prev=null, next=null) {
        this.prev = prev
        this.value = value
        this.next = next
    }

    delete() {
        if (this.prev) {
            this.prev.next = this.next;
        } if (this.next){
            this.next.prev = this.prev;
        }
    }   
}

class DoubleLinkedList {
    constructor(node=null) {
        this.head = node;
        this.tail = node;
        this.length = node !== null ? 1 : 0
    }
    length(){
        return this.length
    }

    addToHead(value) {
        // create a new node using the value
        const newNode = ListNode(value);
        // check the list
        // if the list is empty
        if (this.head === null && this.tail === null) {
            // set the head to the new node
            this.head = newNode;
            // set the tail to the new node
            this.tail = newNode;
        } 
        // otherwise there are nodes in the list
        else {
            // set the next property of the new node to the current head
            newNode.next = this.head;
            // set the previous property on the current head node to the new node
            this.head.prev = newNode;
            // set the head to the new node
            this.head = newNode;
        }
        // increment the length by 1
        this.length += 1;
    }

    removeFromHead() {
        // check if there is a head
        // there is no head
        if (!this.head) {
            // there is no head to remove so do nothing
            return null;
        }
        // there is a head
        // store the head value to return later
        const headValue = this.head.value;
        // delete the head node
        this.delete(this.head)
        // return the headValue
        return headValue;
    }

    addToTail(value) {
        // create the new node with the passed in value
        newNode = ListNode(value)
        // check if there are nodes in the list
        // if there are no nodes
        if (!this.head && !this.tail) {
            // set the head to the new node
            this.head = newNode;
            // set the tail to the new node
            this.tail = newNode;
        }
        // there are nodes in the list
        else {
            // set the tail node's next value to the new node
            this.tail.next = newNode;
            // set the previous property of the newNode to the current tail
            newNode.prev = this.tail;
            // set the tail to the new node
            this.tail = newNode;
        }
    }

    removeFromTail() {
        // check if there is a tail
        // there is no tail
        if (!this.tail){
            // nothing to remove so do nothing
            return null;
        } 
        // there is a tail value
        // store the tail value to return later
        const tailValue = this.tail.value;
        // delete the tail node
        this.delete(this.tail)
        // return the tail value
        return tailValue;
    }

    moveToFront(node) {
        // check if the node is already the front (it is the head node)
        if (node === this.head){
            // nothing to do
            return node.value
        }
        // otherwise the node is not at the front
        // create a new head node using the value of the passed in node
        const newHead = new ListNode(node.value)
        // delete the passed in node
        this.delete(node)
        // add the tail to the front using the addToHead method
        this.addToHead(newHead)
        // return the head value
        return this.head.value
    }

    moveToBack(node) {
        // check if the node is already the back (it is the tail node)
        if (node === this.tail) {
            // nothing to do
            return node.value
        }
        // otherwise the node is not at the back
        // create a new tail node using the value of the pass in node
        const newTail = new ListNode(node.value)
        // delete the passed in node
        this.delete(node)
        // add the new tail using the addToTail method
        this.addToTail(newTail)
        // return the tail value
        return this.tail.value;
    }

    delete(node) {
        // check if there are nodes in the list
        if (this.head === null && this.tail === null) {
            // there are no nodes to remove
            return null;
        }
        // there is only one node in the list and the passed in node is the only node in the list
        if (node === this.head && node === this.tail) {
            // delete the node
            node.delete()
        }
        // there are at least two nodes in the list
        // the passed in node is the head value
        if (node === this.head) {
            // set the next node as the head of the list
            this.head = node.next
            // delete the passed in node
            node.delete()
        }
        // the passed in node is the tail value
        if (node === this.tail) {
            // set the prev node as teh tail of the list
            this.tail = node.prev
            // delete the passed in node
            node.delete()
        }
        // decrement the length by 1
        this.length -= 1
    }

    getMax() {
        // check if there is a list to the get the max value from
        if (!this.head) {
            // no values to get max from so do nothing
            return null;
        }
        // set the max value to the value of the linked list head value
        let maxValue = this.head.value
        // create a pointer node to traverse the list, set it to the head node
        let current = this.head
        // create a while loop to traverse the list
        // while current is not equal to null which would be the end of the list
        while (current) {
            // if the current value is greater than the max value
            if (current.value > maxValue) {
                // set the max value to the current node value
                maxValue = current.value
            }
            // traverse to the next node
            current = current.next
        }
        // return the max value
        return maxValue
    }
}