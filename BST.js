class Node{
    constructor(data){
        this.data = data;
        this.right =null;
        this.left = null;
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(data){
        let node = new Node(data);
        if(this.root == null){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(root,newNode){
        if(root.data > newNode.data){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }

        }else if(root.data < newNode.data){
            if(root.right == null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(data) {
        let currNode = this.root;
        while (currNode !== null) {
           if (currNode.data === data) {
              return true;
           } else if (data < currNode.data) {
              currNode = currNode.left;
           } else {
              currNode = currNode.right;
           }
        }
        return false;
     }
     getRoot(){
        return this.root;
     }
     preorderRecursion(root){
        if(root!=null){
            console.log(root.data);
            this.preorderRecursion(root.left);
            this.preorderRecursion(root.right);
        }
     }
}
const bst = new BST;
bst.insert(3);
bst.insert(4);
bst.insert(7);
bst.insert(2);
console.log(bst.search(5));
console.log(bst.search(2));