/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contactForm.js":
/*!*******************************!*\
  !*** ./src/js/contactForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactFormLogic: () => (/* binding */ contactFormLogic),
/* harmony export */   contactFormLogicModal: () => (/* binding */ contactFormLogicModal)
/* harmony export */ });
function contactFormLogic() {
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";
    var sent = false;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    }).then(async response => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
        sent = true;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    }).catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    }).then(function () {
      form.reset();
      setTimeout(() => {
        if (sent == false) result.innerHTML = "TRY <br> AGAIN";else result.innerHTML = "THANK <br> YOU";
      }, 3000);
    });
  });
}
function contactFormLogicModal(formId, resultId) {
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";
    var sent = false;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    }).then(async response => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
        sent = true;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    }).catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    }).then(function () {
      form.reset();
      setTimeout(() => {
        if (sent == false) result.innerHTML = "TRY <br> AGAIN";else result.innerHTML = "THANK <br> YOU <3";
      }, 3000);
    });
  });
}

/***/ }),

/***/ "./src/js/contactFormModule.js":
/*!*************************************!*\
  !*** ./src/js/contactFormModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initContactButtons: () => (/* binding */ initContactButtons)
/* harmony export */ });
/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactForm */ "./src/js/contactForm.js");

const buttons = document.querySelectorAll(".openContactModal");
const modal = document.getElementById("modalContainer");
const modalContent = document.getElementById("modalContent");
let closeButton1, closeButton2;
function openContactModal(message) {
  const contactFormHTML = `
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <button class="screen-header-button close" id="closeButton1"></button>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title" id="resultModal">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT : +389 71 878 598
            <br>webify.macedonia@gmail.com
            </div>
        </div>
        <div class="screen-body-item">
          <form id="formModal" class="app-form" method="POST">
            <input type="hidden" name="access_key" value="40d910f7-a3af-41a9-a081-7323558c24e0">

              <div class="app-form-group">
                <input class="app-form-control"  name="name" placeholder="NAME"  autocomplete="given-name"  required>
              </div>
              
              <div class="app-form-group">
                <input class="app-form-control" name="email" placeholder="EMAIL" autocomplete="email"  required>
              </div>
              <div class="app-form-group">
                <input class="app-form-control" name="number" placeholder="CONTACT NO" autocomplete="tel"  >
              </div>

              <div class="app-form-group message">
                <textarea  class="app-form-control" name="mesage" placeholder=${message}  autocomplete="off" required></textarea >
              </div>
            <div class="app-form-group buttons">
              <button type="button" class="app-form-button" id="closeButton2">CANCEL</button>
              <button type="submit" class="app-form-button">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="credits">designed by Webify</div>
  `;
  modalContent.innerHTML = contactFormHTML;

  // Set initial hidden styles before showing
  modal.classList.remove("hidden");
  modal.style.opacity = "0"; // Start fully transparent
  modalContent.style.transform = "translate(50vw, 50vh) scale(0)";
  modalContent.style.opacity = "0"; // Start fully transparent

  // Force reflow to apply initial styles before transition
  void modalContent.offsetWidth;

  // Animate the modal opening
  modal.style.transition = "opacity 0.3s ease-in-out";
  modalContent.style.transition = "transform 0.4s ease-out, opacity 0.3s ease-out";
  setTimeout(() => {
    modal.style.opacity = "1"; // Fade in background
    modalContent.style.transform = "translate(0, 0) scale(1)";
    modalContent.style.opacity = "1"; // Fade in modal content
  }, 10); // Small delay to ensure animation runs

  // Reattach close button listeners
  closeButton1 = document.getElementById("closeButton1");
  closeButton2 = document.getElementById("closeButton2");
  closeButton1.addEventListener("click", closeModal);
  closeButton2.addEventListener("click", closeModal);
  (0,_contactForm__WEBPACK_IMPORTED_MODULE_0__.contactFormLogicModal)("formModal", "resultModal");
}
function closeModal() {
  if (!modalContent) return;
  modalContent.style.transition = "transform 0.4s ease-in-out, opacity 0.3s ease-in-out";
  modal.style.transition = "opacity 0.3s ease-in-out";
  modalContent.style.transform = "translate(50vw, 50vh) scale(0)";
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.classList.add("hidden");
    modalContent.innerHTML = "";
    modalContent.style.transform = "translate(0, 0) scale(1)";
    modal.style.opacity = "1";
  }, 400); // Match this to the transition duration
}
function initContactButtons() {
  buttons.forEach(btn => {
    const message = btn.dataset.message || "MESSAGE";
    btn.addEventListener("click", event => {
      openContactModal(message);
    });
  });
  window.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setImages: () => (/* binding */ setImages)
/* harmony export */ });
/* harmony import */ var _image_binance_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/binance.png */ "./src/image/binance.png");
/* harmony import */ var _image_btc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/btc.png */ "./src/image/btc.png");
/* harmony import */ var _image_eth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/eth.png */ "./src/image/eth.png");
/* harmony import */ var _image_sol_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/sol.png */ "./src/image/sol.png");
/* harmony import */ var _image_trustpilot_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/trustpilot.png */ "./src/image/trustpilot.png");
/* harmony import */ var _image_moonpay_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/moonpay.png */ "./src/image/moonpay.png");
/* harmony import */ var _image_clutch_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image/clutch.svg */ "./src/image/clutch.svg");
/* harmony import */ var _image_logo222_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/logo222.svg */ "./src/image/logo222.svg");
/* harmony import */ var _image_refund_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image/refund.svg */ "./src/image/refund.svg");
/* harmony import */ var _image_team_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image/team.svg */ "./src/image/team.svg");
/* harmony import */ var _image_crown_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image/crown.svg */ "./src/image/crown.svg");
/* harmony import */ var _image_webify_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image/webify_logo.svg */ "./src/image/webify_logo.svg");
/* harmony import */ var _image_load_animation_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image/load_animation.svg */ "./src/image/load_animation.svg");
/* harmony import */ var _image_products_big_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../image/products/big.webp */ "./src/image/products/big.webp");
/* harmony import */ var _image_products_long1_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../image/products/long1.webp */ "./src/image/products/long1.webp");
/* harmony import */ var _image_products_long2_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../image/products/long2.webp */ "./src/image/products/long2.webp");
/* harmony import */ var _image_products_long3_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../image/products/long3.webp */ "./src/image/products/long3.webp");
/* harmony import */ var _image_products_square1_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../image/products/square1.webp */ "./src/image/products/square1.webp");
/* harmony import */ var _image_products_square2_webp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../image/products/square2.webp */ "./src/image/products/square2.webp");
/* harmony import */ var _image_intro_gif__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../image/intro.gif */ "./src/image/intro.gif");




















function createImageDiv(element, id, setClass, sizes) {
  if (document.getElementById(id)) {
    const tempImg = new Image();
    tempImg.src = element;
    tempImg.classList.add(setClass);
    tempImg.setAttribute('loading', 'lazy');
    tempImg.setAttribute('alt', id);
    if (sizes) {
      tempImg.setAttribute('sizes', sizes);
    }
    var parentElement = document.getElementById(id);
    parentElement.append(tempImg);
  } else console.log("ID doest exist:" + id);
}
function createGifDiv(element, id, setClass) {
  setTimeout(() => {
    const svgObject = document.createElement("object");
    svgObject.id = "animated-svg";
    svgObject.type = "image/svg+xml";
    svgObject.data = element;
    svgObject.classList.add(setClass);
    svgObject.style.width = "100vw"; // Make it fit the screen horizontally
    svgObject.style.height = "100vh"; // Make it fit the screen vertically
    svgObject.style.position = "absolute"; // Position it absolutely within the container
    svgObject.style.top = "0"; // Align to the top of the parent container
    svgObject.style.left = "0"; // Align to the left of the parent container

    const parentElement = document.getElementById(id);
    parentElement.append(svgObject);
  }, 700);
}
function createMultipleImageDiv(element, id, setClass) {
  document.querySelectorAll(id).forEach(el => {
    const tempImg = new Image();
    tempImg.src = element;
    tempImg.classList.add(setClass);
    el.append(tempImg);
  });
}
function setImages() {
  //    createImageDiv(binance, "binanceImg", "image-100")
  //    createImageDiv(moonpay, "moonpayImg", "image-100")
  //    createImageDiv(btc, "btcImg", "image-100")
  //    createImageDiv(sol, "solImg", "image-100")

  createImageDiv(_image_webify_logo_svg__WEBPACK_IMPORTED_MODULE_11__["default"], "webify_logo", "webifyLogo");
  createImageDiv(_image_team_svg__WEBPACK_IMPORTED_MODULE_9__["default"], "teamImg", "image-100");
  createImageDiv(_image_refund_svg__WEBPACK_IMPORTED_MODULE_8__["default"], "refundImg", "image-100");
  createImageDiv(_image_trustpilot_png__WEBPACK_IMPORTED_MODULE_4__, "trustpilotImg", "image-100");
  createImageDiv(_image_crown_svg__WEBPACK_IMPORTED_MODULE_10__["default"], "crownImg", "image-100");
  createImageDiv(_image_webify_logo_svg__WEBPACK_IMPORTED_MODULE_11__["default"], "webifyLogoImg2", "webifyLogo");
  createImageDiv(_image_intro_gif__WEBPACK_IMPORTED_MODULE_19__, "animatedLogo", "animatedLogo");
  createImageDiv(_image_products_big_webp__WEBPACK_IMPORTED_MODULE_13__, "bigProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw");
  createImageDiv(_image_products_long1_webp__WEBPACK_IMPORTED_MODULE_14__, "long1ProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw");
  createImageDiv(_image_products_long2_webp__WEBPACK_IMPORTED_MODULE_15__, "long2ProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw");
  createImageDiv(_image_products_long3_webp__WEBPACK_IMPORTED_MODULE_16__, "long3ProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw");
  createImageDiv(_image_products_square1_webp__WEBPACK_IMPORTED_MODULE_17__, "square1ProductShowcase", "image-100", "(max-width: 479px) 44vw, (max-width: 767px) 45vw, 22vw");
  createImageDiv(_image_products_square2_webp__WEBPACK_IMPORTED_MODULE_18__, "square2ProdProductShowcase", "image-100", "(max-width: 479px) 44vw, (max-width: 767px) 45vw, 22vw");
  createGifDiv(_image_load_animation_svg__WEBPACK_IMPORTED_MODULE_12__["default"], "loadingSvg", "transition");

  // window.onload= createMultipleImageDiv(project,".projectImg");
}

/***/ }),

/***/ "./src/js/introScreen.js":
/*!*******************************!*\
  !*** ./src/js/introScreen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   introScreen: () => (/* binding */ introScreen)
/* harmony export */ });
function endIntro() {
  intro.style.display = "none";
  // setTimeout(()=>{
  //     let intro = document.getElementById("intro")
  //     let logo = document.getElementById("animatedLogo")
  //     intro.style.backgroundColor = "rgba(0,0,0,0)"
  //     logo.style.opacity = 0;
  //     window.scrollTo(0,0)
  //     setTimeout(()=>{
  //       intro.style.display = "none"
  //       window.scrollTo(0,0)
  //     },1000)
  // },4300)
}
function introScreen() {
  if (document.readyState !== 'loading') {
    endIntro();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      endIntro();
    });
  }
}

/***/ }),

/***/ "./src/js/tiltCards.js":
/*!*****************************!*\
  !*** ./src/js/tiltCards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tiltCardsLogic: () => (/* binding */ tiltCardsLogic)
/* harmony export */ });
function tiltCardsLogic() {
  let cardEls = document.getElementsByClassName("card");
  Array.from(cardEls).forEach(cardEl => {
    cardEl.addEventListener("mousemove", e => {
      const {
        x,
        y
      } = cardEl.getBoundingClientRect();
      cardEl.style.setProperty("--x", e.clientX - x);
      cardEl.style.setProperty("--y", e.clientY - y);
    });
  });
}

/***/ }),

/***/ "./src/js/webflowReq.js":
/*!******************************!*\
  !*** ./src/js/webflowReq.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   webflowInit: () => (/* binding */ webflowInit)
/* harmony export */ });
function webflowInit() {
  try {
    Typekit.load();
  } catch (e) {}
  !function (o, c) {
    var n = c.documentElement,
      t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch");
  }(window, document);
  let typeSplit = new SplitType(".heading", {
    types: "words, chars",
    tagName: "span"
  });
  $(".heading-wrap").each(function (index) {
    let headings = $(this).find(".heading");
    let tl = gsap.timeline({
      repeat: -1
    });
    tl.set($(this), {
      opacity: 1
    });
    headings.each(function (index) {
      if (index > 0) {
        tl.from($(this).find(".char"), {
          yPercent: 100,
          stagger: {
            amount: 0.4
          },
          duration: 0.4
        }, "<0.1");
      }
      if (index < headings.length - 1) {
        tl.to($(this).find(".char"), {
          delay: 1,
          yPercent: -150,
          stagger: {
            amount: 0.4
          },
          duration: 0.4
        });
      }
    });
  });
}

/***/ }),

/***/ "./src/image/clutch.svg":
/*!******************************!*\
  !*** ./src/image/clutch.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cd2118648307be5fb0113ad66f414d93.svg");

/***/ }),

/***/ "./src/image/crown.svg":
/*!*****************************!*\
  !*** ./src/image/crown.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "780c5da1adac23fa4347ee46eb6f43d6.svg");

/***/ }),

/***/ "./src/image/load_animation.svg":
/*!**************************************!*\
  !*** ./src/image/load_animation.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b6b2f27b5799d6910113702424035bac.svg");

/***/ }),

/***/ "./src/image/logo222.svg":
/*!*******************************!*\
  !*** ./src/image/logo222.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a3c6e6e000d5026006f840cad4393ab2.svg");

/***/ }),

/***/ "./src/image/refund.svg":
/*!******************************!*\
  !*** ./src/image/refund.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "21f595b54e04d026ca1a496f30184be1.svg");

/***/ }),

/***/ "./src/image/team.svg":
/*!****************************!*\
  !*** ./src/image/team.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ae4d3bd63753df35edcc59e1dc2bf916.svg");

/***/ }),

/***/ "./src/image/webify_logo.svg":
/*!***********************************!*\
  !*** ./src/image/webify_logo.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a3c6e6e000d5026006f840cad4393ab2.svg");

/***/ }),

/***/ "./src/css/contactForm.css":
/*!*********************************!*\
  !*** ./src/css/contactForm.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/gradientCards.css":
/*!***********************************!*\
  !*** ./src/css/gradientCards.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/languagePicker.css":
/*!************************************!*\
  !*** ./src/css/languagePicker.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/modalAnimations.css":
/*!*************************************!*\
  !*** ./src/css/modalAnimations.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/pricing.css":
/*!*****************************!*\
  !*** ./src/css/pricing.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/tiltingCards.css":
/*!**********************************!*\
  !*** ./src/css/tiltingCards.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/webflow-required-styles.css":
/*!*********************************************!*\
  !*** ./src/css/webflow-required-styles.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/webflow.css":
/*!*****************************!*\
  !*** ./src/css/webflow.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-tilt/lib/vanilla-tilt.js ***!
  \*******************************************************/
/***/ ((module) => {



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.8.1
 */

var VanillaTilt = function () {
  function VanillaTilt(element) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, VanillaTilt);

    if (!(element instanceof Node)) {
      throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
    }

    this.width = null;
    this.height = null;
    this.clientWidth = null;
    this.clientHeight = null;
    this.left = null;
    this.top = null;

    // for Gyroscope sampling
    this.gammazero = null;
    this.betazero = null;
    this.lastgammazero = null;
    this.lastbetazero = null;

    this.transitionTimeout = null;
    this.updateCall = null;
    this.event = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);

    this.reverse = this.settings.reverse ? -1 : 1;
    this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
    this.gyroscopeSamples = this.settings.gyroscopeSamples;

    this.elementListener = this.getElementListener();

    if (this.glare) {
      this.prepareGlare();
    }

    if (this.fullPageListening) {
      this.updateClientSize();
    }

    this.addEventListeners();
    this.reset();

    if (this.resetToStart === false) {
      this.settings.startX = 0;
      this.settings.startY = 0;
    }
  }

  VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  };

  /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */


  VanillaTilt.prototype.getElementListener = function getElementListener() {
    if (this.fullPageListening) {
      return window.document;
    }

    if (typeof this.settings["mouse-event-element"] === "string") {
      var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

      if (mouseEventElement) {
        return mouseEventElement;
      }
    }

    if (this.settings["mouse-event-element"] instanceof Node) {
      return this.settings["mouse-event-element"];
    }

    return this.element;
  };

  /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */


  VanillaTilt.prototype.addEventListeners = function addEventListeners() {
    this.onMouseEnterBind = this.onMouseEnter.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseLeaveBind = this.onMouseLeave.bind(this);
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

    this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

    if (this.glare || this.fullPageListening) {
      window.addEventListener("resize", this.onWindowResizeBind);
    }

    if (this.gyroscope) {
      window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    }
  };

  /**
   * Method remove event listeners from current this.elementListener
   */


  VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

    if (this.gyroscope) {
      window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
    }

    if (this.glare || this.fullPageListening) {
      window.removeEventListener("resize", this.onWindowResizeBind);
    }
  };

  VanillaTilt.prototype.destroy = function destroy() {
    clearTimeout(this.transitionTimeout);
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.element.style.willChange = "";
    this.element.style.transition = "";
    this.element.style.transform = "";
    this.resetGlare();

    this.removeEventListeners();
    this.element.vanillaTilt = null;
    delete this.element.vanillaTilt;

    this.element = null;
  };

  VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
    if (event.gamma === null || event.beta === null) {
      return;
    }

    this.updateElementPosition();

    if (this.gyroscopeSamples > 0) {
      this.lastgammazero = this.gammazero;
      this.lastbetazero = this.betazero;

      if (this.gammazero === null) {
        this.gammazero = event.gamma;
        this.betazero = event.beta;
      } else {
        this.gammazero = (event.gamma + this.lastgammazero) / 2;
        this.betazero = (event.beta + this.lastbetazero) / 2;
      }

      this.gyroscopeSamples -= 1;
    }

    var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
    var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

    var degreesPerPixelX = totalAngleX / this.width;
    var degreesPerPixelY = totalAngleY / this.height;

    var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
    var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

    var posX = angleX / degreesPerPixelX;
    var posY = angleY / degreesPerPixelY;

    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = {
      clientX: posX + this.left,
      clientY: posY + this.top
    };

    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  };

  VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = event;
    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
    this.setTransition();

    if (this.settings.reset) {
      requestAnimationFrame(this.resetBind);
    }
  };

  VanillaTilt.prototype.reset = function reset() {
    this.onMouseEnter();

    if (this.fullPageListening) {
      this.event = {
        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
      };
    } else {
      this.event = {
        clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
        clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
      };
    }

    var backupScale = this.settings.scale;
    this.settings.scale = 1;
    this.update();
    this.settings.scale = backupScale;
    this.resetGlare();
  };

  VanillaTilt.prototype.resetGlare = function resetGlare() {
    if (this.glare) {
      this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "0";
    }
  };

  VanillaTilt.prototype.getValues = function getValues() {
    var x = void 0,
        y = void 0;

    if (this.fullPageListening) {
      x = this.event.clientX / this.clientWidth;
      y = this.event.clientY / this.clientHeight;
    } else {
      x = (this.event.clientX - this.left) / this.width;
      y = (this.event.clientY - this.top) / this.height;
    }

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
    var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
    var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: x * 100,
      percentageY: y * 100,
      angle: angle
    };
  };

  VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
    var rect = this.element.getBoundingClientRect();

    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  };

  VanillaTilt.prototype.update = function update() {
    var values = this.getValues();

    this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    if (this.glare) {
      this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
    }

    this.element.dispatchEvent(new CustomEvent("tiltChange", {
      "detail": values
    }));

    this.updateCall = null;
  };

  /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */


  VanillaTilt.prototype.prepareGlare = function prepareGlare() {
    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
    if (!this.glarePrerender) {
      // Create glare element
      var jsTiltGlare = document.createElement("div");
      jsTiltGlare.classList.add("js-tilt-glare");

      var jsTiltGlareInner = document.createElement("div");
      jsTiltGlareInner.classList.add("js-tilt-glare-inner");

      jsTiltGlare.appendChild(jsTiltGlareInner);
      this.element.appendChild(jsTiltGlare);
    }

    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
    this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

    if (this.glarePrerender) {
      return;
    }

    Object.assign(this.glareElementWrapper.style, {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden",
      "pointer-events": "none",
      "border-radius": "inherit"
    });

    Object.assign(this.glareElement.style, {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "pointer-events": "none",
      "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
      "transform": "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      "opacity": "0"
    });

    this.updateGlareSize();
  };

  VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
    if (this.glare) {
      var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;

      Object.assign(this.glareElement.style, {
        "width": glareSize + "px",
        "height": glareSize + "px"
      });
    }
  };

  VanillaTilt.prototype.updateClientSize = function updateClientSize() {
    this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };

  VanillaTilt.prototype.onWindowResize = function onWindowResize() {
    this.updateGlareSize();
    this.updateClientSize();
  };

  VanillaTilt.prototype.setTransition = function setTransition() {
    var _this = this;

    clearTimeout(this.transitionTimeout);
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;

    this.transitionTimeout = setTimeout(function () {
      _this.element.style.transition = "";
      if (_this.glare) {
        _this.glareElement.style.transition = "";
      }
    }, this.settings.speed);
  };

  /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
   * @param {boolean} settings.glare - if it should have a "glare" effect
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */


  VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
    var defaultSettings = {
      reverse: false,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "full-page-listening": false,
      "mouse-event-element": null,
      reset: true,
      "reset-to-start": true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    };

    var newSettings = {};
    for (var property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        var attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (e) {
          newSettings[property] = attribute;
        }
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  };

  VanillaTilt.init = function init(elements, settings) {
    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [].slice.call(elements);
    }

    if (!(elements instanceof Array)) {
      return;
    }

    elements.forEach(function (element) {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  };

  return VanillaTilt;
}();

if (typeof document !== "undefined") {
  /* expose the class to window */
  window.VanillaTilt = VanillaTilt;

  /**
   * Auto load
   */
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}

module.exports = VanillaTilt;


/***/ }),

/***/ "./src/image/binance.png":
/*!*******************************!*\
  !*** ./src/image/binance.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/image/btc.png":
/*!***************************!*\
  !*** ./src/image/btc.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bd87dd1ff1cff32f379.png";

/***/ }),

/***/ "./src/image/eth.png":
/*!***************************!*\
  !*** ./src/image/eth.png ***!
  \***************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/image/intro.gif":
/*!*****************************!*\
  !*** ./src/image/intro.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "190dcb1621f3124dd041.gif";

/***/ }),

/***/ "./src/image/moonpay.png":
/*!*******************************!*\
  !*** ./src/image/moonpay.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/image/products/big.webp":
/*!*************************************!*\
  !*** ./src/image/products/big.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8270b95557d6e1f66c7.webp";

/***/ }),

/***/ "./src/image/products/long1.webp":
/*!***************************************!*\
  !*** ./src/image/products/long1.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4228f5076ca9b6cd66b.webp";

/***/ }),

/***/ "./src/image/products/long2.webp":
/*!***************************************!*\
  !*** ./src/image/products/long2.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0faf5cd1119f8ab2c38d.webp";

/***/ }),

/***/ "./src/image/products/long3.webp":
/*!***************************************!*\
  !*** ./src/image/products/long3.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "535b4373b4d41423a720.webp";

/***/ }),

/***/ "./src/image/products/square1.webp":
/*!*****************************************!*\
  !*** ./src/image/products/square1.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "363dc10fe4b911973fd0.webp";

/***/ }),

/***/ "./src/image/products/square2.webp":
/*!*****************************************!*\
  !*** ./src/image/products/square2.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0264b6414c8cb0a316b7.webp";

/***/ }),

/***/ "./src/image/sol.png":
/*!***************************!*\
  !*** ./src/image/sol.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0db81b2b96a898e9842b.png";

/***/ }),

/***/ "./src/image/trustpilot.png":
/*!**********************************!*\
  !*** ./src/image/trustpilot.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "257ae72ab748540e7b4a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-tilt */ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_webflow_required_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/webflow-required-styles.css */ "./src/css/webflow-required-styles.css");
/* harmony import */ var _css_contactForm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/contactForm.css */ "./src/css/contactForm.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_modalAnimations_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/modalAnimations.css */ "./src/css/modalAnimations.css");
/* harmony import */ var _css_webflow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/webflow.css */ "./src/css/webflow.css");
/* harmony import */ var _css_tiltingCards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/tiltingCards.css */ "./src/css/tiltingCards.css");
/* harmony import */ var _css_gradientCards_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/gradientCards.css */ "./src/css/gradientCards.css");
/* harmony import */ var _css_pricing_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/pricing.css */ "./src/css/pricing.css");
/* harmony import */ var _css_languagePicker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/languagePicker.css */ "./src/css/languagePicker.css");
/* harmony import */ var _js_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/images */ "./src/js/images.js");
/* harmony import */ var _js_contactFormModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/contactFormModule */ "./src/js/contactFormModule.js");
/* harmony import */ var _js_webflowReq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/webflowReq */ "./src/js/webflowReq.js");
/* harmony import */ var _js_introScreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/introScreen */ "./src/js/introScreen.js");
/* harmony import */ var _js_tiltCards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/tiltCards */ "./src/js/tiltCards.js");















(0,_js_webflowReq__WEBPACK_IMPORTED_MODULE_12__.webflowInit)();
(0,_js_images__WEBPACK_IMPORTED_MODULE_10__.setImages)();
(0,_js_contactFormModule__WEBPACK_IMPORTED_MODULE_11__.initContactButtons)();
(0,_js_introScreen__WEBPACK_IMPORTED_MODULE_13__.introScreen)();
(0,_js_tiltCards__WEBPACK_IMPORTED_MODULE_14__.tiltCardsLogic)();
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
})();

/******/ })()
;
//# sourceMappingURL=index.js.map