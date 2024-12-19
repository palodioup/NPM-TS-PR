import { usernameInput } from "../module.ts";
import { useremailInput } from "../module.ts";
import { userpasswordInput } from "../module.ts";
import { result } from "../module.ts";
import { result1 } from "../module.ts";
import { result2 } from "../module.ts";
import { btn } from "../module.ts";
import { div } from "../module.ts";

let username: string;
let useremail: string;
let userpassword: string;

export const runFormValidation = () => {
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
      usernameInput.value = "";
      useremailInput.value = "";
      userpasswordInput.value = "";
      div.innerHTML = "";
    }, 5000);
  });
};