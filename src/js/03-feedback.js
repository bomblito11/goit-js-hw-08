import _ from 'lodash';

const formElement = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const { email, message } = formElement.elements;

formElement.addEventListener(
  'input',
  _.throttle(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        email: email.value,
        message: message.value,
      })
    );
  }, 500)
);

const retrievedInputs = JSON.parse(localStorage.getItem(STORAGE_KEY));

window.addEventListener('load', () => {
  if (retrievedInputs) {
    email.value = retrievedInputs.email;
    message.value = retrievedInputs.message;
  }
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log({
    email: formElement.email.value,
    message: formElement.message.value,
  });
  formElement.reset();
});
