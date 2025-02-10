"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header h1" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

document
  .querySelector("#local_select")
  .addEventListener("change", languageChange);

function languageChange() {
  locale = document.querySelector("#local_select").value;
  console.log("TEXTS", texts[locale].texts);
  texts[locale].texts.forEach((element) => {
    document.querySelector(element.location).textContent = element.text;
  });
}
let locale = "de";

console.log(texts[locale].texts);
