import './css/webflow-required-styles.css'
import './css/contactForm.css'
import './css/modal.css'
import './css/modalAnimations.css'
import "./css/webflow.css"

import { setImages } from './js/images'
import {initContactButtons } from "./js/contactFormModule"
import {webflowInit} from "./js/webflowReq"
import {importTypekit} from "./js/typekit"
import {introScreen} from "./js/introScreen"


webflowInit();
setImages();
initContactButtons();
importTypekit();
introScreen();

 




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
