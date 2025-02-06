const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

//  Lav nogle hardcodede filtreringer:

// en der viser alle el drevne fartøjer

//  alle fartøjer el-drevne fartøjer ejet af Jonas

//  alle rugbrøds drevne fartøjer med plads til mere end en.

//  Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)
// annonym function ()=>{sæt ny function her} detter er en måde at kunne bruge parametre i en addEventListener.
document.querySelectorAll("button").forEach((btn) => {
  console.log("btn", btn.dataset.filter);

  btn.addEventListener("click", () => {
    filterHandler(btn.dataset.filter);
  });
});
function filterHandler(filter) {
  console.log("filterHandler", filter);
  let filterArr;
  switch (filter) {
    case "all":
      filterArr = vehicles;
      break;
    case "isElectric":
      filterArr = vehicles.filter((vehicles) => vehicles.isElectric === true);
      break;
    case "moreThanOnePass":
      filterArr = vehicles.filter((vehicles) => vehicles.passengers === 2);
      break;
    case "jonasOwnedElVeh":
      filterArr = vehicles.filter(
        (vehicles) =>
          vehicles.ownedBy === "Jonas" && vehicles.isElectric === true
      );
      break;
    case "ryebread":
      filterArr = filter((vehicles) => vehicles.fuel === "Rugbrød");
      break;
  }
  showTheseVehicles(filterArr);
}

const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

//  Style tabellen endnu mere

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  // Vi foreacher indholdet af arrayet og spytter vores template ud med information
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
    <td>${each.type}</td>
    <td>${each.isTandem}</td>
    <td>${each.fuel}</td>
    <td>${each.passengers}</td> 
    <td>${each.stops}</td>
    <td>${each.ownedBy}</td>
    <td>${each.isElectric}</td>
    </tr>`;
  });

  //  Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;

  // Vi vil gerne have fat i hver td, men for at gøre dette  skal tabellen først være lavet
  // + vi skal have selecte den specifikke td
  // document.querySelectorAll("td").allCells.forEach((cell) => {
  //   if (cell.textContent === "undefined") {
  //     cell.textContent = "";
  //   }
  // });
}
// En anden måde at løse opgaven:
// arr.forEach((each) => {
//   tbodyPointer.innerHTML += `<tr>
//   <td>${beautify(each.type)}</td>
//   <td>${beautify(each.isTandem)}</td>
//   <td>${beautify(each.fuel)}</td>
//   <td>${beautify(each.passengers)}</td>
//   <td>${beautify(each.stops)}</td>
//   <td>${beautify(each.ownedBy)}</td>
//   <td>${beautify(each.isElectric)}</td>
//   </tr>`;
// function beautify(str) {
//   if (str === undefined) {
//     str = "-";
//   }
//   if (str === true) {
//     str = "X";
//   }
//   return str;
// }
// Metoden med switch

// function beautify(str) {
// switch(str){
//   case undefined:
//     str ="-"
//     break;
//     case true:
//       str ="X";
//       break;
// }
// }
// });
