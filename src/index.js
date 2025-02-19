import './css/webflow-required-styles.css'
import './css/contactForm.css'
import './css/modal.css'
import './css/modalAnimations.css'
import "./css/webflow.css"
import "./css/tiltingCards.css"
import VanillaTilt from 'vanilla-tilt';

import { setImages } from './js/images'
import {initContactButtons } from "./js/contactFormModule"
import {webflowInit} from "./js/webflowReq"
import {introScreen} from "./js/introScreen"


webflowInit();
setImages();
initContactButtons();
introScreen();

 

if (typeof window === "undefined") {
    alert("JavaScript is disabled");
} else {
    console.log("JavaScript is enabled");
}


const rootCanvas = document.querySelector("article");
let cardEl = document.querySelector(".card");

// Day & Nightmode

const dayToggle = document.querySelector(".day");
const nightToggle = document.querySelector(".night");

dayToggle.onclick = function (e) {
  rootCanvas.setAttribute("data-theme", "light");
  dayToggle.classList.add("hidden");
  nightToggle.classList.remove("hidden");
};
nightToggle.onclick = function (e) {
  rootCanvas.setAttribute("data-theme", "dark");
  dayToggle.classList.remove("hidden");
  nightToggle.classList.add("hidden");
};

cardEl.addEventListener("mousemove", (e) => {
  const { x, y } = cardEl.getBoundingClientRect();
  cardEl.style.setProperty("--x", e.clientX - x);
  cardEl.style.setProperty("--y", e.clientY - y);
});


// // modals
// function openModal(content) {
//   const modal = document.getElementById("popup-modal");
//   const modalContent = document.getElementById("modal-content");
//   modalContent.innerHTML = content;

//   modal.style.display = "flex";
// }

// document.getElementById("close-modal").addEventListener("click", function () {
//   document.getElementById("popup-modal").style.display = "none";
// });

// document.querySelectorAll(".work-card").forEach(function (card) {
//   card.addEventListener("click", function () {
//     const img = card.querySelector("img");
//     const content = `
//       <img src="${img.src}" alt="Popup Image">
//     `;
//     openModal(content);
//   });
// });
