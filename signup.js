
const regex_password=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// const regex_phone=/^077\d{7}$/;
const regex_email=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

const username = document.getElementById("username");
const name_error =document.getElementById("name_error");

const mobile = document.getElementById("mobile");
const mobile_error=document.getElementById("mobile_error");

const email = document.getElementById("email");
const email_error=document.getElementById("email_error");

const DOB = document.getElementById("DOB");
const DOB_error=document.getElementById("DOB_error");

const password = document.getElementById("password");
const password_error=document.getElementById("password_error");

const password_confirm = document.getElementById("password_confirm");
const password_confirm_error=document.getElementById("password_confirm_error");



const submit  = document.getElementById("Sign_up");


function ValidateForm(event) {

var bool =true;
//user_name
name_error.innerText='';
if(username.value==''){
name_error.innerText="Name is required";
name_error.style.color="red";
bool=false;
}
//email
email_error.innerText='';
if(email.value==''){
email_error.innerText="Email is required";
email_error.style.color="red";
bool=false;
}else if(!email.value.match(regex_email)){
email_error.innerText= "Invalid email format";
email_error.style.color="red";
bool=false;
}
//phone
if (mobile.value.trim() === "") {
    mobile_error.style.color="red";
    mobile_error.textContent = "Phone_Number is required";
  mobile.style.borderColor = "red";
} 
else {
    mobile_error.textContent = "";
  mobile.style.borderColor = "";
}
//DOB
if (DOB.value=='') {
    DOB_error.style.color="red";
    DOB_error.textContent =  "date of birth is required";
 DOB.style.borderColor = "red";
} 
else {
   DOB_error.textContent = "";
 DOB.style.borderColor = "";
}
//password
password_error.innerText='';
if(password.value==''){
password_error.innerText="Password is required";
password_error.style.color="red";
bool=false;
}
else if(!password.value.match(regex_password)){
password_error.innerText="password is notValid";
password_error.style.color="red";
bool=false;
}

//password Confirm
password_confirm_error.innerText='';
if(password_confirm.value==''){
password_confirm_error.innerText="confirm password is empty";
password_confirm_error.style.color="red";
bool=false;
}else if(password_confirm.value!=password.value){
password_confirm_error.innerText="confirm password is not match";
password_confirm_error.style.color="red";
bool=false;
}

if(bool==false){
event.preventDefault();
}
// if (

// email.value !== "" &&
// email.value.match(regex_email) &&
// mobile.value !== "" &&
// password.value !== "" 

// ) {
// let users=[];
// let id=0;
// let email_val = email.value;
// let mob_val = mobile.value;
// let pass_val =  password.value;

// let user = { "key":[id ,email_val, mob_val, pass_val] };
// users.push(user);

// // Convert the array to a JSON string before storing it in local storage
// window.localStorage.setItem("users[id]", JSON.stringify(users));

// id++; 
// }


}
submit.addEventListener("click", ValidateForm);



