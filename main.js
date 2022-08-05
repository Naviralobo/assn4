const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem('UserName',nameInput.value);
  localStorage.setItem('UserEmail',emailInput.value);
}

