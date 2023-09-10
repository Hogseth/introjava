// Oppgave 1
const removebtn = document.getElementById("remove-btn");
const removetext = document.getElementById("remove");
removebtn.addEventListener("click", () => {
  removetext.style.display = "none";
});

// Oppgave 2
const changebtn = document.getElementById("change-btn");
const changetext = document.getElementById("change");
changebtn.addEventListener("click", () => {
  changetext.innerHTML = "hei";
});

// Oppgave 3
const inputBox = document.getElementById("input");
const inputText = document.getElementById("input-text");
inputBox.addEventListener("keyup", () => {
  inputText.innerHTML = inputBox.value;
});
// Oppgave 4
const myList = ["item one", "item two", "item three"];
const listBtn = document.getElementById("write-list");
const webList = document.getElementById("ul");

listBtn.addEventListener("click", () => {
  myList.forEach((element) => {
    const newElement = document.createElement("li");
    newElement.innerHTML = element;
    webList.appendChild(newElement);
  });
});

// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
