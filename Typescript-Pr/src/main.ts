import "./styles/style.css";
import { usernameInput } from "./modules/module";
import { useremailInput } from "./modules/module";
import { userpasswordInput } from "./modules/module";
import { result } from "./modules/module";
import { result1 } from "./modules/module";
import { result2 } from "./modules/module";
import { btn } from "./modules/module";
import { div } from "./modules/module";

let username: string;
let useremail: string;
let userpassword: string;

btn.addEventListener("click", () => {
  username = usernameInput.value;
  useremail = useremailInput.value;
  userpassword = userpasswordInput.value;
  if (username === "" || useremail === "" || userpassword === "") {
    result.innerHTML = "Name email and password are required";
  } else {
    result.innerHTML = "Name: " + username;
    result1.innerHTML = "Email: " + useremail;
    result2.innerHTML = "Password: " + userpassword;

    let p: HTMLParagraphElement = document.createElement("p");
    p.innerHTML = "Welcome " + username;
    div.appendChild(p);
    alert("Welcome " + username);
  }
  setTimeout(() => {
    result.innerHTML = "";
    result1.innerHTML = "";
    result2.innerHTML = "";
    div.innerHTML = "";
  }, 5000);
});
