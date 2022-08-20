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
     getRoot(){
        return this.root;
     }
     preorderRecursion(root){
         if(root==null){
             return;
         }
        else{
            console.log(root.data);
            this.preorderRecursion(root.left);
            this.preorderRecursion(root.right);
        }
     }
     preorderIteration(root){
         let stack =[];
         if(root==null){
             return;
         }
         stack.push(root);
         while(stack.length!==0){
           if(root!=null){
               console.log(root.data);
               if(root.right){
                    stack.push(root.right);
               }
                    root = root.left;
          }else{
                    root = stack[stack.length-1];
                    stack.pop()
          }
        }
     }
}
const bst = new BST;
bst.insert(3);
bst.insert(4);
bst.insert(7);
bst.insert(2);
bst.insert(1);
const root = bst.getRoot();
//bst.preorderRecursion(root);
bst.preorderIteration(root);