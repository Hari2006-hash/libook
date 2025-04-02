



 function validateEmail() {
 let email =
document.getElementById("email").value;
 let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!regex.test(email)) {
 alert("Invalid email format!");
 return false;
 }
 return true;
 }



 function validatePassword() {
 let password =
document.getElementById("password").value;
 let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]
{8,}$/;
 if (!regex.test(password)) {
 alert("Password must be at least 8
characters, including a letter and a number.");
 return false;
 }
 return true;
 }


function validatePhone() {
 let phone =
document.getElementById("phone").value;
 let regex = /^\d{10}$/;
 if (!regex.test(phone)) {
 alert("Phone number must be exactly 10
digits.");
 return false;
 }
 return true;
 }



 function validateForm() {
     return validateEmail() &&
     validatePassword() && validatePhone();
 }