"use strict";
console.log("main.js");

const set1El = document.getElementById("set1");
const set2El = document.getElementById("set2");
const get1El = document.getElementById("get1");
const get2El = document.getElementById("get2");

const userId = "u1234";

set1El.addEventListener("click", () => {
  localStorage.setItem("user", userId);
});
get1El.addEventListener("click", () => {
  const userIdInStorage = localStorage.getItem("user");
  if (userIdInStorage !== null) {
    console.log("userIdInStorage ===", userIdInStorage);
  } else {
    console.log("user not found");
  }
});

const toDo = [
  { title: "do sports", done: false },
  { title: "buy bananas", done: true },
  { title: "see birds", done: false },
];

console.log(JSON.stringify(toDo, null, 2));

set2El.addEventListener("click", () => {
  localStorage.setItem("todos", JSON.stringify(toDo, null, 2));
  document.body.append(JSON.stringify(toDo, null, 2));
});

get2El.addEventListener("click", () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  console.log("todos ===", todos);
});

//localStorage.removeItem("user");
//localStorage.clear();
