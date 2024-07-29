console.log(`
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░███████╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░╚════██║
██║░░██║███████║░╚████╔╝░  ██╔██║░░░░░░██╔╝
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░░░░██╔╝░
██████╔╝██║░░██║░░░██║░░░  ███████╗░░██╔╝░░
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝░░╚═╝░░░
`)

// ? ACTIVITY ONE : Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next .

class Node{
    constructor( value ){
        this.value = value;
        this.next = null
    }
}

const nodeOne = new Node(2);
const nodeTwo = new Node(3);
const nodeThree = new Node(4);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
console.log( `Node One : ${nodeOne}` )

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {

    constructor( ){
        this.head = null;
        this.tail = null;
    }

    addNode( value ){
        const newNode = new Node( value );
        if( !this.head ){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode(){
        let currentNode = this.head;
        while( currentNode.next !== this.tail ){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    displayNodes(){
        let currentNode = this.head;
        while( currentNode ){
            console.log( currentNode.value );
            currentNode = currentNode.next;
        }
    }
}


const linkedList = new LinkedList();
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.removeNode();
linkedList.displayNodes();

// ? ACTIVITY TWO : Stack

// Task 3: Implement a stack class with methads push (add element), pop (remove element), and peek (view the top element).

class Stack {

    constructor() {
        this.stack = [];
    }

    // push method 
    push( value ) {
        this.stack[ this.stack.length ] = value  
    }

    // pop method
    pop() {
        this.stack.length = this.stack.length - 1;  
    }

    // peek method
    peek() {
        console.log( this.stack[ this.stack.length - 1 ] )
    }

}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.peek()
stack.pop()
stack.peek()


// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

class Stack2 {

    constructor() {
        this.stack = []
        this.reverse = ""
    }

    getString( value ) {
        for (let index of value) {
            this.stack.push( index )
        }
    }

    reverseString() {
        let length = this.stack.length

        while ( length > 0 ) {
            this.reverse += this.stack.pop()
            length--
        }
        console.log( this.reverse )
    }
}


const reverse = new Stack2()

reverse.getString("aayush")
reverse.reverseString()

// ? ACTIVITY THREE : Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue( value ){
        this.queue[ this.queue.length ] = value           
    }

    dequeue(){
        for ( let index = 1 ; index < this.queue.length ; index++ ){    
            this.queue[ index-1 ] = this.queue[ index ]               
        }                                                                   
        this.queue.length = this.queue.length - 1   
    }

    front(){
        console.log( this.queue[0] )
    }

}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.front()
console.log( queue )
queue.dequeue()
queue.front()
console.log( queue )


// Task 6: Use the Queue class to sirnulate a simple printer queue where print jobs are added to the queue and prccessed in order.

class PrinterQueue{

        constructor(){
            this.queue = []
        }    

        addJobToTheQueue( value ){
            this.queue.push( value )
        }

        processJobInTheQueue(){

            let length = this.queue.length 
            while( length > 0 ){
                console.log( this.queue.shift() )
                length --
            }
        }
}


const printer = new PrinterQueue()

printer.addJobToTheQueue("Queue Job One")
printer.addJobToTheQueue("Queue Job Two")
printer.addJobToTheQueue("Queue Job Three")
printer.addJobToTheQueue("Queue Job Four")
printer.addJobToTheQueue("Queue Job Five")
printer.processJobInTheQueue()

// ? ACTIVITY FOUR : Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right .

class TreeNode {
    constructor( value ) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const TreeNodeOne = new TreeNode( 2 );
const TreeNodeTwo = new TreeNode( 3 );
const TreeNodeThree = new TreeNode( 4 );

TreeNodeOne.right = TreeNodeTwo
TreeNodeOne.left = TreeNodeThree

console.log( TreeNodeOne )


// Task 8: Implement a BinaryTree class with method for inserting values and performing in-order traversal to display nodes.



class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert( value ) {
        const newNode = new TreeNode( value );

        if ( this.root === null ) {
            this.root = newNode;
        }
        else {
            this.insertNode( this.root, newNode )
        }
    }

    insertNode( root , newNode ) {
        if ( newNode.value < root.value ) {
            if ( root.left !== null ) {
                this.insertNode(root.left, newNode)
            }
            else {
                root.left = newNode
            }
        }
        else {
            if ( root.right !== null ) {
                this.insertNode( root.right , newNode )
            }
            else {
                root.right = newNode
            }
        }
    }

    inOrder( node ) {
        if ( node ) {
            this.inOrder( node.left )
            console.log( node.value )
            this.inOrder( node.right )
        }
    }
}

const tree = new BinaryTree();
tree.insert( 15 );
tree.insert( 7 );
tree.insert( 19 );
tree.insert( 4 );
tree.insert( 9 ) ;
tree.insert( 27 );


tree.inOrder( tree.root );
