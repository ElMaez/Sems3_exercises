// window.addEventListener("load", replace);

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
console.log(curseWords);
const text = document.querySelector("#text").textContent;
console.log(text);
let words = text.split(" ");
console.log(words);

document.querySelector("button").addEventListener("click", replace);
// Tekst: "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning."

// Start med at lave en simpel HTML-struktur. Du skal have et tekstafsnit (<p>) med ovenstående sætning, og en knap, som brugeren kan klikke på for at opdatere teksten med de "gode" ord.

// Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede array. Hvis teksten allerede er opdateret (ingen "dårlige" ord),
// skal der vises en <dialog>, der informerer brugeren om dette. Dette kan laves simpelt med et flag eller avanceret hvor teksten bliver undersøgt for om den indeholder nogle af de dårlige ord,
// og derfor har været igennem profanity filteret.

// Tilføj en event listener til din knap. Når den klikkes, bør din ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.
// Brug evt. CSS til at tildele en gul baggrund til de "gode" ord.
// Husk evt. at kommentere din kode for at forklare, hvordan de forskellige dele fungerer.

function replace() {
  // Jeg skal tjekke om ordet er eller ikke er enten Bad eller Good
  console.log("Clicked");
  words.forEach((word) => {
    console.log("word", word);
    console.log("bad", curseWords.bad);
    // if (word === "var") {
    //   word.replace("var", "XXXXXXXXXX");
    //   console.log(words);
    // }
  });
  // Så skal teksten rettes i P
}
