"use strict";
console.log("practice.js");

const inputEl = document.getElementById("inp");
const btnEl = document.getElementById("btn");
const h1El = document.getElementById("h1");

initNames();

btnEl.addEventListener("click", () => {
  const inputElValue = inputEl.value.trim();
  localStorage.setItem("name", inputElValue);
  addNameToH1(inputElValue);
  addNameToTitle(inputElValue);
});

function addNameToH1(newName) {
  h1El.textContent = newName;
}
function addNameToTitle(newName) {
  document.title = newName;
}
function initNames() {
  const foundName = localStorage.getItem("name");
  if (foundName !== null) {
    addNameToH1(foundName);
    addNameToTitle(foundName);
  }
}

const colors = ["tomato", "blue", "green", "yellow"];

document.body.style.backgroundColor = localStorage.getItem("color");

const selectEl = document.getElementById("colors");
const selectedOption = document.createElement("option");
selectedOption.value = "";
selectedOption.selected;
selectedOption.disabled;
selectEl.append(selectedOption);
colors.forEach((color) => {
  const colorEl = document.createElement("option");
  colorEl.textContent = color;
  selectEl.append(colorEl);
});

const pEl = document.createElement("p");
document.body.prepend(pEl);

pEl.textContent = `Pasirinkta ${localStorage.getItem("color")} spalva`;
selectEl.value = localStorage.getItem("color");

selectEl.addEventListener("change", (event) => {
  if (selectEl.value !== "") {
    document.body.style.backgroundColor = event.target.value;
    localStorage.setItem("color", selectEl.value);
    pEl.textContent = `Pasirinkta ${selectEl.value} spalva`;
    localStorage.setItem("color", selectEl.value);
  }
});

function makeCookie(name, value) {}
