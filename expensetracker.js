const myForm = document.getElementById('ETForm');
const ul =document.getElementById('DetailList');
let countExpense=1;
document.getElementById('AddExpense').addEventListener('click', submitt);
function submitt(e){
   e.preventDefault();
    console.log("Hello");

//get input values
const expense = document.getElementById('expense').value;
const description=document.getElementById('description').value;
const category = document.getElementById('category').value;
const li = document.createElement('li');

//append input value to li
li.appendChild(document.createTextNode(`${countExpense} : ${expense} : ${description} : ${category}`));

//adding editbutton
let editBtn = document.createElement('button');
editBtn.className="edit";
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);

//adding editbutton
var deleteBtn = document.createElement('button');
deleteBtn.className = "delete";
deleteBtn.appendChild(document.createTextNode('Delete'));
li.appendChild(deleteBtn);

//add the list to unordered list
ul.appendChild(li);
const myObj={
    expense : expense,
    description:description,
    category:category
  };
    localStorage.setItem("expense"+countExpense++,JSON.stringify(myObj));
  }
  ul.addEventListener('click',delet);
  function delet(e){
    if(e.target.classList.contains('delete')){
            var li=e.target.parentElement;
            ul.removeChild(li);
            //const emailInput = document.querySelector('#email').value;
            //localStorage.removeItem('myObjects'+ emailInput);
    }
};
ul.addEventListener('click',(f)=>{
    if(f.target.classList.contains('edit')){
      var li=f.target.parentElement;
      let root = li;
      let remov=0;
       let iter = document.createNodeIterator(root, NodeFilter.SHOW_TEXT), textnode;
       while (textnode = iter.nextNode()) { 
        const splitt=textnode.textContent.split(":");
        remov = splitt[0];
        document.getElementById('expense').value =splitt[1];
        document.getElementById('description').value = splitt[2];
        document.getElementById('description').value = splitt[3];
        localStorage.removeItem('expense'+ splitt[0]);;
        break;
  }
   
      //document.getElementById('name').value = 
      ul.removeChild(li);
      //const emailInput = document.querySelector('#email').value;
   
    }
  }); 