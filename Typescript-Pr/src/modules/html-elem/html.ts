import { btn2 } from "../module";
import { div2 } from "../module";
import { div3 } from "../module";

export const runHTMLNodeBasis = () => {
  let input = document.createElement("input");
  input.placeholder = "Type a word here";
  let headerb = document.createElement("h2");
  headerb.innerHTML =
    "If you click on the button below, whatever you put in the input field; the first letter will be put a the back which is also called Pig Latin";
  div2?.appendChild(headerb);
  div2?.appendChild(input);

  btn2?.addEventListener("click", () => {
    let header = document.createElement("h1");
    let pigLatinWord = input.value;
    let processedWord_f = pigLatinWord[0];
    let processedWordr = pigLatinWord.slice(1, pigLatinWord.length);
    let processedWord = processedWordr + processedWord_f.toLowerCase();
    header.innerHTML = processedWord;

    div3?.appendChild(header);
  });
};
