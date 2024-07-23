const formLogin = document.querySelector(".login-form");
const btn = document.querySelector("button");
btn.textContent = "Log in";

const formSubmit = (btn) => {
  btn.preventDefault();

  const inputEmail = formLogin.elements.email.value.trim();
  const inputPassword = formLogin.elements.password.value.trim();

  if (inputEmail === "" || inputPassword === "") {
    return alert("All form fields must be filled in");
  }
  const result = {
    email: inputEmail,
    password: inputPassword,
  };
  console.log(result);

  formLogin.reset();
};

formLogin.addEventListener("submit", formSubmit);
