const form = document.getElementById('form');
const passwrod1 = document.getElementById('passwrod1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    //   style main message for an error
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  }
  // check if password match

  if (passwrod1.value === password2.value) {
    passwordMatch = true;
    passwrod1.style.borderColor = 'green';
    password2.style.borderColor = 'green';
  } else {
    passwordMatch = false;
    message.textContent = 'Make sure password match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    passwrod1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
  }
}

function processFormData(e) {
  e.preventDefault();

  //   validate form
  validateForm();
}

// event listner
form.addEventListener('submit', processFormData);
