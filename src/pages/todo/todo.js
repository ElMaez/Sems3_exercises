// Oprette en ny opgave med et unikt ID og en beskrivelse.
// Gemme mere end en simpel streng for hver opgave for at øge kompleksiteten. Dette kunne være kvantitet
// (antal) eller anden relevant information.

import { boolean } from "astro:schema";

// Tillade brugerne at markere opgaver som "færdige", hvorefter de flyttes til en "Færdig"-liste.
// Tillade brugerne at fortryde færdiggørelsen af en opgave, så den ryger tilbage til "ToDo"-listen.
// Tillade brugerne at slette opgaver.

// Evt. ekstra funktioner
// Brug localStorage til at gemme opgaverne. Når en bruger opretter en ny opgave,
// sletter en opgave, eller ændrer status for en opgave, skal disse ændringer gemmes i localStorage.
//  Når brugeren besøger appen igen, skal opgaverne hentes fra localStorage, så de stadig kan se deres opgaveliste,
// selv efter at de har lukket og genåbnet browseren.

document.querySelector("#add").addEventListener("click", controller);
document.querySelector("#delete").addEventListener("click", remove);

// MVC model: Controller
function controller() {
  let titel = document.querySelector("#inputTitel").value;
  let inputDescription = document.querySelector("#inputDescription").value;

  localStorage.setItem(titel, inputDescription);
  document.querySelector("#tasksContainer").innerHTML += `<div class="note">
  <input class="checkbox" type="checkbox" />
  <p>${titel}</p>
  </div>`;
  console.log("Hello World : " + titel);
}

function remove() {}
// Vi skal kunne tilføje notes. tjek
// Vi skal kunne ændre dens færdig status.
// Vi skal kunne slette noten.

// MVC model: Model

// MVC model: View (UI)
