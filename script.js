"use strict";

const p = document.querySelector("p");
const h2 = document.querySelector("h2");

fetch("https://api.adviceslip.com/advice")
  .then((resp) => resp.json())
  .then((data) => {
    h2.innerText = `${h2.innerText} #${data.slip.id}`
      //   .split("")
      //   .join(" ")
      .toUpperCase();
    p.innerText = `${data.slip.advice}`;
  });
