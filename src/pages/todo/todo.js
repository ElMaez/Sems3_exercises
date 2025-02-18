window.addEventListener("load", resetPage);
// Oprette en ny opgave med et unikt ID og en beskrivelse.
// Gemme mere end en simpel streng for hver opgave for at øge kompleksiteten. Dette kunne være kvantitet
// (antal) eller anden relevant information.

// Tillade brugerne at markere opgaver som "færdige", hvorefter de flyttes til en "Færdig"-liste.
// Tillade brugerne at fortryde færdiggørelsen af en opgave, så den ryger tilbage til "ToDo"-listen.
// Tillade brugerne at slette opgaver.

// Evt. ekstra funktioner
// Brug localStorage til at gemme opgaverne. Når en bruger opretter en ny opgave,
// sletter en opgave, eller ændrer status for en opgave, skal disse ændringer gemmes i localStorage.
//  Når brugeren besøger appen igen, skal opgaverne hentes fra localStorage, så de stadig kan se deres opgaveliste,
// selv efter at de har lukket og genåbnet browseren.

// Global Arrays
class EntryContainer {
  constructor() {
    this.entries = [];
  }
  getEntry(uuid) {
    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];
      if (entry.uuid == uuid) {
        return entry;
      }
    }
    console.log("getEntry" + uuid);
  }
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
class Entry {
  constructor(uuid, content, titel, state) {
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
  let uuid = self.crypto.randomUUID();
  let state = document.getElementById("filter").value;

  console.log(uuid);

  let entry = new Entry(uuid, inputDescription, titel, state);
  entryContainer.addEntry(entry);

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
