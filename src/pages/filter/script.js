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
const body = document.querySelector("body");
body.innerHTML += `<button id="allbt">Alle</button>`;
body.innerHTML += `<button id="rugbt">Fuel</button>`;
body.innerHTML += `<button id="pasbt">Passengers</button>`;
body.innerHTML += `<button id="jonasbt">Owned By</button>`;
body.innerHTML += `<button id="elbt">Electric</button>`;

const Allbt = document.querySelector("#allbt");
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

Allbt.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

const AllIsEl = vehicles.filter((veh) => veh.isElectric === true);

const Elbt = document.querySelector("#elbt");
Elbt.addEventListener("click", () => {
  showTheseVehicles(AllIsEl);
});

const TwoPassengers = vehicles.filter((veh) => veh.passengers === 2);

const Pasbt = document.querySelector("#pasbt");
Pasbt.addEventListener("click", () => {
  showTheseVehicles(TwoPassengers);
});

const Jonas = vehicles.filter((veh) => veh.ownedBy === "Jonas");
const Jonasbt = document.querySelector("#jonasbt");
Jonasbt.addEventListener("click", () => {
  showTheseVehicles(Jonas);
});

const Rug = vehicles.filter((veh) => veh.fuel === "Rugbrød");
const Rugbt = document.querySelector("#rugbt");
Rugbt.addEventListener("click", () => {
  showTheseVehicles(Rug);
});

//  Style tabellen endnu mere

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  // Vi foreacher indholdet af arrayet og spytter vores template ud med information
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
    <td>${each.type}</td>
    <td>${each.fuel}</td>
    <td>${each.passengers}</td> 
    <td>${each.stops}</td>
    <td>${each.ownedBy}</td>
    <td>${each.isElectric}</td>
    <td>${each.isTandem}</td>
    </tr>`;
  });

  //  Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;

  // Vi vil gerne have fat i hver td, men for at gøre dette  skal tabellen først være lavet
  // + vi skal have selecte den specifikke td
  const allCells = document.querySelectorAll("td");
  allCells.forEach((cell) => {
    if (cell.textContent === "undefined") {
      cell.textContent = "";
    }
  });
}
