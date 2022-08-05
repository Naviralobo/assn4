

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
li.appendChild(document.createTextNode(`${nameInput} : ${emailInput}`));
ul.appendChild(li);
const myObj={
  nameInput:nameInput,
 emailInput:emailInput
};

  localStorage.setItem("myObjects"+ emailInput,JSON.stringify(myObj));
  //localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
}

for(const key of Object.keys(localStorage)){
  console.log(`${key}`);
}

