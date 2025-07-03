import React, { useEffect } from 'react'

import 'prismjs/themes/prism.css';
import '../styles/dsa.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DSA() {

    useEffect(() => {
    
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shadowing-container">
            <h1>Data Structures & Algorithms</h1>
            <p>
                This component covers some important concepts in Data Structures and Algorithms, providing definitions and explanations.
            </p>

            <h2>Key Definitions</h2>
            <ul>
                <li>
                    Data Structure: A way of organizing and storing data so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs.
                </li>
                <li>
                    Algorithm: A step-by-step procedure or formula for solving a problem. Algorithms can be expressed in natural language, pseudocode, or programming languages.
                </li>
                <li>
                    Time Complexity: A computational complexity that describes the amount of time it takes to run an algorithm as a function of the length of the input. It's often expressed using Big O notation (e.g., O(n), O(log n)).
                </li>
                <li>
                    Space Complexity: A computational complexity that describes the amount of memory space an algorithm uses in relation to the input size. Like time complexity, it's expressed using Big O notation.
                </li>
                <li>
                    Array: A collection of items stored at contiguous memory locations. It allows for easy access to elements via indices.
                </li>
                <li>
                    Linked List: A linear data structure where each element (node) points to the next one, allowing for dynamic memory allocation and efficient insertions/deletions.
                </li>
                <li>
                    Stack: A collection of elements that follows the Last In, First Out (LIFO) principle, where the last element added is the first to be removed. It supports operations like push (add) and pop (remove).
                </li>
                <li>
                    Queue: A collection of elements that follows the First In, First Out (FIFO) principle, where the first element added is the first to be removed. It supports operations like enqueue (add) and dequeue (remove).
                </li>
                <li>
                    Tree: A hierarchical data structure with nodes connected by edges. Each tree has a root node, and nodes can have children, forming a parent-child relationship. Common types include binary trees, binary search trees, and balanced trees.
                </li>
                <li>
                    Graph: A collection of nodes (vertices) connected by edges. Graphs can be directed or undirected and are used to represent relationships in networks, such as social media connections or transportation systems.
                </li>
                <li>
                    Sorting Algorithms: Algorithms used to arrange elements in a specific order (ascending or descending). Common sorting algorithms include Bubble Sort, Merge Sort, Quick Sort, and Insertion Sort.
                </li>
                <li>
                    Searching Algorithms: Algorithms used to find a specific element in a data structure. Common searching algorithms include Linear Search and Binary Search.
                </li>
            </ul>

            <div className="shadowing-container">
                <h2>1. Bubble Sort</h2>
                <p>
                    Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
                </p>
                <p>
                    This algorithm gets its name because smaller elements "bubble" to the top of the list (beginning of the array) with each iteration.
                </p>

                <h3>Algorithm</h3>
                <ul>
                    <li>Start from the beginning of the array.</li>
                    <li>Compare the first two adjacent elements.</li>
                    <li>If the first element is greater than the second, swap them.</li>
                    <li>Move to the next pair of adjacent elements and repeat the process.</li>
                    <li>Continue this process for the entire array until no swaps are needed, indicating that the array is sorted.</li>
                </ul>

                <h3>Time Complexity</h3>
                <p>The time complexity of Bubble Sort in the worst and average case is O(n²), where n is the number of elements in the array. In the best case, when the array is already sorted, the time complexity is O(n).</p>

                <h3>Space Complexity</h3>
                <p>The space complexity of Bubble Sort is O(1) since it only requires a constant amount of additional space for the temporary variables used for swapping.</p>

                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`function bubbleSort(arr) {
  let n = arr.length;

  for(let i=0; i<n-1; i++){
    for(let j=0; j<n-i-1; j++){
        if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        }
    }
  }
  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]`}
                    </SyntaxHighlighter>
                
            </div>


            <div className="shadowing-container">
                <h2>2. Selection Sort</h2>
                <p>
                    Selection Sort is a simple sorting algorithm that divides the input list into two parts: a sorted and an unsorted region. The sorted region is built up from left to right, and the algorithm repeatedly selects the smallest (or largest, depending on the order) element from the unsorted region and moves it to the end of the sorted region.
                </p>
                <p>
                    This algorithm is named "Selection Sort" because it selects the smallest (or largest) element from the unsorted subarray and places it at the beginning (or end) of the sorted subarray.
                </p>

                <h3>Algorithm</h3>
                <ul>
                    <li>Start from the beginning of the array.</li>
                    <li>Assume the first element is the minimum.</li>
                    <li>Compare this minimum element with the next elements in the array.</li>
                    <li>If a smaller element is found, update the minimum.</li>
                    <li>Once the end of the array is reached, swap the minimum element with the first element.</li>
                    <li>Move to the next position in the array and repeat the process until the entire array is sorted.</li>
                </ul>

                <h3>Time Complexity</h3>
                <p>The time complexity of Selection Sort in all cases (worst, average, and best) is O(n²), where n is the number of elements in the array. This is because, for each element, we need to scan through the remaining unsorted elements to find the minimum.</p>

                <h3>Space Complexity</h3>
                <p>The space complexity of Selection Sort is O(1) since it only requires a constant amount of additional space for the temporary variable used for swapping elements.</p>

                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]`}
                    </SyntaxHighlighter>
                
            </div>


            <div className="shadowing-container">
                <h2>3. Insertion Sort</h2>
                <p>
                    Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms like quicksort, heapsort, or merge sort.
                </p>
                <p>
                    The algorithm works by taking one element from the input data, finding the location it belongs to in the already-sorted list, and inserting it there. It repeats this until no input elements remain.
                </p>

                <h3>Algorithm</h3>
                <ul>
                    <li>Start with the second element of the array (assuming the first element is already sorted).</li>
                    <li>Compare the current element to the elements in the sorted portion of the array (to its left).</li>
                    <li>Shift all elements that are greater than the current element to the right.</li>
                    <li>Insert the current element into its correct position in the sorted portion.</li>
                    <li>Repeat this process for all elements in the array.</li>
                </ul>

                <h3>Time Complexity</h3>
                <p>
                    The time complexity of Insertion Sort in the worst and average case is O(n²), where n is the number of elements in the array. In the best case, when the array is already sorted, the time complexity is O(n).
                </p>

                <h3>Space Complexity</h3>
                <p>
                    The space complexity of Insertion Sort is O(1) since it only requires a constant amount of additional space for a few temporary variables used during the sorting process.
                </p>

                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

const array = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]`}
                    </SyntaxHighlighter>
                
            </div>
            <div className="shadowing-container">
                <h2>4. Quick Sort</h2>
                <p>
                    Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach to sort elements. It selects a 'pivot' element and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
                </p>
                <h3>Algorithm</h3>
                <ul>
                    <li>Choose a pivot element from the array.</li>
                    <li>Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.</li>
                    <li>Recursively apply the above steps to the sub-arrays.</li>
                </ul>
                <h3>Time Complexity</h3>
                <p>The time complexity of Quick Sort in the average case is O(n log n), but in the worst case, it can be O(n²).</p>
                <h3>Space Complexity</h3>
                <p>The space complexity of Quick Sort is O(log n) due to the recursive stack space.</p>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Merge Sort Section */}
            <div className="shadowing-container">
                <h2>5. Merge Sort</h2>
                <p>
                    Merge Sort is a divide-and-conquer algorithm that divides the unsorted list into two approximately equal halves, recursively sorts them, and then merges the sorted halves.
                </p>
                <h3>Algorithm</h3>
                <ul>
                    <li>Divide the unsorted list into <em>n</em> sub-lists, each containing one element.</li>
                    <li>Repeatedly merge sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.</li>
                </ul>
                <h3>Time Complexity</h3>
                <p>The time complexity of Merge Sort is O(n log n) in all cases (worst, average, and best).</p>
                <h3>Space Complexity</h3>
                <p>The space complexity of Merge Sort is O(n) due to the temporary arrays used for merging.</p>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Stack Section */}
            <div className="shadowing-container">
                <h2>6. Stack</h2>
                <p>
                    A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where the last element added is the first to be removed.
                </p>
                <h3>Operations</h3>
                <ul>
                    <li>Push: Adds an element to the top of the stack.</li>
                    <li>Pop: Removes the element from the top of the stack.</li>
                    <li>Peek: Returns the top element without removing it.</li>
                </ul>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack.peek()); // Output: 1`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Queue Section */}
            <div className="shadowing-container">
                <h2>7. Queue</h2>
                <p>
                    A Queue is a linear data structure that follows the First In, First Out (FIFO) principle, where the first element added is the first to be removed.
                </p>
                <h3>Operations</h3>
                <ul>
                    <li>Enqueue: Adds an element to the end of the queue.</li>
                    <li>Dequeue: Removes the element from the front of the queue.</li>
                    <li>Front: Returns the front element without removing it.</li>
                </ul>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Linked List Section */}
            <div className="shadowing-container">
                <h2>8. Linked List</h2>
                <p>
                    A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. This allows for efficient insertions and deletions.
                </p>
                <h3>Operations</h3>
                <ul>
                    <li>Insert: Adds a new node to the linked list.</li>
                    <li>Delete: Removes a node from the linked list.</li>
                    <li>Search: Searches for a node in the linked list.</li>
                </ul>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
console.log(list.search(2)); // Output: true
list.delete(1);
console.log(list.search(1)); // Output: false`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Doubly Linked List Section */}
            <div className="shadowing-container">
                <h2>9. Doubly Linked List</h2>
                <p>
                    A Doubly Linked List is similar to a Linked List but has an additional pointer that points to the previous node, allowing traversal in both directions.
                </p>
                <h3>Operations</h3>
                <ul>
                    <li>Insert: Adds a new node to the doubly linked list.</li>
                    <li>Delete: Removes a node from the doubly linked list.</li>
                    <li>Search: Searches for a node in the doubly linked list.</li>
                </ul>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }

    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            return;
        }

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }
        if (current) {
            if (current.next) {
                current.next.prev = current.prev;
            }
            if (current.prev) {
                current.prev.next = current.next;
            }
        }
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
    }
}

const doublyList = new DoublyLinkedList();
doublyList.insert(1);
doublyList.insert(2);
console.log(doublyList.search(2)); // Output: true
doublyList.delete(1);
console.log(doublyList.search(1)); // Output: false`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Tree Section */}
            <div className="shadowing-container">
                <h2>10. Tree</h2>
                <p>
                    A Tree is a hierarchical data structure that consists of nodes, with a single node as the root and other nodes as children. Each node contains a value and references to its child nodes.
                </p>
                <h3>Operations</h3>
                <ul>
                    <li>Insert: Adds a new node to the tree.</li>
                    <li>Delete: Removes a node from the tree.</li>
                    <li>Search: Searches for a node in the tree.</li>
                </ul>
                <h3>Implementation</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (!node) return false;
        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return true;
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.search(15)); // Output: true
console.log(tree.search(20)); // Output: false`}
                    </SyntaxHighlighter>
                
            </div>

            {/* Graph Section */}
            <div className="shadowing-container">
                <h2>11. Graph</h2>
                <p>
                    A Graph is a collection of nodes (or vertices) connected by edges. It can be directed or undirected and can have weights associated with edges.
                </p>
                <h3>Representation</h3>
                <ul>
                    <li>Adjacency List: Each node has a list of connected nodes.</li>
                    <li>Adjacency Matrix: A 2D array where each cell represents the presence of an edge between nodes.</li>
                </ul>
                <h3>Implementation (Adjacency List)</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    getVertices() {
        return Object.keys(this.adjacencyList);
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
console.log(graph.adjacencyList); // Output: { A: [ 'B' ], B: [ 'A' ] }`}
                    </SyntaxHighlighter>
                
                <h3>Implementation (Adjacency Matrix)</h3>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`class AdjacencyMatrixGraph {
    constructor() {
        this.adjacencyMatrix = [];
        this.vertexCount = 0;
    }

    addVertex() {
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            this.adjacencyMatrix[i].push(0);
        }
        this.adjacencyMatrix.push(new Array(this.vertexCount + 1).fill(0));
        this.vertexCount++;
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1; // For undirected graph
    }

    printMatrix() {
        console.log(this.adjacencyMatrix);
    }
}

const matrixGraph = new AdjacencyMatrixGraph();
matrixGraph.addVertex(); // Vertex 0
matrixGraph.addVertex(); // Vertex 1
matrixGraph.addEdge(0, 1);
matrixGraph.printMatrix(); // Output: [[0, 1], [1, 0]}  // Adjacency matrix`}
                    </SyntaxHighlighter>
                
            </div>

        </div>
    )
}

export default DSA
