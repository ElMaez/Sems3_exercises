console.log("Hello World");

const knap1 = document.querySelector("#knap1");
const knap2 = document.querySelector("#knap2");
const knap3 = document.querySelector("#knap3");
const knap4 = document.querySelector("#knap4");

const drop1 = document.querySelector("#drop1");
const drop2 = document.querySelector("#drop2");
const drop3 = document.querySelector("#drop3");
const drop4 = document.querySelector("#drop4");

knap1.addEventListener("click", dropdown1);
knap2.addEventListener("click", dropdown2);
knap3.addEventListener("click", dropdown3);
knap4.addEventListener("click", dropdown4);

function dropdown1() {
  if (drop1.classList == "dropdown_hide") {
    drop1.classList.remove("dropdown_hide");
    console.log("er removed");
  } else if (drop1.classList == "") {
    drop1.classList.add("dropdown_hide");
    console.log("er tilføjet");
  }
}
function dropdown2() {
  if (drop2.classList == "dropdown_hide") {
    drop2.classList.remove("dropdown_hide");
    console.log("er removed");
  } else if (drop2.classList == "") {
    drop2.classList.add("dropdown_hide");
    console.log("er tilføjet");
  }
}
function dropdown3() {
  if (drop3.classList == "dropdown_hide") {
    drop3.classList.remove("dropdown_hide");
    console.log("er removed");
  } else if (drop3.classList == "") {
    drop3.classList.add("dropdown_hide");
    console.log("er tilføjet");
  }
}
function dropdown4() {
  if (drop4.classList == "dropdown_hide") {
    drop4.classList.remove("dropdown_hide");
    console.log("er removed");
  } else if (drop4.classList == "") {
    drop4.classList.add("dropdown_hide");
    console.log("er tilføjet");
  }
}
