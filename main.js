

//myForm.addEventListener('submit', onSubmit);
//function onSubmit(e) {
 // e.preventDefault();
 // localStorage.setItem('UserName',nameInput.value);
  //localStorage.setItem('UserEmail',emailInput.value);
//}



const myForm = document.querySelector('#my-form');
const ul =document.querySelector('#users')
//console.log("myObject",myObjSerialized);
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
 e.preventDefault(); 
const nameInput = document.querySelector('#name').value;
const emailInput = document.querySelector('#email').value;
const li=document.createElement('li');
//adding userdetails
li.appendChild(document.createTextNode(`${nameInput} : ${emailInput}`));
//adding editbutton
var editBtn = document.createElement('button');
editBtn.className= 'edit';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);
//adding deletebutton
var deleteBtn = document.createElement('button');
deleteBtn.className= 'delete';
deleteBtn.appendChild(document.createTextNode('Delete'));
li.appendChild(deleteBtn);
//appending li to ul
ul.appendChild(li);
//local storage
const myObj={
  nameInput:nameInput,
 emailInput:emailInput
};

  localStorage.setItem("myObjects"+emailInput,JSON.stringify(myObj));
}
/*iterating the local storage
for(const key of Object.keys(localStorage)){
  console.log(`${key}`);
}*/
//delete an item from document and local storage
ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e.target.parentElement;
            ul.removeChild(li);
            const emailInput = document.querySelector('#email').value;
            localStorage.removeItem('myObjects'+ emailInput);
        }
    }
});
ul.addEventListener('click',(f)=>{
  if(f.target.classList.contains('edit')){
    var li=f.target.parentElement;
    let root = li;
     let iter = document.createNodeIterator(root, NodeFilter.SHOW_TEXT), textnode;
     while (textnode = iter.nextNode()) {
      const splitt=textnode.textContent.split(":");
      document.getElementById('email').value =splitt[1];
      document.getElementById('name').value = splitt[0];
      break;
}
 
    //document.getElementById('name').value = 
    ul.removeChild(li);
    const emailInput = document.querySelector('#email').value;
    localStorage.removeItem('myObjects'+ emailInput);
  }
}); 

