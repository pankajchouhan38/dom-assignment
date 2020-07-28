var username = document.createElement("LABEL");
var user = document.createTextNode("username");
username.setAttribute("for", "username");
username.appendChild(user);
document
  .getElementById("me")
  .insertBefore(username, document.getElementById("username"));

var password = document.createElement("LABEL");
var pass = document.createTextNode("password");
password.setAttribute("for", "password");
password.appendChild(pass);
document
  .getElementById("me1")
  .insertBefore(password, document.getElementById("password"));

var password = document.createElement("LABEL");
var pass = document.createTextNode("confirm password");
password.setAttribute("for", "confirmPassword");
password.appendChild(pass);
document
  .getElementById("me2")
  .insertBefore(password, document.getElementById("confirmPassword"));
/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
function validateUsername() {
  var xy = document.querySelector("#username").value;
  if (xy == "") {
    document.getElementById("msg").innerHTML = "this is required";
    return false;
  }
}
/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
function validatePassword() {
  var x = document.querySelector("#password").value;
  var y = document.querySelector("#confirmPassword").value;
  if (x !== y) {
    alert("password do not match");
    return false;
  }
}
/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
function validateFormSS() {
  var xy = document.querySelector("#username").value;
  var x = document.querySelector("#password").value;
  var y = document.querySelector("#confirmPassword").value;
  if (xy !== null || x !== null)
    document.getElementsByClassName("btn").disabled = false;
}

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
function validateForm() {
  var x = document.querySelector(".btn");
  x.addEventListener("click", function () {
    alert("form submitted");
  });
}
