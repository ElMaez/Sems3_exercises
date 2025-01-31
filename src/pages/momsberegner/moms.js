const output = document.querySelector("#priceWmoms");
const button = document.querySelector("button");

let input = document.querySelector("#price").value;
let taxprocent = 25;

button.addEventListener("click", calc);

//   beløb uden moms * 0.25 = momsen
// beløb + moms
function calc(tax, taxamount) {
  //   input tallet er sat til at være typen number af input
  input = parseInt(input);

  //   moms er sat til at være momsprocent / 100
  tax = taxprocent / 100;

  //   taxamount er sat til at være ligmed input * moms
  taxamount = input * tax;

  //   taxresult er sat til at være ligmed input + taxamount
  taxresult = input + taxamount;

  output.textContent = taxresult;
  console.log("taxresult = ", taxresult);
}
