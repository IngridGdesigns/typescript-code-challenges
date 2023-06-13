/*
Code Challenge #3
- Build Binary Search Tree
You are given a list of numbers stored in a list, A. Your challenge is to build 
a [Binary Search Tree] (https://en.wikipedia.org/wiki/Binary_search_tree) 
to store these numbers. 

You will need to:

- Represent each node of the tree (including its data, left child and right child).
- Print the tree out in an understandable form.
- Make a function to insert a list of numbers (A) into the tree.
# this list will give a balanced tree, feel free to test the script on other lists
  Array = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]
- Check if you can insert all the numbers in A into your tree, and that it 
  prints out as expected.

  watched Free code camp course on binary tree algorithms : https://www.youtube.com/watch?v=fAAZixBzIAI
*/

class Node {
  public data: number;
  public left: Node | null;
  public right: Node | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  public head: Node | null;
  constructor(head?: Node) {
    this.head = head || null; // if there is a value it will set it to root if not set it to null
  }

  public insert(node: Node | null = this.head, value: number): Node {
    if (node === null) {
      const root = new Node(value);
      return root;
    } else {
      if (value < node.data) {
        // if its less then the current node data
        node.left = this.insert(node.left, value); // (recursively calls itself)
        // place on the left side
      } else {
        // if not, add to the right child
        node.right = this.insert(node.right, value);
      }
      return node; // happens until it add to the right spot in the tree
    }
  }

  public inorderTraversal(node: Node | null = this.head): void {
    let temp = node;
    if (temp !== null) {
      this.inorderTraversal(temp.left);
      console.log(temp.data);
      this.inorderTraversal(temp.right);
    }
  }
}

const rootNode = new Node(6);
rootNode.left = new Node(3);
rootNode.right = new Node(12);

const BST = new BinarySearchTree(rootNode);
BST.insert(BST.head, 12);
BST.insert(BST.head, 11);
BST.insert(BST.head, 14);
BST.insert(BST.head, 1);
BST.insert(BST.head, 20);
BST.insert(BST.head, 22);
BST.insert(BST.head, 25);
BST.insert(BST.head, 13);
BST.insert(BST.head, 70);
// // const arr = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]
// console.log(BST);
BST.inorderTraversal();

// public generateTree(node: Node | null = this.head, arry: number[]): Node {
//     if (arry === null) {
//         let node = null;
//         return node;
//     }

// }
