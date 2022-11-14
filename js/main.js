"use strict";
console.log("main.js");

const set1El = document.getElementById("set1");
const set2El = document.getElementById("set2");
const get1El = document.getElementById("get1");
const get2El = document.getElementById("get2");

const userId = "u1234";

const toDo = [
  { title: "do sports", done: false },
  { title: "buy bananas", done: true },
  { title: "see birds", done: false },
];

set1El.addEventListener("click", () => {
  document.cookie = `user=${userId};`;
  document.cookie = `name=James`;
  document.cookie = `age=25`;
});
//let toShowAd = true;
set2El.onclick = function () {
  const now = new Date();
  const future = new Date(+now + 20 * 1000);
  let cookieString = `toShow=true; expires=${future.toUTCString()};`;
  document.cookie = cookieString;
};

get1El.addEventListener("click", () => {
  const allCookies = document.cookie;
  console.log("allCookies ===", allCookies);
  parseCookie("age");
});

function setToShowCookie() {}

function parseCookie(cookieName) {
  const cookieArr = document.cookie.split("; ");
  console.log("cookieArr ===", cookieArr);
  //const [key, value] = cookieArr[0].split("=");

  const cookieArrOfObj = cookieArr.map((cString) => {
    const [key, value] = cString.split("=");
    return { [key]: value };
  });
  console.log("cookieArrOfObj ===", cookieArrOfObj);
  const foundCookie = cookieArrOfObj.find((cObj) => cObj[cookieName]);
  console.log("foundCookie ===", foundCookie[cookieName]);
  if (foundCookie) {
    return foundCookie[cookieName];
  }
  return false;
}

if (!parseCookie("toShow")) {
  alert("buy");
  setToShowCookie();
}
