import './style.css'

let usernameInput: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
let useremailInput: HTMLInputElement = document.getElementById('useremail') as HTMLInputElement
let userpasswordInput: HTMLInputElement = document.getElementById('userpassword') as HTMLInputElement
let result: HTMLParagraphElement = document.getElementById('result') as HTMLParagraphElement;
let result1: HTMLParagraphElement = document.getElementById('result1') as HTMLParagraphElement
let result2: HTMLParagraphElement = document.getElementById('result2') as HTMLParagraphElement
let btn: HTMLButtonElement = document.getElementById("submitBtn") as HTMLButtonElement
let username: string;
let useremail: string;
let userpassword: string;

btn.addEventListener('click', function () {
  username = usernameInput.value;
  useremail = useremailInput.value;
  userpassword = userpasswordInput.value;
  if (username === "" || useremail === "" || userpassword === "") {
    result.innerHTML = "Name email and password are required"
  } else {
    result.innerHTML = "Name: " + username
    result1.innerHTML = "Email: " + useremail
    result2.innerHTML = "Password: " + userpassword
  }
});