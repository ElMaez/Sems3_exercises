window.addEventListener("load", resetPage);

// Global Arrays

// Her definerer vi en class ved navn EntryContainer.
class EntryContainer {
  // her definerer vi en contructor
  // Den laver en ny instans af typen EntryContainer (linje XX),
  constructor() {
    // jeg difinerer/initialiser propertien ved navn entries
    // til at være sat til et tomt array.
    this.entries = [];
  }

  // Her definerer vi en method som vi har kaldt 'getEntry' med parametret uuid
  getEntry(uuid) {
    // vi laver en for loop
    // først definerer vi en variable 'i' til at være en start værdi på 0

    // vi laver en condition hvor at hvis i er mindre end entries array'ets længde
    // så kører den for loopet.

    // i slutningen af for loop'et så laver vi en increment operator (++)
    // som er at højne værdien af vores variable.
    //(-- er en decrement operator)

    // for loopet stopper når i er højere eller ligmed mængden af objekter der ligger
    // i entries array'et.
    for (let i = 0; i < this.entries.length; i++) {
      // vi laver en variabel som er lig med et objekt fået fra array'et,
      //hvor 'i' definerer hvilken placering i array'et, objektet skal tages fra.
      let entry = this.entries[i];

      // vi har lavet en if statement hvor conditionen er
      // hvis objektet's uuid er lig med parametret uuid

      // om det der == eller === gør ikke en forskel i
      // dette tilfælde da vores uuid og entry.uuid begge er typen string.
      if (entry.uuid == uuid) {
        // når conditionen er mødt så retunerer den objektet.
        return entry;
      }
    }
    console.log("getEntry" + uuid);
  }

  //vi definerer en metode (addEntry)
  addEntry(entry) {
    if (!this.entries.includes(entry)) {
      this.entries.push(entry);
    } else {
      console.log(
        "Du done goofed, du prøvede at tilføje noget der allerede var tilføjet"
      );
    }
  }
  removeEntry(entry) {
    if (this.entries.includes(entry)) {
      let index = this.entries.indexOf(entry);
      this.entries.splice(index, 1);
    } else {
      console.log(
        "Du done goofed, du prøvede at fjerne noget der allerede var fjernet"
      );
    }
  }
  // For at lave vores string json om til objectet EntryContainer
  applyData(json) {
    Object.assign(this, json);
  }
}

let entryContainer = new EntryContainer();

let arr = [];

// Laver en class Entry indeholder
// en constructor som laver en instance af typen (navnet vi har givet et sted)
// med følgende parametre (uuid, content, titel, state)
class Entry {
  constructor(uuid, content, titel, state) {
    // her instancierer vi properties med parametrene
    this.uuid = uuid;
    this.content = content;
    this.titel = titel;
    this.state = state;
  }
}
// knapper
document.querySelector("#done").addEventListener("click", () => {
  changeState("done");
});
document.querySelector("#ongoing").addEventListener("click", () => {
  changeState("todo");
});
document.querySelector("#add").addEventListener("click", controller);

document.querySelector("#delete").addEventListener("click", remove);

function controller() {
  let titel = document.querySelector("#inputTitel").value;
  let inputDescription = document.querySelector("#inputDescription").value;
  let state = document.getElementById("filter").value;

  // Jeg defineret en variabel som gemmer resultatet af metode kaldet randomUUID.
  let uuid = self.crypto.randomUUID();

  // Her definerer jeg en varibel som krearer/instansierer et nyt objekt
  // af typen Entry som er en Class der indeholder en constructor der modtager
  // parametre og gemmer den information i properties.
  let entry = new Entry(uuid, inputDescription, titel, state);

  entryContainer.addEntry(entry);

  console.log(uuid);
  console.log("Hello World : " + entry.uuid);
  console.log(entryContainer);
  InsertToHtml(entry);
  save();
}
function remove() {
  console.log("remove");
  arr.forEach((eachUuid) => {
    document.getElementById(`${eachUuid}`).remove();
    entryContainer.removeEntry(entryContainer.getEntry(eachUuid));
  });
  arr = [];
  console.log(entryContainer);
  save();
}

function changeState(state) {
  console.log("changeState" + state);
  arr.forEach((eachUuid) => {
    document.getElementById(`${eachUuid}`).remove();
    let entry = entryContainer.getEntry(eachUuid);
    entry.state = state;
  });
  arr = [];
  console.log(entryContainer);
  save();
}

function handleClick(checkbox, uuid) {
  if (checkbox.checked) {
    arr.push(uuid);
    console.log(`adding to array ${checkbox.checked}, ${uuid}`);
  } else if (arr.includes(uuid)) {
    let index = arr.indexOf(uuid);
    arr.splice(index, 1);
  }
  console.log(arr);
}

function InsertToHtml(entry) {
  document.querySelector(
    "#tasksContainer"
  ).innerHTML += `<div id="${entry.uuid}" class="note" onclick='viewEntry("${entry.uuid}");' >
    <input  class="checkbox" type="checkbox" onclick='handleClick(this, "${entry.uuid}");' />
    <p>${entry.titel}</p>
    </div>`;
}
function viewEntry(uuid) {
  let entry = entryContainer.getEntry(uuid);
  let inputTitel = document.getElementById("inputTitel");
  let inputDescription = document.getElementById("inputDescription");

  inputTitel.value = entry.titel;
  inputDescription.value = entry.content;
  console.log(uuid, inputTitel, inputDescription, entry);
}
function resetPage() {
  let inputTitel = document.getElementById("inputTitel");
  let inputDescription = document.getElementById("inputDescription");

  inputTitel.value = "";
  inputDescription.value = "";

  entryContainer.entries.forEach((entry) => {
    let entryHTML = document.getElementById(`${entry.uuid}`);
    if (entryHTML != null) {
      entryHTML.remove();
    }
  });
  let stateValue = document.getElementById("filter").value;
  if (stateValue == "done") {
    document.getElementById("done").style.display = "none";
    document.getElementById("ongoing").style.display = "block";
  } else if (stateValue == "todo") {
    document.getElementById("done").style.display = "block";
    document.getElementById("ongoing").style.display = "none";
  }

  console.log(stateValue);
  load();
}

function save() {
  localStorage.setItem("savedItems", JSON.stringify(entryContainer));
  console.log("save");
}
function load() {
  let savedItems = localStorage.getItem("savedItems");
  let stateValue = document.getElementById("filter").value;

  if (savedItems != null) {
    entryContainer.applyData(JSON.parse(savedItems));
    entryContainer.entries.forEach((entry) => {
      if (stateValue == entry.state) {
        InsertToHtml(entry);
      }
    });
  }
  console.log("stateValue : " + stateValue);
}
