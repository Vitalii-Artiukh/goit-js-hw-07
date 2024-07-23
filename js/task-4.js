const formLogin = document.querySelector('.login-form');
const formSubmitBtn = document.querySelector('button');
formSubmitBtn.textContent = 'Log in';

const formSubmit = event => {
  event.preventDefault();

  const inputEmail = formLogin.elements.email.value.trim();
  const inputPassword = formLogin.elements.password.value.trim();

  if (inputEmail === '' || inputPassword === '') {
    return alert('All form fields must be filled in');
  }
  const result = {
    email: inputEmail,
    password: inputPassword,
  };
  console.log(result);

  formLogin.reset();
};

formLogin.addEventListener('submit', formSubmit);
