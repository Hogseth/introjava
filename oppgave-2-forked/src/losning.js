const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// TODO
const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

const userHTML = document.getElementById("users");

const input = "";

const search = () => {
  // opdaterer input fra søkefelt
  const nameInput = updateInput();
  // fjerner alle eksisterende li-tagger
  userHTML.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    const currName = users[i].name.toLowerCase();
    //sjekker om navn starter med input og legger til li-tag
    if (currName.startsWith(nameInput)) {
      const newLi = document.createElement("li");
      newLi.innerHTML = `Navn: ${users[i].name}, Alder: ${users[i].age}`;
      userHTML.appendChild(newLi);
    }
  }
};

const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");

function updateInput() {
  const input = inputName.value.toLowerCase();
  return input;
}
inputName.addEventListener("keyup", search);

const ageFilter = document.getElementById("filter");

const filterAge = () => {
  const age = inputAge.value;

  // fjerner alle eksisterende li-tagger
  userHTML.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    // sjekker om de er eldre en inputalderen
    if (users[i].age >= age) {
      const newLi = document.createElement("li");
      newLi.innerHTML = `Navn: ${users[i].name}, Alder: ${users[i].age}`;
      userHTML.appendChild(newLi);
    }
  }
};

ageFilter.addEventListener("click", filterAge);

search();
