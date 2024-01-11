let form = document.getElementById("form");
let benvenuto = document.getElementById("BENVENUTO");
let accedi = document.getElementById("accedi");
let email = document.getElementById("email");
let password = document.getElementById("password");
let body = document.querySelector("body");

function check() {
  if (!!email.value && !!password.value) {
    accedi.disabled = false;
  }
}
email.addEventListener("focusout", check);
password.addEventListener("focusout", check);

function login() {
  form.remove();
  form.style.display = "none";
  benvenuto.style.display = "flex";
}
accedi.addEventListener("click", login);

let esci = document.getElementById("esci");
function logout() {
  document.write("<div id='form'>");
  document.write("<input type='email' name='' id='email' />");
  document.write("<input type='password' name='' id='password' />");
  document.write("<button id='accedi' disabled='true'>Accedi</button></div>");
}
esci.addEventListener("click", logout);
