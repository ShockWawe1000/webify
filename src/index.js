import VanillaTilt from 'vanilla-tilt';


import './css/webflow-required-styles.css'
import './css/contactForm.css'
import './css/modal.css'
import './css/modalAnimations.css'
import "./css/webflow.css"
import "./css/tiltingCards.css"
import "./css/gradientCards.css"
import "./css/pricing.css"

import { setImages } from './js/images'
import {initContactButtons } from "./js/contactFormModule"
import {webflowInit} from "./js/webflowReq"
import {introScreen} from "./js/introScreen"
import {tiltCardsLogic} from "./js/tiltCards"
import {initLanguagePicker} from "./js/languagePicker"

webflowInit();
setImages();
initContactButtons();
introScreen();
tiltCardsLogic()


if (typeof window === "undefined") {
    alert("JavaScript is disabled");
} else {
    console.log("JavaScript is enabled");
}



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
