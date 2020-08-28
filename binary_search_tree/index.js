const { Queue } = require("../queue");

class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Insert the giveen value into the tree
    insert(value) {
        // compare the given value to the node value
        // if the given value is greater or equal to the node value
        if (value >= this.value) {
            // Go right
            // if there is no node to the right
            if (this.right === null) {
                // create the new node here
                newNode = new BSTNode(value)
                // set the right node to the new node
                this.right = newNode;
            }
            // Compare the given value to the value of the node to the right
            // and insert the given value  to the node to the right of the current node
            else {
                this.right.insert(value)
            }
        }
    }
    // Return true of the tree contains the given value and false if it doesn't
    contains(target) {
        // compare target value to node.value
        // if target greater than node.value
        if (target > this.value) {
            // Go right
            // If the node to the right is node
            if (this.right === null) {
                // we've traversed the tree and have not found the target value
                return false;
            }
            // else check if the target is in the nodes to the right
            return this.right.contains(target)
        }
        // if target is less than node.value 
        if (target < this.value) {
            // Go left
            // If node.left is none (there are no more values to the left)
            if (this.left === null){
                // we've traversed the tree and have not found the target value
                return false;
            }
            // else search the nodes to the left for the target
            return this.left.contains(target)
        }
        // otherwise we have found the target value
        return true;
    }

    // return the maximum value found in the tree
    getMax() {
        // check if there is only one node or a tree with only nodes to the left
        if (this.right === null) {
            // the max value is the current node value
            return this.value
        }
        // otherwise we need to keep going to the right node
        else {
            return self.right.getMax()
        }
    }

    // Call the function `fn` on the value of each node
    forEach(fn) {
        // if there is only one node return the value of the node passed into the fn
        fn(this.value)
        // if there are nodes to the left 
        // apply the forEach method with the passed in function to the tree to the left
        if (this.left !== null) {
            this.left.forEach(fn)
        }
        // apply the forEach method with the passed in function to the tree to the right
        if (this.right !== null) {
            this.right.forEach(fn)
        }
    }
    
    inOrderPrint(node=BSTNode(null)) {
        // check if there are nodes to the left
        if (this.left !== null){
            // go over the nodes to the left
            this.left.inOrderPrint(this.left)
        }
        // print the current node value
        console.log(this.value)
        // check if there are values to the right
        if (this.right !== null) {
            // go over the nodes tot he right
            this.right.inOrderPrint(this.right)
        }
    }

    // Print the value of every node, starting with the given node
    // in an iterative breadth first traversal
    bft_print() {
        // create a queue for the nodes
        const nodes = new Queue()
        // add this node node to the queue
        nodes.enqueue(this)
        // while this ququq is not empty
        while (nodes.size > 0) {
            // remove the first node from the queue
            firstNode = nodes.dequeue()
            // print the first node from the queue
            console.log(firstNode)
            // add all the children into the queue
            // if there are children nodes to the left
            if (firstNode.left) {
                nodes.enqueue(firstNode.left)
            }
            // if there are children nodes to the right
            if (firstNode.right) {
                nodes.enqueue(firstNode.right)
            }            
        }
        // return the nodes
        return nodes
    }

}