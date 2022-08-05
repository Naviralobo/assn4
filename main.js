

//myForm.addEventListener('submit', onSubmit);
//function onSubmit(e) {
 // e.preventDefault();
 // localStorage.setItem('UserName',nameInput.value);
  //localStorage.setItem('UserEmail',emailInput.value);
//}



const myForm = document.querySelector('#my-form');
//console.log("myObject",myObjSerialized);
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
 e.preventDefault(); 
 
const nameInput = document.querySelector('#name').value;
const emailInput = document.querySelector('#email').value;
const myObj={
  nameInput,
 emailInput
};
let myObjSerialized = JSON.stringify(myObj);
  //console.log("myObject",myObj);
  localStorage.setItem("myObject",myObjSerialized);
}


