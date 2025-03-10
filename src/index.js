import VanillaTilt from 'vanilla-tilt';


import './css/webflow-required-styles.css'
import './css/contactForm.css'
import './css/modal.css'
import './css/modalAnimations.css'
import "./css/webflow.css"
import "./css/tiltingCards.css"
import "./css/gradientCards.css"
import "./css/pricing.css"
import "./css/languagePicker.css"
import "./css/carousel.css"

import { setImages } from './js/images'
import {initContactButtons } from "./js/contactFormModule"
import {webflowInit} from "./js/webflowReq"
import {introScreen} from "./js/introScreen"
import {tiltCardsLogic} from "./js/tiltCards"
import {cursorInit} from './js/cursor';
import { initCarousel } from './js/carousel';
import { isHandheld } from './js/isHandgeld';

import "./sitemap.xml"
import "./robots.txt"

const isHandheldVar = isHandheld();

    setImages(isHandheldVar);
    initContactButtons();
    cursorInit(isHandheldVar)
    var tempElement =  document.getElementById('intro');
    if (typeof(tempElement) != 'undefined' && tempElement != null)
      {
    
     
        introScreen(isHandheldVar);
        webflowInit();
        tiltCardsLogic()
        initCarousel();
    
    }







if (typeof window === "undefined") {
    alert("JavaScript is disabled");
} else {
    console.log("JavaScript is enabled");
}



window.onbeforeunload = function (e) {
    localStorage.clear();
};




