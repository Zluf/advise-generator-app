"use strict";

const p = document.querySelector("p");
const h2 = document.querySelector("h2");
const btn = document.querySelector(".btn-refresh");
const main = document.querySelector("main");

const fetchData = function () {
  //   const resp = await fetch("https://api.adviceslip.com/advice");
  //   const data = await resp.json();
  //   console.log(data);
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((resp) => resp.json())
    .then((data) => {
      h2.innerHTML = `Advice #${data.slip.id}`;
      p.innerHTML = `"${data.slip.advice}"`;
      console.log(data);
    });
};

fetchData();

btn.addEventListener("click", function () {
  h2.style.opacity = 0;
  p.style.opacity = 0;
  setTimeout(function () {
    fetchData();
  }, 400);
  setTimeout(function () {
    h2.style.opacity = 1;
    p.style.opacity = 1;
  }, 500);
});
