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
    minBST(){
        if(this.root == null){
            return -1;
        }
        while(this.root.left != null){
            this.root = this.root.left;
        }
        return this.root.data;      
    }
    maxBST(){
        if(this.root == null){
            return -1;
        }
        while(this.root.right != null){
            this.root = this.root.right;
        }
        return this.root.data;      
    }
}

const bst = new BST;


bst.insert(3);
bst.insert(4);
bst.insert(8);
bst.insert(7);
bst.insert(10);


console.log(bst.minBST());
console.log(bst.maxBST());