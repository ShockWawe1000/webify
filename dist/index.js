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
        if (sent == false) result.innerHTML = "TRY <br> AGAIN";else result.innerHTML = "THANK <br> YOU";
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
function openContactModal() {
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
          <div class="app-contact">CONTACT : +389 71 878 598</div>
        </div>
        <div class="screen-body-item">
          <form id="formModal" class="app-form" method="POST">
            <input type="hidden" name="access_key" value="40d910f7-a3af-41a9-a081-7323558c24e0">
            <div class="app-form-group">
              <input class="app-form-control" name="name" placeholder="NAME" autocomplete  required>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" name="email" placeholder="EMAIL" autocomplete  required>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" name="number" placeholder="CONTACT NO" autocomplete >
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" name="mesage" placeholder="MESSAGE" required>
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
    btn.addEventListener("click", openContactModal);
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
/* harmony import */ var _image_webify_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image/webify_logo.svg */ "./src/image/webify_logo.svg");
/* harmony import */ var _image_intro_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image/intro.gif */ "./src/image/intro.gif");












function createImageDiv(element, id, setClass) {
  const tempImg = new Image();
  tempImg.src = element;
  tempImg.classList.add(setClass);
  tempImg.setAttribute('loading', 'lazy');
  tempImg.setAttribute('alt', id);
  var parentElement = document.getElementById(id);
  parentElement.append(tempImg);
}
function createGifDiv(element, id, setClass) {
  const elementSvg = document.createElement('div');
  elementSvg.innerHTML = element;
  var parentElement = document.getElementById(id);
  parentElement.append(elementSvg);
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
  createImageDiv(_image_binance_png__WEBPACK_IMPORTED_MODULE_0__, "binanceImg", "image-100");
  createImageDiv(_image_moonpay_png__WEBPACK_IMPORTED_MODULE_5__, "moonpayImg", "image-100");
  createImageDiv(_image_btc_png__WEBPACK_IMPORTED_MODULE_1__, "btcImg", "image-100");
  createImageDiv(_image_sol_png__WEBPACK_IMPORTED_MODULE_3__, "solImg", "image-100");
  createImageDiv(_image_webify_logo_svg__WEBPACK_IMPORTED_MODULE_10__["default"], "webify_logo", "webifyLogo");
  createImageDiv(_image_team_svg__WEBPACK_IMPORTED_MODULE_9__["default"], "teamImg", "image-100");
  createImageDiv(_image_refund_svg__WEBPACK_IMPORTED_MODULE_8__["default"], "refundImg", "image-100");
  createImageDiv(_image_trustpilot_png__WEBPACK_IMPORTED_MODULE_4__, "trustpilotImg", "image-100");
  createImageDiv(_image_webify_logo_svg__WEBPACK_IMPORTED_MODULE_10__["default"], "webifyLogoImg2", "webifyLogo");
  createImageDiv(_image_intro_gif__WEBPACK_IMPORTED_MODULE_11__, "animatedLogo", "animatedLogo");
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
let intro = document.getElementById("intro");
let logo = document.getElementById("animatedLogo");
function endIntro() {
  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 20);
  console.log("ss");
}
function introScreen() {
  console.log("ss");
  intro.style.top = "-100vh";
  if (document.readyState !== 'loading') {
    endIntro();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      endIntro();
    });
  }
}

/***/ }),

/***/ "./src/js/typekit.js":
/*!***************************!*\
  !*** ./src/js/typekit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importTypekit: () => (/* binding */ importTypekit)
/* harmony export */ });
/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * mundial:
 *   - http://typekit.com/eulas/00000000000000007735ee04
 *   - http://typekit.com/eulas/00000000000000007735ee03
 *   - http://typekit.com/eulas/00000000000000007735ee07
 *   - http://typekit.com/eulas/00000000000000007735ee05
 *   - http://typekit.com/eulas/00000000000000007735ee09
 *   - http://typekit.com/eulas/00000000000000007735ee0b
 *   - http://typekit.com/eulas/00000000000000007735ee06
 *   - http://typekit.com/eulas/00000000000000007735ee08
 *   - http://typekit.com/eulas/00000000000000007735ee0a
 *   - http://typekit.com/eulas/00000000000000007735ee0c
 *   - http://typekit.com/eulas/00000000000000007735ee0d
 *   - http://typekit.com/eulas/00000000000000007735ee0e
 *   - http://typekit.com/eulas/00000000000000007735ee0f
 *   - http://typekit.com/eulas/00000000000000007735ee10
 *
 * © 2009-2025 Adobe Systems Incorporated. All Rights Reserved.
 */

function importTypekit() {
  if (!window.Typekit) window.Typekit = {};
  window.Typekit.config = {
    "a": "4695280",
    "c": [".tk-mundial", "\"mundial\",sans-serif"],
    "fi": [47858, 47859, 47860, 47861, 47862, 47863, 47864, 47865, 47866, 47867, 47868, 47869, 47870, 47871],
    "fc": [{
      "id": 47858,
      "family": "mundial",
      "src": "https://use.typekit.net/af/dbef51/00000000000000007735ee04/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "100",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47859,
      "family": "mundial",
      "src": "https://use.typekit.net/af/4166ac/00000000000000007735ee03/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "100",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47860,
      "family": "mundial",
      "src": "https://use.typekit.net/af/f7e259/00000000000000007735ee07/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "200",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47861,
      "family": "mundial",
      "src": "https://use.typekit.net/af/c0ae54/00000000000000007735ee05/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "200",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47862,
      "family": "mundial",
      "src": "https://use.typekit.net/af/511449/00000000000000007735ee09/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "300",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47863,
      "family": "mundial",
      "src": "https://use.typekit.net/af/4317f4/00000000000000007735ee0b/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "300",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47864,
      "family": "mundial",
      "src": "https://use.typekit.net/af/7540d0/00000000000000007735ee06/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "400",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47865,
      "family": "mundial",
      "src": "https://use.typekit.net/af/ce96c9/00000000000000007735ee08/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "400",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47866,
      "family": "mundial",
      "src": "https://use.typekit.net/af/643354/00000000000000007735ee0a/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "600",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47867,
      "family": "mundial",
      "src": "https://use.typekit.net/af/a21a99/00000000000000007735ee0c/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "600",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47868,
      "family": "mundial",
      "src": "https://use.typekit.net/af/f26873/00000000000000007735ee0d/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "700",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47869,
      "family": "mundial",
      "src": "https://use.typekit.net/af/0075f2/00000000000000007735ee0e/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "700",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47870,
      "family": "mundial",
      "src": "https://use.typekit.net/af/165143/00000000000000007735ee0f/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "900",
        "style": "italic",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }, {
      "id": 47871,
      "family": "mundial",
      "src": "https://use.typekit.net/af/93fa1a/00000000000000007735ee10/30/{format}{?primer,subset_id,fvd,v}",
      "descriptors": {
        "weight": "900",
        "style": "normal",
        "stretch": "normal",
        "display": "auto",
        "variable": false,
        "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
      }
    }],
    "fn": ["mundial", ["i1", "i2", "i3", "i4", "i6", "i7", "i9", "n1", "n2", "n3", "n4", "n6", "n7", "n9"]],
    "hn": "use.typekit.net",
    "ht": "tk",
    "js": "1.21.0",
    "kt": "mno5ubc",
    "l": "typekit",
    "ps": 1,
    "ping": "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
    "pm": true,
    "type": "configurable"
  };
  /*{"k":"1.21.0","auto_updating":true,"last_published":"2023-06-29 12:56:29 UTC"}*/
  ;
  (function (window, document, undefined) {
    if (!document.querySelector) {
      document.documentElement.className += " wf-inactive";
      return;
    }
    function aa(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }
    function ba(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    }
    function h(a, b, c) {
      h = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
      return h.apply(null, arguments);
    }
    var l = Date.now || function () {
      return +new Date();
    };
    function ca(a) {
      this.g = a || "-";
    }
    ca.prototype.b = function (a) {
      for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
      return b.join(this.g);
    };
    function da() {
      var a = [{
        name: "font-family",
        value: m.c[p + 1]
      }];
      this.g = [m.c[p]];
      this.b = a;
    }
    function ea(a) {
      for (var b = a.g.join(","), c = [], d = 0; d < a.b.length; d++) {
        var e = a.b[d];
        c.push(e.name + ":" + e.value + ";");
      }
      return b + "{" + c.join("") + "}";
    }
    ;
    function q(a, b) {
      return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16);
    }
    ;
    function r(a, b) {
      this.b = b || Array(Math.ceil(a / 32));
      if (!b) for (var c = 0; c < this.b.length; c++) this.b[c] = 0;
    }
    r.prototype.set = function (a) {
      if (Math.floor(a / 32 + 1) > this.b.length) throw Error("Index is out of bounds.");
      var b = Math.floor(a / 32);
      this.b[b] |= 1 << a - 32 * b;
    };
    r.prototype.has = function (a) {
      if (Math.floor(a / 32 + 1) > this.b.length) throw Error("Index is out of bounds.");
      var b = Math.floor(a / 32);
      return !!(this.b[b] & 1 << a - 32 * b);
    };
    function fa(a, b, c) {
      this.b = a;
      this.i = b;
      this.g = new r(a, c);
    }
    var ga = [2449897292, 4218179547, 2675077685, 1031960064, 1478620578, 1386343184, 3194259988, 2656050674, 3012733295, 2193273665];
    fa.prototype.has = function (a) {
      if ("string" !== typeof a && "number" !== typeof a) throw Error("Value should be a string or number.");
      for (var b = "number" === typeof a, c = 0; c < this.i; c++) {
        var d;
        if (b) d = q(a & 4294967295, 3432918353), d = d << 15 | d >>> 17, d = q(d, 461845907), d ^= ga[c] || 0, d = d << 13 | d >>> 19, d = q(d, 5) + 3864292196, d ^= 4, d ^= d >>> 16, d = q(d, 2246822507), d ^= d >>> 13, d = q(d, 3266489909), d ^= d >>> 16, d = (d >>> 0) % this.b;else {
          d = ga[c] || 0;
          var e,
            f,
            g = a.length % 4,
            k = a.length - g;
          for (f = 0; f < k; f += 4) e = (a.charCodeAt(f + 0) & 4294967295) << 0 | (a.charCodeAt(f + 1) & 4294967295) << 8 | (a.charCodeAt(f + 2) & 4294967295) << 16 | (a.charCodeAt(f + 3) & 4294967295) << 24, e = q(e, 3432918353), e = e << 15 | e >>> 17, e = q(e, 461845907), d ^= e, d = d << 13 | d >>> 19, d = q(d, 5) + 3864292196;
          e = 0;
          switch (g) {
            case 3:
              e ^= (a.charCodeAt(f + 2) & 4294967295) << 16;
            case 2:
              e ^= (a.charCodeAt(f + 1) & 4294967295) << 8;
            case 1:
              e ^= (a.charCodeAt(f + 0) & 4294967295) << 0, e = q(e, 3432918353), e = e << 15 | e >>> 17, e = q(e, 461845907), d ^= e;
          }
          d ^= a.length;
          d = q(d ^ d >>> 16, 2246822507);
          d = q(d ^ d >>> 13, 3266489909);
          d = ((d ^ d >>> 16) >>> 0) % this.b;
        }
        if (!this.g.has(d)) return !1;
      }
      return !0;
    };
    function ha(a) {
      a.length % 4 && (a += Array(5 - a.length % 4).join("="));
      a = a.replace(/\-/g, "+").replace(/\_/g, "/");
      if (window.atob) a = window.atob(a);else {
        a = a.replace(/=+$/, "");
        if (1 == a.length % 4) throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var b = 0, c, d, e = 0, f = ""; d = a.charAt(e++); ~d && (c = b % 4 ? 64 * c + d : d, b++ % 4) ? f += String.fromCharCode(255 & c >> (-2 * b & 6)) : 0) d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);
        a = f;
      }
      c = [];
      for (b = 0; b < a.length; b += 4) c.push(a.charCodeAt(b) << 24 | a.charCodeAt(b + 1) << 16 | a.charCodeAt(b + 2) << 8 | a.charCodeAt(b + 3) << 0);
      a = c.shift();
      b = c.shift();
      this.b = new fa(a, b, c);
    }
    ha.prototype.has = function (a) {
      if ("" === a) return !0;
      for (a = a.split("."); a.length;) {
        var b = a.join("."),
          c = "*." + b;
        if (this.b.has(b) || this.b.has(c) || this.b.has(encodeURIComponent(b)) || this.b.has(encodeURIComponent(c))) return !0;
        a.shift();
      }
      return !1;
    };
    function t(a, b, c, d) {
      b = a.b.createElement(b);
      if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
      d && b.appendChild(a.b.createTextNode(d));
      return b;
    }
    function u(a, b, c) {
      a = a.b.getElementsByTagName(b)[0];
      a || (a = document.documentElement);
      a.insertBefore(c, a.lastChild);
    }
    function ja(a, b) {
      a.b.body ? b() : a.b.addEventListener ? a.b.addEventListener("DOMContentLoaded", b) : a.b.attachEvent("onreadystatechange", function () {
        "interactive" != a.b.readyState && "complete" != a.b.readyState || b();
      });
    }
    function x(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function y(a, b, c) {
      var d = b || [];
      c = c || [];
      b = a.className.split(/\s+/);
      for (var e, f = 0; f < d.length; f += 1) {
        e = !1;
        for (var g = 0; g < b.length; g += 1) if (d[f] === b[g]) {
          e = !0;
          break;
        }
        e || b.push(d[f]);
      }
      d = [];
      for (f = 0; f < b.length; f += 1) {
        e = !1;
        for (g = 0; g < c.length; g += 1) if (b[f] === c[g]) {
          e = !0;
          break;
        }
        e || d.push(b[f]);
      }
      a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    }
    function ka(a, b) {
      for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return !0;
      return !1;
    }
    function z(a, b) {
      var c = t(a, "style");
      c.setAttribute("type", "text/css");
      c.styleSheet ? (u(a, "head", c), c.styleSheet.cssText = b) : (c.appendChild(document.createTextNode(b)), u(a, "head", c));
    }
    function la(a, b, c) {
      var d = a.b.getElementsByTagName("head")[0];
      if (d) {
        var e = t(a, "script", {
            src: b
          }),
          f = !1;
        e.onload = e.onreadystatechange = function () {
          f || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (f = !0, c && c(null), e.onload = e.onreadystatechange = null, "HEAD" == e.parentNode.tagName && d.removeChild(e));
        };
        d.appendChild(e);
        setTimeout(function () {
          f || (f = !0, c && c(Error("Script load timeout")));
        }, 5E3);
      }
    }
    ;
    function A(a, b, c) {
      this.g = a.g.document.documentElement;
      this.j = b;
      this.m = c;
      this.b = new ca("-");
      this.o = !1 !== b.events;
      this.i = !1 !== b.classes;
    }
    function B(a) {
      if (a.i) {
        var b = ka(a.g, a.b.b("wf", "active")),
          c = [],
          d = [a.b.b("wf", "loading")];
        b || c.push(a.b.b("wf", "inactive"));
        y(a.g, c, d);
      }
      C(a, "inactive");
    }
    function C(a, b, c) {
      if (a.o && a.j[b]) try {
        if (c) a.j[b](c.b, D(c));else a.j[b]();
      } catch (d) {
        console.error('Typekit: Error in "' + b + '" callback', d);
      }
      if (a.m[b]) if (c) a.m[b](c.b, D(c));else a.m[b]();
    }
    ;
    function ma(a, b, c) {
      c = c || {};
      this.b = a;
      this.g = b;
      this.weight = c.weight || "400";
      this.style = c.style || "normal";
      this.stretch = c.stretch || "normal";
      this.B = c.primer || void 0;
      this.C = c.subset_id || void 0;
      this.display = c.display || "auto";
      if (this.i = !!c.variable || !1) this.B = void 0, this.C = "4";
    }
    function E(a) {
      return ("tk-" + a.b).slice(0, 26) + "-" + D(a);
    }
    function F(a, b) {
      return new ma(b, a.g, {
        weight: a.weight,
        style: a.style,
        stretch: a.stretch,
        B: a.B,
        C: a.C,
        display: a.display
      });
    }
    function D(a) {
      return a.style.charAt(0) + a.weight.charAt(0);
    }
    ;
    function na() {
      var a = document,
        b = navigator.userAgent;
      if (/MSIE|Trident/.test(b) && (a.documentMode ? 9 > a.documentMode : 1)) b = "i";else {
        a: {
          if (/AppleWebKit/.test(b) && /Android/.test(b) && !/OPR|Chrome|CrMo|CriOS/.test(b) && (a = /Android ([^;)]+)/.exec(b)) && a[1]) {
            a = parseFloat(a[1]);
            a = 3.1 <= a && 4.1 > a;
            break a;
          }
          a = !1;
        }
        if (!a) a: {
          if (/Silk/.test(b) && /Linux|Ubuntu|Android/.test(b) && (b = /Silk\/([\d\._]+)/.exec(b)) && b[1]) {
            a = 2 <= parseFloat(b[1]);
            break a;
          }
          a = !1;
        }
        b = a ? "j" : "k";
      }
      return b;
    }
    ;
    function G(a) {
      this.b = a;
    }
    function H(a, b) {
      return a.b.replace(/\{([^\{\}]+)\}/g, function (a, d) {
        if ("?" == d.charAt(0)) {
          for (var e = d.slice(1).split(","), f = [], g = 0; g < e.length; g++) b[e[g]] && f.push(e[g] + "=" + encodeURIComponent(b[e[g]]));
          return f.length ? "?" + f.join("&") : "";
        }
        return encodeURIComponent(b[d] || "");
      });
    }
    ;
    function I() {
      this.b = [];
    }
    function oa(a, b) {
      for (var c = 0; c < b.length; c++) a.b.push(b[c]);
    }
    function J(a, b) {
      for (var c = 0; c < a.b.length; c++) b(a.b[c], c, a);
    }
    function pa(a, b) {
      if ("i" === b) {
        var c = {},
          d = new I();
        J(a, function (a) {
          c[a.b] || (c[a.b] = {});
          c[a.b][a.weight] || (c[a.b][a.weight] = []);
          c[a.b][a.weight].push(a);
        });
        for (var e in c) if (c.hasOwnProperty(e)) {
          for (var f = [400, 300, 200, 100, 500, 600, 700, 800, 900], g = 400, k = 0; k < f.length; k++) if (g = f[k], c[e][g]) {
            oa(d, c[e][g]);
            break;
          }
          f = [700, 800, 900, 600, 500, 400, 300, 200, 100];
          for (k = 0; k < f.length; k++) {
            var n = f[k];
            if (c[e][n] && g !== n) {
              oa(d, c[e][n]);
              break;
            }
          }
        }
        J(a, function (a) {
          a = F(a, a.b.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + D(a));
          d.b.push(a);
        });
        return d;
      }
      return "x" === b ? new I() : a;
    }
    function ra(a, b, c) {
      for (var d = [], e = 0; e < b.length; e++) {
        var f = b[e],
          g = H(new G(a.g), {
            format: f,
            primer: a.B,
            subset_id: a.C,
            fvd: D(a),
            extension: sa(f),
            token: c,
            v: "3"
          });
        "i" === f ? d.push("url(" + g + ")") : d.push("url(" + g + ') format("' + ta(f) + '")');
      }
      return d.join(",");
    }
    function ua(a, b, c, d) {
      if ("x" === b) return "";
      var e = [];
      e.push("font-family:" + (d ? E(a) : a.b));
      b = "k" === b ? ra(a, ["l", "d", "a"], c) : ra(a, [b], c);
      e.push("src:" + b);
      e.push("font-weight:" + a.weight);
      e.push("font-style:" + a.style);
      e.push("font-stretch:" + a.stretch);
      e.push("font-display:" + a.display);
      return "@font-face{" + e.join(";") + ";}";
    }
    function ta(a) {
      switch (a) {
        case "d":
          return "woff";
        case "i":
          return "eot";
        case "l":
          return "woff2";
        default:
          return "opentype";
      }
    }
    function sa(a) {
      switch (a) {
        case "d":
          return "woff";
        case "i":
          return "eot";
        case "l":
          return "woff2";
        default:
          return "otf";
      }
    }
    function K(a, b, c, d) {
      var e = [];
      J(a, function (a) {
        e.push(ua(a, b, c, d));
      });
      return e.join("");
    }
    ;
    function L(a, b) {
      this.g = a;
      this.i = b;
      this.b = t(this.g, "span", {
        "aria-hidden": "true"
      }, this.i);
    }
    function M(a) {
      u(a.g, "body", a.b);
    }
    function N(a) {
      return "display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:" + a.b + " !important;font-weight:" + a.weight + " !important;font-style:" + a.style + " !important;";
    }
    ;
    function va(a, b, c, d, e, f, g, k) {
      this.D = a;
      this.H = b;
      this.u = c;
      this.b = d;
      this.w = g || "BESbswy";
      this.g = {};
      this.I = e || 3E3;
      this.G = k;
      this.A = f || null;
      this.i = new L(this.u, this.w);
      this.j = new L(this.u, this.w);
      this.m = new L(this.u, this.w);
      this.o = new L(this.u, this.w);
      a = this.G ? E(this.b) : this.b.b;
      this.i.b.style.cssText = N(F(this.b, a + ",serif"));
      this.j.b.style.cssText = N(F(this.b, a + ",sans-serif"));
      this.m.b.style.cssText = N(F(this.b, "serif"));
      this.o.b.style.cssText = N(F(this.b, "sans-serif"));
      M(this.i);
      M(this.j);
      M(this.m);
      M(this.o);
    }
    var O = {
        K: "serif",
        J: "sans-serif"
      },
      P = null;
    function wa() {
      if (null === P) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        P = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
      }
      return P;
    }
    va.prototype.start = function () {
      this.g.serif = this.m.b.offsetWidth;
      this.g["sans-serif"] = this.o.b.offsetWidth;
      this.F = l();
      xa(this);
    };
    function ya(a, b, c) {
      for (var d in O) if (O.hasOwnProperty(d) && b === a.g[O[d]] && c === a.g[O[d]]) return !0;
      return !1;
    }
    function xa(a) {
      var b = a.i.b.offsetWidth,
        c = a.j.b.offsetWidth,
        d;
      (d = b === a.g.serif && c === a.g["sans-serif"]) || (d = wa() && ya(a, b, c));
      d ? l() - a.F >= a.I ? wa() && ya(a, b, c) && (!a.A || a.A.hasOwnProperty(a.b.b)) ? Q(a, a.D) : Q(a, a.H) : za(a) : Q(a, a.D);
    }
    function za(a) {
      setTimeout(h(function () {
        xa(this);
      }, a), 50);
    }
    function Q(a, b) {
      setTimeout(h(function () {
        x(this.i.b);
        x(this.j.b);
        x(this.m.b);
        x(this.o.b);
        b(this.b);
      }, a), 0);
    }
    ;
    function Aa(a, b, c, d, e, f, g) {
      this.i = a;
      this.u = b;
      this.b = d;
      this.m = c;
      this.g = e || 3E3;
      this.o = f || void 0;
      this.j = g;
    }
    Aa.prototype.start = function () {
      var a = this.m.g.document,
        b = this,
        c = l(),
        d = new Promise(function (d, e) {
          function k() {
            l() - c >= b.g ? e() : a.fonts.load(b.b.style + " " + b.b.weight + " 300px " + (b.j ? E(b.b) : b.b.b), b.o).then(function (a) {
              1 <= a.length ? d() : setTimeout(k, 25);
            }, function () {
              e();
            });
          }
          k();
        }),
        e = new Promise(function (a, c) {
          setTimeout(c, b.g);
        });
      Promise.race([e, d]).then(function () {
        b.i(b.b);
      }, function () {
        b.u(b.b);
      });
    };
    function R(a, b, c, d) {
      this.w = a;
      this.b = b;
      this.g = 0;
      this.o = this.m = !1;
      this.A = c;
      this.u = d;
    }
    var S = null;
    function Ba(a, b, c) {
      var d = {},
        e = b.b.length;
      if (!e && c) B(a.b);else {
        a.g += e;
        c && (a.m = c);
        var f = [];
        J(b, function (b) {
          var c = a.b;
          c.i && y(c.g, [c.b.b("wf", b.b, D(b), "loading")]);
          C(c, "fontloading", b);
          c = null;
          if (null === S) if (window.FontFace) {
            var e = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
              ia = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            S = e ? 42 < parseInt(e[1], 10) : ia && /Apple/.exec(window.navigator.vendor) ? 603 <= parseInt(ia[1], 10) : !0;
          } else S = !1;
          S ? c = new Aa(h(a.i, a), h(a.j, a), a.w, b, a.A, "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006", a.u) : c = new va(h(a.i, a), h(a.j, a), a.w, b, a.A, d, "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006", a.u);
          f.push(c);
        });
        for (b = 0; b < f.length; b++) f[b].start();
      }
    }
    R.prototype.i = function (a) {
      var b = this.b;
      b.i && y(b.g, [b.b.b("wf", a.b, D(a), "active")], [b.b.b("wf", a.b, D(a), "loading"), b.b.b("wf", a.b, D(a), "inactive")]);
      C(b, "fontactive", a);
      this.o = !0;
      Ca(this);
    };
    R.prototype.j = function (a) {
      var b = this.b;
      if (b.i) {
        var c = ka(b.g, b.b.b("wf", a.b, D(a), "active")),
          d = [],
          e = [b.b.b("wf", a.b, D(a), "loading")];
        c || d.push(b.b.b("wf", a.b, D(a), "inactive"));
        y(b.g, d, e);
      }
      C(b, "fontinactive", a);
      Ca(this);
    };
    function Ca(a) {
      ! --a.g && a.m && (a.o ? (a = a.b, a.i && y(a.g, [a.b.b("wf", "active")], [a.b.b("wf", "loading"), a.b.b("wf", "inactive")]), C(a, "active")) : B(a.b));
    }
    ;
    function T(a) {
      this.b = a;
      this.m = null;
      this.g = [];
      this.j = this.u = null;
      this.o = new I();
      this.i = null;
    }
    T.prototype.supportsConfiguredBrowser = function () {
      return !0;
    };
    T.prototype.init = function () {
      if (0 < this.g.length) {
        for (var a = [], b = 0; b < this.g.length; b++) a.push(ea(this.g[b]));
        z(this.b, a.join(""));
      }
    };
    T.prototype.load = function (a, b, c) {
      var d = this;
      c = c || {};
      if (this.j && (a = location.hostname, !this.j.has(a))) {
        console.error('Typekit: the domain "' + a + '" isn\'t in the list of published domains for kit "' + this.u + '".');
        B(new A(this.b, c, {}));
        return;
      }
      a = c.timeout;
      var e = !!c.async,
        f = na(),
        g = pa(this.o, f);
      c = new A(this.b, c, {
        active: function () {
          if (e) {
            var a = K(g, f, d.i, !1);
            z(d.b, a);
          }
          if (d.m) {
            var a = d.m,
              b = d.b,
              c = a.m,
              k = (window.__adobewebfontsappname__ || a.app || "").toString().substr(0, 20),
              b = b.g.location.hostname || b.i.location.hostname,
              n = [],
              v = [];
            window.Typekit ? (window.Typekit.fonts || (window.Typekit.fonts = []), v = window.Typekit.fonts) : window.TypekitPreview && (window.TypekitPreview.fonts || (window.TypekitPreview.fonts = []), v = window.TypekitPreview.fonts);
            for (var w = 0; w < a.b.length; w++) {
              for (var qa = !1, Y = 0; Y < v.length; Y++) if (a.b[w] === v[Y]) {
                qa = !0;
                break;
              }
              qa || (n.push(a.b[w]), v.push(a.b[w]));
            }
            n.length && Da(H(c, {
              s: a.j,
              k: a.o,
              app: k,
              ht: a.i,
              h: b,
              f: n.join("."),
              a: a.g,
              js: a.version,
              e: "js",
              _: (+new Date()).toString()
            }));
          }
        },
        inactive: function () {
          if (e) {
            var a = K(g, f, d.i, !1);
            z(d.b, a);
          }
        }
      });
      if (g.b.length) {
        var k = K(g, f, this.i, e);
        z(this.b, k);
        var n = new R(this.b, c, a, e);
        ja(d.b, function () {
          Ba(n, g, b);
        });
      } else B(c);
    };
    function U(a, b) {
      this.j = a;
      this.g = b;
      this.b = [];
    }
    U.prototype.i = function (a) {
      this.b.push(a);
    };
    U.prototype.load = function (a, b) {
      var c = a,
        d = b || {};
      "string" == typeof c ? c = [c] : c && c.length || (d = c || {}, c = []);
      if (c.length) for (var e = this, f = c.length, g = 0; g < c.length; g++) Ea(this, c[g], function () {
        --f || Fa(e, d);
      });else Fa(this, d);
    };
    function Ea(a, b, c) {
      b = H(a.j, {
        id: b
      });
      la(a.g, b, c);
    }
    function Fa(a, b) {
      if (a.b.length) {
        for (var c = new A(a.g, b, {}), d = 0; d < a.b.length; d++) a.b[d].init();
        c.i && y(c.g, [c.b.b("wf", "loading")]);
        C(c, "loading");
        for (c = 0; c < a.b.length; c++) a.b[c].load(null, c == a.b.length - 1, b);
        a.b = [];
      }
    }
    ;
    function Ga() {
      var a = m.ps,
        b = m.ht,
        c = Ha,
        d = m.a,
        e = m.kt,
        f = m.js,
        g = m.l;
      this.m = new G(m.ping);
      this.j = a;
      this.i = b;
      this.b = c || [];
      this.g = d || null;
      this.o = e || null;
      this.version = f || null;
      this.app = g || null;
    }
    function Da(a) {
      var b = new Image(1, 1),
        c = !1;
      b.src = a;
      b.onload = function () {
        c = !0;
        b.onload = null;
      };
      setTimeout(function () {
        c || (b.src = "about:blank", b.onload = null);
      }, 3E3);
    }
    ;
    var Ia = new function () {
      var a = window;
      this.g = this.i = a;
      this.b = this.g.document;
    }();
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
      var V = new U(new G("//" + (window.Typekit.config || {}).hn + "/{id}.js"), Ia);
      window.Typekit.load = function () {
        V.load.apply(V, arguments);
      };
      window.Typekit.addKit = function () {
        V.i.apply(V, arguments);
      };
    }
    for (var W, m = window.Typekit.config || {}, Ha = [], Ja = m.fc, Ka = 0; Ka < Ja.length; Ka++) Ha.push(Ja[Ka].id);
    W = new T(Ia);
    m.ping && (W.m = new Ga());
    if (m.fc) for (var X = m.fc, Z = 0; Z < X.length; Z++) W.o.b.push(new ma(X[Z].family, X[Z].src, X[Z].descriptors));
    if (m.dl) {
      var La = m.dl;
      try {
        W.j = new ha(La);
      } catch (a) {}
    }
    m.kt && (W.u = m.kt);
    m.token && (W.i = m.token);
    if (m.c) for (var p = 0; p < m.c.length; p += 2) W.g.push(new da());
    window.Typekit.addKit(W);
    if (window.WebFont) try {
      window.Typekit.load();
    } catch (a) {}
    ;
  })(this, document);
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

/***/ "./src/css/contactForm.css":
/*!*********************************!*\
  !*** ./src/css/contactForm.css ***!
  \*********************************/
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

/***/ "./src/image/clutch.svg":
/*!******************************!*\
  !*** ./src/image/clutch.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"55px\" height=\"16px\" viewBox=\"0 0 55 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlnsXlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>3rd_party/clutch/logo</title>\r\n    <g id=\"3rd_party/clutch/logo\" stroke=\"none\" strokeWidth=\"1\" fill=\"none\" fillRule=\"evenodd\">\r\n        <g id=\"clutch_logo\" fillRule=\"nonzero\">\r\n            <rect id=\"Rectangle\" fill=\"#7F7F7F\" x=\"14.158233\" y=\"0\" width=\"2.47727273\" height=\"16\"></rect>\r\n            <path d=\"M25.3059602,10.896 C25.3059602,13.34464 23.3136136,13.53984 22.7209261,13.53984 C21.2401364,13.53984 20.970733,12.10752 20.970733,11.24352 L20.970733,5.12 L18.4934602,5.12 L18.4934602,11.23072 C18.4934602,12.74752 18.954233,13.99936 19.7618239,14.83392 C20.4752784,15.57184 21.5442216,15.97504 22.7023466,15.97504 C23.5235625,15.97504 24.686642,15.71072 25.3059602,15.1264 L25.3059602,16 L27.783233,16 L27.783233,5.12 L25.3059602,5.12 L25.3059602,10.896 Z\" id=\"Path\" fill=\"#7F7F7F\"></path>\r\n            <polygon id=\"Path\" fill=\"#7F7F7F\" points=\"32.7377784 1.28 30.2605056 1.28 30.2605056 5.12 28.4025511 5.12 28.4025511 7.68 30.2605056 7.68 30.2605056 16 32.7377784 16 32.7377784 7.68 34.595733 7.68 34.595733 5.12 32.7377784 5.12\"></polygon>\r\n            <path d=\"M42.3972841,12.74688 C41.857858,13.248 41.145642,13.52576 40.3640625,13.52576 C38.6411194,13.52576 37.3758523,12.21824 37.3758523,10.42304 C37.3758523,8.62784 38.6008636,7.37536 40.3640625,7.37536 C41.132017,7.37536 41.857858,7.63968 42.4109091,8.1408 L42.7868352,8.47488 L44.4571364,6.74944 L44.0390966,6.35968 C43.0562386,5.44256 41.7513352,4.928 40.3634431,4.928 C37.2668523,4.928 35.018108,7.23712 35.018108,10.4096 C35.018108,13.56864 37.320733,15.96032 40.3634431,15.96032 C41.7773466,15.96032 43.095875,15.44576 44.0663466,14.51392 L44.470142,14.12416 L42.7738295,12.4 L42.3972841,12.74688 Z\" id=\"Path\" fill=\"#7F7F7F\"></path>\r\n            <path d=\"M53.299142,6.06848 C52.5856875,5.3312 51.749608,4.928 50.591483,4.928 C49.770267,4.928 48.8400511,5.19232 48.220733,5.776 L48.220733,0 L45.7434602,0 L45.7434602,16 L48.220733,16 L48.220733,10.0064 C48.220733,7.55776 49.9040398,7.3632 50.4967273,7.3632 C51.977517,7.3632 51.936642,8.79616 51.936642,9.65888 L51.936642,16 L54.4139148,16 L54.4139148,9.67232 C54.4139148,8.15552 54.1073523,6.90368 53.299142,6.06848\" id=\"Path\" fill=\"#7F7F7F\"></path>\r\n            <path d=\"M40.2823125,8.60032 C41.271983,8.60032 42.074,9.42784 42.074,10.4512 C42.074,11.47328 41.271983,12.30208 40.2823125,12.30208 C39.2932614,12.30208 38.4918636,11.47328 38.4918636,10.4512 C38.492483,9.42848 39.2938806,8.60032 40.2823125,8.60032\" id=\"Path\" fill=\"#FF3D2E\"></path>\r\n            <path d=\"M10.6900511,11.98144 C9.74806819,12.98304 8.46855681,13.52576 7.12215909,13.52576 C4.36247727,13.52576 2.35588636,11.28576 2.35588636,8.2112 C2.35588636,5.12256 4.36247727,2.88256 7.12215909,2.88256 C8.45555114,2.88256 9.72081819,3.42464 10.6770455,4.4128 L11.0535909,4.80256 L12.7096477,3.0912 L12.346108,2.70144 C10.9730795,1.24032 9.115125,0.448 7.12215909,0.448 C3.05633523,0.448 0,3.78688 0,8.22464 C0,12.64896 3.06996023,15.9744 7.12215909,15.9744 C9.12875,15.9744 10.9867045,15.168 12.359733,13.70688 L12.7232727,13.31712 L11.0808409,11.57824 L10.6900511,11.98144 Z\" id=\"Path\" fill=\"#7F7F7F\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1189\" height=\"579\">\r\n  <path d=\"M 663.348 77.942 C 673.065 85.23 676.811 89.599 681.348 100.942 C 686.135 141.626 670.754 179.323 647.348 211.942 C 646.802 212.708 646.256 213.474 645.694 214.264 C 639.659 222.701 633.646 231.093 626.508 238.641 C 624.67 240.599 622.919 242.594 621.169 244.629 C 617.033 249.374 612.621 253.816 608.161 258.254 C 607.367 259.052 606.574 259.849 605.756 260.67 C 604.989 261.437 604.221 262.203 603.43 262.993 C 602.397 264.024 602.397 264.024 601.344 265.076 C 599.435 266.861 597.469 268.419 595.348 269.942 C 595.858 277.926 596.86 285.621 598.536 293.442 C 598.865 294.99 598.865 294.99 599.2 296.568 C 604.931 322.773 606.185 346.207 629.003 362.18 C 639.38 366.931 649.536 375.173 663.903 371.691 C 688.428 363.142 664.336 373.127 681.977 363.468 C 664.744 359.549 661.769 355.941 651.306 346.788 C 639.016 334.105 636.598 326.402 634.679 311.227 C 630.617 279.109 644.337 259.068 648.386 250.453 C 655.115 237.931 664.316 230.146 687.53 226.106 C 712.274 226.106 725.313 227.885 738.327 237.8 C 748.381 246.937 747.119 244.079 751.723 262.356 C 748.858 291.414 744.213 302.904 727.394 352.455 C 742.509 362.342 779.153 325.232 784.757 321.204 C 786.077 311.304 787.215 242.732 788.575 232.532 C 792.575 221.532 792.575 221.532 798.575 215.532 C 801.575 214.532 801.575 214.532 809.575 214.532 C 815.575 217.532 815.575 217.532 818.575 223.532 C 821.298 234.425 819.368 246.812 818.279 257.891 C 818.036 260.363 817.804 262.836 817.573 265.31 C 816.917 272.331 816.244 279.351 815.566 286.371 C 815.069 291.529 814.582 296.688 814.106 301.848 C 814.03 302.676 813.954 303.504 813.875 304.357 C 810.801 334.205 810.801 334.205 821.575 361.532 C 825.954 365.345 825.954 365.345 834.575 365.532 C 843.723 362.266 843.723 362.266 848.048 359.231 C 849.578 358.227 851.108 357.223 852.638 356.219 C 853.39 355.72 854.142 355.22 854.917 354.706 C 862.01 350.069 866.853 347.532 875.575 347.532 C 882.575 353.532 882.575 353.532 884.575 361.532 C 877.617 378.927 865.565 386.062 849.575 393.532 C 833.576 397.895 821.143 398.37 805.575 392.532 C 792.017 381.686 795.666 384.838 791.647 379.984 C 790.979 379.177 789.411 375.705 789.162 374.666 C 787.158 365.763 789.427 375.296 787.261 365.29 C 787.061 364.364 787.622 360.135 787.622 359.159 C 787.683 350.838 786.919 359.23 788.16 351.005 C 789.224 341.201 765.843 377.232 733.948 378.095 C 725.761 378.593 714.771 373.776 712.092 374.544 C 708.986 375.435 716.589 373.566 686.348 392.942 C 666.109 402.019 647.291 400.487 626.348 393.942 C 594.74 375.504 580.333 346.358 571.114 311.974 C 554.627 246.69 556.502 168.665 590.348 108.942 C 599.751 93.252 609.608 84.312 626.348 75.942 C 639.94 73.677 650.068 74.32 663.348 77.942 Z M 629.348 108.942 C 599.027 136.231 594.71 186.661 592.601 225.764 C 592.514 227.49 592.43 229.216 592.348 230.942 C 597.273 228.48 599.753 225.076 603.348 220.942 C 604.171 220.009 604.993 219.075 605.84 218.114 C 629.44 191.048 654.348 153.957 654.348 116.942 C 651.717 110.889 651.717 110.889 647.348 106.942 C 638.909 105.34 638.909 105.34 629.348 108.942 Z M 685.726 253.746 C 661.716 259.111 662.844 274.059 656.325 291.508 C 652.35 314.444 662.703 329.927 672.053 336.039 C 685.466 341.982 701.662 345.751 704.722 346.091 C 715.107 321.434 726.52 278.549 723.03 268.27 C 710.926 251.555 702.277 251.265 685.726 253.746 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 1037.94 72.386 C 1047.43 83.226 1048.9 90.016 1050.94 104.386 C 1050.02 118.231 1048.14 131.14 1043.94 144.386 C 1043.74 145.048 1043.53 145.711 1043.33 146.393 C 1037.39 164.996 1027.37 182.622 1015.95 198.386 C 1015.19 199.439 1014.43 200.492 1013.65 201.577 C 1006.59 211.141 999.068 220.276 991.059 229.058 C 989.193 231.117 987.379 233.21 985.574 235.323 C 977.778 244.234 969.267 252.093 959.949 259.386 C 959.061 260.083 958.173 260.781 957.258 261.499 C 951 266.386 951 266.386 948.949 266.386 C 948.289 271.666 947.629 276.946 946.949 282.386 C 956.189 282.386 965.429 282.386 974.949 282.386 C 980.949 285.386 980.949 285.386 984.949 289.386 C 985.949 292.386 985.949 292.386 985.949 302.386 C 981.949 308.386 981.949 308.386 974.949 312.386 C 959.109 312.881 959.109 312.881 942.949 313.386 C 941.774 321.358 940.599 329.331 939.432 337.305 C 938.889 341.018 938.343 344.731 937.795 348.444 C 937.266 352.023 936.741 355.602 936.219 359.181 C 936.02 360.544 935.819 361.907 935.616 363.269 C 935.332 365.183 935.054 367.098 934.776 369.013 C 934.536 370.646 934.536 370.646 934.291 372.311 C 933.952 375.364 933.888 378.317 933.949 381.386 C 934.39 381.04 934.83 380.695 935.284 380.339 C 945.021 372.711 954.831 365.195 964.745 357.8 C 970.292 353.654 975.761 349.425 981.185 345.12 C 989.702 338.383 996.342 333.568 1006.95 330.386 C 1013.95 332.386 1013.95 332.386 1018.95 337.386 C 1019.95 339.386 1019.95 339.386 1019.95 348.386 C 1014.71 356.483 1009.65 362.833 1002.11 368.859 C 999.914 370.611 997.727 372.37 995.543 374.132 C 988.208 380.039 980.794 385.824 973.296 391.523 C 968.544 395.143 963.853 398.828 959.199 402.573 C 950.504 409.571 941.662 416.357 932.731 423.051 C 932.175 423.469 931.618 423.886 931.045 424.316 C 929.68 425.339 928.314 426.363 926.949 427.386 C 926.818 428.276 926.687 429.166 926.552 430.083 C 925.309 438.513 924.059 446.942 922.802 455.37 C 922.156 459.702 921.513 464.034 920.875 468.367 C 920.259 472.557 919.636 476.745 919.008 480.933 C 918.771 482.523 918.536 484.113 918.304 485.704 C 915.169 507.133 910.657 522.534 893.949 537.386 C 878.749 544.986 867.445 546.385 850.949 543.386 C 834.095 534.959 823.244 526.259 816.949 508.386 C 813.276 493.692 816.886 481.1 823.949 468.386 C 829.738 461.506 835.871 455.894 842.949 450.386 C 844.331 449.3 845.713 448.214 847.094 447.128 C 860.205 436.851 873.539 426.887 886.953 417.011 C 887.823 416.37 888.693 415.73 889.589 415.07 C 891.709 413.508 893.829 411.947 895.949 410.386 C 896.123 409.232 896.296 408.078 896.474 406.889 C 898.106 396.015 899.739 385.141 901.374 374.268 C 902.214 368.678 903.054 363.087 903.892 357.497 C 904.702 352.102 905.512 346.708 906.324 341.313 C 906.633 339.255 906.942 337.196 907.251 335.138 C 907.683 332.255 908.117 329.373 908.551 326.491 C 908.678 325.639 908.805 324.787 908.936 323.91 C 909.056 323.121 909.175 322.331 909.298 321.518 C 909.4 320.837 909.502 320.155 909.608 319.454 C 909.999 317.088 910.479 314.737 910.949 312.386 C 902.039 312.386 893.129 312.386 883.949 312.386 C 875.949 308.386 875.949 308.386 872.949 302.386 C 872.949 292.386 872.949 292.386 875.949 286.386 C 890.169 278.26 894.626 281.386 914.949 281.386 C 915.592 277.137 915.592 277.137 916.247 272.802 C 917.679 263.334 919.117 253.867 920.558 244.4 C 921.429 238.673 922.298 232.946 923.163 227.217 C 932.698 164.109 932.698 164.109 938.262 144.073 C 938.699 142.481 938.699 142.481 939.145 140.857 C 947.339 111.837 959.162 84.577 984.949 67.386 C 1004.45 60.885 1020.4 60.683 1037.94 72.386 Z M 989.949 102.386 C 969.914 127.885 964.736 160.457 959.637 191.698 C 959.508 192.484 959.379 193.269 959.245 194.078 C 957.707 203.507 956.483 212.839 955.949 222.386 C 984.65 199.301 1013.2 156.21 1018.95 119.386 C 1020.04 109.177 1020.04 109.177 1016.95 99.386 C 1007.8 90.233 999.004 95.918 989.949 102.386 Z M 858.949 478.386 C 857.99 479.656 857.032 480.927 856.074 482.198 C 855.541 482.906 855.007 483.614 854.457 484.343 C 850.758 489.355 850.846 490.213 849.949 497.386 C 852.146 506.609 852.146 506.609 858.949 511.386 C 862.529 512.755 862.529 512.755 868.949 512.386 C 877.566 508.947 877.566 508.947 881.949 500.386 C 884.354 491.073 886.334 481.787 887.699 472.261 C 887.827 471.385 887.954 470.51 888.085 469.608 C 888.742 464.818 889.08 460.219 888.949 455.386 C 881.287 455.386 865.011 473.339 858.949 478.386 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 817.055 162.631 C 823.055 167.295 823.055 167.295 827.055 174.291 C 827.055 185.95 827.055 185.95 823.055 194.112 C 818.055 197.61 818.055 197.61 811.055 198.776 C 802.055 195.278 802.055 195.278 798.055 189.448 C 797.055 187.116 797.055 187.116 797.055 174.291 C 802.011 162.734 806.204 162.631 817.055 162.631 Z\" fill=\"#FFFFFF\" style=\"\"/>\r\n  <path d=\"M 377.982 74 C 392.312 83.977 403.382 94.579 409.357 111.875 C 409.599 112.567 409.842 113.259 410.092 113.972 C 413.476 123.952 414.009 133.296 414.037 143.715 C 414.042 145.267 414.048 146.82 414.057 148.373 C 414.069 150.614 414.075 152.856 414.079 155.098 C 414.084 155.783 414.09 156.469 414.095 157.176 C 414.095 161.564 413.691 165.684 412.982 170 C 427.947 165.528 441.181 158.768 454.667 150.97 C 462.5 146.462 465.324 146 474.982 146 C 480.982 150 480.982 150 484.982 156 C 484.982 166 484.982 166 479.982 174 C 460.873 193.109 434.808 199.975 408.982 205 C 407.662 205 406.342 205 404.982 205 C 404.764 206.299 404.546 207.599 404.321 208.938 C 402.737 216.82 400.1 224.391 397.544 232 C 397.278 232.794 397.013 233.588 396.739 234.405 C 386.871 263.762 374.338 292.239 356.982 318 C 356.288 319.035 356.288 319.035 355.581 320.091 C 348.68 330.317 341.219 339.824 332.982 349 C 332.498 349.546 332.014 350.091 331.515 350.653 C 326.019 356.847 320.487 362.843 313.982 368 C 313.439 368.433 312.897 368.866 312.339 369.312 C 298.327 380.412 283.829 388.984 266.982 395 C 265.939 395.379 264.896 395.758 263.821 396.148 C 243.261 403.063 221.665 404.364 200.982 398 C 194.674 394.321 188.718 390.519 182.982 386 C 182.035 386.447 181.089 386.895 180.114 387.355 C 155.869 398.544 130.479 403.077 103.982 399 C 87.378 392.359 77.829 381.915 70.747 365.808 C 47.991 312.033 67.489 239.249 76.309 184.018 C 81.687 154.646 81.687 154.646 83.982 125 C 82.468 125.93 82.468 125.93 80.923 126.879 C 75.949 129.93 70.966 132.966 65.982 136 C 64.954 136.626 63.927 137.252 62.869 137.896 C 59.618 139.874 56.363 141.844 53.107 143.813 C 52.086 144.434 51.066 145.055 50.015 145.696 C 31.263 157 31.263 157 21.982 157 C 15.982 154 15.982 154 10.982 148 C 8.982 139 8.982 139 11.982 131 C 19.559 122.933 28.779 117.04 37.982 111 C 39.759 109.814 41.533 108.624 43.307 107.435 C 56.428 98.646 69.64 90.038 83.25 82.024 C 84.94 81.024 86.621 80.008 88.302 78.992 C 97.613 73.415 102.783 70.756 113.982 72 C 120.982 77 120.982 77 123.982 84 C 123.452 99.222 121.324 114.292 119.41 129.387 C 118.92 133.263 118.436 137.141 117.952 141.018 C 116.821 150.057 115.684 159.095 114.545 168.134 C 107.998 219.673 107.998 219.673 101.966 271.273 C 101.866 272.154 101.767 273.035 101.664 273.943 C 98.74 299.141 98.74 299.141 99.919 324.375 C 100.019 325.23 100.119 326.084 100.222 326.965 C 101.533 338.08 104.787 346.708 110.982 356 C 121.998 363.344 120.849 361 137.982 361 C 148.842 358.762 158.783 356.397 168.982 352 C 169.642 352 170.302 352 170.982 352 C 170.728 351.016 170.474 350.033 170.212 349.02 C 166.015 332.287 163.46 315.258 162.982 298 C 162.949 296.858 162.949 296.858 162.915 295.692 C 161.948 255.503 165.776 213.77 193.982 183 C 209.511 173.294 221.99 172.232 239.982 175 C 256.959 181.791 264.787 189.61 272.982 206 C 282.907 245.702 270.539 288.793 250.139 323.315 C 241.452 337.636 231.308 352.635 217.982 363 C 219.482 367 219.482 367 221.982 368 C 255.736 368 278.408 355.458 301.482 332.875 C 333.445 300.805 352.644 256.938 367.027 214.709 C 367.942 212.114 368.96 209.555 369.982 207 C 366.352 207 362.722 207 358.982 207 C 333.396 202.544 310.981 194.025 293.982 173 C 286.94 160.929 286.94 160.929 284.544 153.438 C 284.314 152.733 284.084 152.029 283.847 151.303 C 281.32 143.355 280.841 135.855 280.919 127.563 C 280.924 126.64 280.928 125.718 280.933 124.768 C 281.029 106.195 289.793 94.297 301.982 81 C 326.694 63.702 350.176 62.414 377.982 74 Z M 323.982 111 C 315.565 120.82 314.982 125.997 314.982 139 C 320.757 154.884 327.865 162.442 342.982 170 C 344.835 170.484 346.689 170.962 348.544 171.438 C 349.577 171.704 350.609 171.971 351.673 172.246 C 357.981 173.684 363.986 174.138 370.419 174.063 C 374.163 174.032 374.163 174.032 377.982 174 C 381.587 154.771 382.794 137.892 376.982 119 C 369.743 109.349 366.263 106.513 354.982 102 C 341.405 102 335.244 103.492 323.982 111 Z M 214.982 215 C 199.278 233.321 197.013 260.636 196.061 284.067 C 195.992 285.741 195.906 287.413 195.818 289.086 C 195.43 302.241 197.278 316.126 199.982 329 C 221.781 314.467 233.301 284.97 238.403 260.316 C 239.804 252.283 240.107 244.647 240.044 236.5 C 240.04 235.391 240.035 234.283 240.03 233.141 C 240.002 226.551 239.809 224.597 236.982 218 C 228.91 211.274 225.059 209.962 214.982 215 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 1074.63 184.297 C 1079.63 187.297 1079.63 187.297 1082.63 193.297 C 1083.63 201.297 1083.63 201.297 1083.11 205.202 C 1082.46 210.085 1081.83 214.968 1081.18 219.852 C 1080.9 221.946 1080.62 224.041 1080.36 226.135 C 1076.54 254.742 1076.54 254.742 1075.52 283.547 C 1075.53 284.901 1075.54 286.255 1075.54 287.609 C 1075.63 300.623 1077.77 311.559 1083.63 323.297 C 1088.44 327.618 1088.44 327.618 1094.63 329.297 C 1104.09 329.018 1104.09 329.018 1111.63 322.297 C 1127.07 298.051 1131.36 270.929 1136.02 243.019 C 1136.53 239.973 1137.06 236.933 1137.61 233.895 C 1139.67 222.426 1140.71 210.91 1141.63 199.297 C 1145.63 190.297 1145.63 190.297 1149.63 186.297 C 1152.63 185.297 1152.63 185.297 1162.63 185.297 C 1167.6 188.269 1170.76 190.66 1172.63 196.297 C 1173.6 213.648 1170.86 230.598 1168.39 247.715 C 1167.8 251.895 1167.21 256.077 1166.63 260.259 C 1165.53 268.147 1164.4 276.033 1163.29 283.918 C 1162.01 292.908 1160.74 301.901 1159.47 310.893 C 1156.87 329.364 1154.27 347.831 1151.63 366.297 C 1155.02 364.295 1158.18 362.215 1161.3 359.82 C 1162.16 359.154 1163.04 358.488 1163.93 357.802 C 1164.85 357.099 1165.76 356.396 1166.69 355.672 C 1168.61 354.213 1170.51 352.755 1172.41 351.297 C 1173.78 350.251 1173.78 350.251 1175.16 349.184 C 1178.04 346.991 1180.92 344.827 1183.83 342.672 C 1187.27 340.107 1190.66 337.501 1194.05 334.855 C 1194.84 334.238 1195.62 333.621 1196.43 332.985 C 1197.97 331.774 1199.52 330.56 1201.06 329.343 C 1209.37 322.814 1216.27 318.409 1226.63 315.297 C 1234.63 317.297 1234.63 317.297 1238.63 321.297 C 1239.63 324.297 1239.63 324.297 1239.63 332.297 C 1233.47 342.562 1227.67 348.632 1218.45 355.757 C 1213.63 359.485 1208.94 363.337 1204.27 367.234 C 1198.11 372.336 1191.86 377.222 1185.43 381.975 C 1180.66 385.51 1176 389.144 1171.35 392.836 C 1166.03 397.034 1160.61 401.096 1155.18 405.152 C 1154.27 405.842 1153.35 406.532 1152.39 407.243 C 1150.14 408.928 1147.88 410.613 1145.63 412.297 C 1145.52 413.174 1145.39 414.052 1145.28 414.956 C 1144.15 423.268 1143.02 431.58 1141.88 439.89 C 1141.3 444.161 1140.71 448.433 1140.13 452.705 C 1139.58 456.837 1139.02 460.967 1138.44 465.096 C 1138.22 466.664 1138.02 468.232 1137.81 469.8 C 1135.29 488.633 1131.06 502.385 1117.63 517.297 C 1102.26 527.085 1096 529.297 1077.63 529.297 C 1059.03 523.571 1048.76 516.166 1038.63 499.297 C 1033.25 481.334 1035.43 467.698 1043.63 451.297 C 1050.5 444.064 1057.61 437.739 1065.62 431.802 C 1067.93 430.078 1070.21 428.326 1072.5 426.57 C 1082.43 418.938 1092.46 411.451 1102.65 404.164 C 1110.09 399.563 1110.09 399.563 1115.63 393.297 C 1116.95 382.407 1118.28 371.517 1119.63 360.297 C 1119.96 359.307 1120.3 358.317 1120.63 357.297 C 1115.68 359.277 1115.68 359.277 1110.63 361.297 C 1093.71 364.268 1081.53 363.964 1065.63 355.297 C 1055.08 346.493 1049.21 335.432 1045.77 322.297 C 1045.59 321.668 1045.41 321.039 1045.24 320.391 C 1041.7 306.803 1041.26 292.935 1041.33 278.984 C 1041.33 278.16 1041.33 277.335 1041.33 276.485 C 1041.43 247.64 1042.1 208.634 1061.63 186.297 C 1065.63 184.297 1065.63 184.297 1074.63 184.297 Z M 1097.39 447.98 C 1095.68 449.26 1093.97 450.533 1092.27 451.805 C 1082.29 459.275 1074.78 465.728 1069.63 477.297 C 1069.83 487.099 1069.83 487.099 1074.63 493.297 C 1080.24 497.24 1080.24 497.24 1090.63 496.297 C 1100.86 489.48 1102.69 481.012 1105.11 469.985 C 1106.06 465.2 1106.74 460.381 1107.38 455.547 C 1107.52 454.607 1107.64 453.667 1107.78 452.699 C 1108.32 448.525 1108.69 444.512 1108.63 440.297 C 1105.25 440.297 1100.24 445.832 1097.39 447.98 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 520.756 232.959 C 532.813 251.045 531.614 263.385 527.756 283.959 C 516.221 307.029 502.103 322.919 477.932 331.03 C 465.63 335.035 452.528 336.514 439.756 333.959 C 440.381 351.549 440.381 351.549 448.756 365.959 C 463.516 372.519 473.792 371.644 489.756 367.959 C 502.05 362.528 513.42 356.172 524.756 348.959 C 527.756 347.959 527.756 347.959 535.756 347.959 C 542.756 353.959 542.756 353.959 543.756 355.959 C 543.756 365.959 543.756 365.959 537.756 374.959 C 515.001 393.164 487.817 402.912 458.756 403.959 C 438.811 401.11 429.385 396.745 416.756 380.959 C 403.116 347.781 405.738 311.425 419.268 278.519 C 429.317 255.273 442.65 237.855 464.756 224.959 C 484.389 218.774 503.565 219.206 520.756 232.959 Z M 465.756 262.959 C 456.326 275.533 450.239 288.959 445.756 303.959 C 455.983 307.368 465.044 304.873 474.756 301.959 C 486.924 295.199 495.516 288.061 500.756 274.959 C 502.521 266.358 501.891 260.317 498.756 251.959 C 486.417 242.705 474.814 254.807 465.756 262.959 Z\" fill=\"#FFFFFF\"/>\r\n</svg>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\r\n  <g id=\"Group_41090\" data-name=\"Group 41090\" transform=\"translate(-905 -1122)\">\r\n    <circle id=\"Ellipse_65\" data-name=\"Ellipse 65\" cx=\"24\" cy=\"24\" r=\"24\" transform=\"translate(905 1122)\" fill=\"#0d0614\" opacity=\"0.15\"/>\r\n    <g transform=\"translate(915 1132) scale(1.2)\">\r\n      <path d=\"M4 8L3.64645 8.35355L3.29289 8L3.64645 7.64645L4 8ZM9 19.5C8.72386 19.5 8.5 19.2761 8.5 19C8.5 18.7239 8.72386 18.5 9 18.5L9 19.5ZM8.64645 13.3536L3.64645 8.35355L4.35355 7.64645L9.35355 12.6464L8.64645 13.3536ZM3.64645 7.64645L8.64645 2.64645L9.35355 3.35355L4.35355 8.35355L3.64645 7.64645ZM4 7.5L14.5 7.5L14.5 8.5L4 8.5L4 7.5ZM14.5 19.5L9 19.5L9 18.5L14.5 18.5L14.5 19.5ZM20.5 13.5C20.5 16.8137 17.8137 19.5 14.5 19.5L14.5 18.5C17.2614 18.5 19.5 16.2614 19.5 13.5L20.5 13.5ZM14.5 7.5C17.8137 7.5 20.5 10.1863 20.5 13.5L19.5 13.5C19.5 10.7386 17.2614 8.5 14.5 8.5L14.5 7.5Z\" fill=\"#ffffff\"/>\r\n    </g>\r\n  </g>\r\n</svg>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\r\n  <g id=\"Group_41090\" data-name=\"Group 41090\" transform=\"translate(-905 -1122)\">\r\n    <circle id=\"Ellipse_65\" data-name=\"Ellipse 65\" cx=\"24\" cy=\"24\" r=\"24\" transform=\"translate(905 1122)\" fill=\"#0d0614\" opacity=\"0.15\"/>\r\n    <g transform=\"translate(913 1130)\" fill=\"#ffffff\" stroke=\"#ffffff\">\r\n      <path d=\"M16 21.916c-4.797 0.020-8.806 3.369-9.837 7.856l-0.013 0.068c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.875-3.885 4.297-6.744 8.386-6.744s7.511 2.859 8.375 6.687l0.011 0.057c0.076 0.34 0.374 0.59 0.732 0.59 0 0 0.001 0 0.001 0h-0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005c-1.045-4.554-5.055-7.903-9.849-7.924h-0.002zM9.164 10.602c0 0 0 0 0 0 2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM9.164 2.75c0 0 0 0 0 0 1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.175-3.176h0zM22.926 10.602c2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM22.926 2.75c1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.176-3.176h0zM30.822 19.84c-0.878-3.894-4.308-6.759-8.406-6.759-0.423 0-0.839 0.031-1.246 0.089l0.046-0.006c-0.049 0.012-0.092 0.028-0.133 0.047l0.004-0.002c-0.751-2.129-2.745-3.627-5.089-3.627-2.334 0-4.321 1.485-5.068 3.561l-0.012 0.038c-0.017-0.004-0.030-0.014-0.047-0.017-0.359-0.053-0.773-0.084-1.195-0.084-0.002 0-0.005 0-0.007 0h0c-4.092 0.018-7.511 2.874-8.392 6.701l-0.011 0.058c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.737-3.207 3.56-5.565 6.937-5.579h0.002c0.335 0 0.664 0.024 0.985 0.070l-0.037-0.004c-0.008 0.119-0.036 0.232-0.036 0.354 0.006 2.987 2.429 5.406 5.417 5.406s5.411-2.419 5.416-5.406v-0.001c0-0.12-0.028-0.233-0.036-0.352 0.016-0.002 0.031 0.005 0.047 0.001 0.294-0.044 0.634-0.068 0.98-0.068 0.004 0 0.007 0 0.011 0h-0.001c3.379 0.013 6.203 2.371 6.93 5.531l0.009 0.048c0.076 0.34 0.375 0.589 0.732 0.59h0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005zM16 18.916c-0 0-0 0-0.001 0-2.163 0-3.917-1.753-3.917-3.917s1.754-3.917 3.917-3.917c2.163 0 3.917 1.754 3.917 3.917 0 0 0 0 0 0.001v-0c-0.003 2.162-1.754 3.913-3.916 3.916h-0z\"/>\r\n    </g>\r\n  </g>\r\n</svg>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1189\" height=\"579\">\r\n  <path d=\"M 663.348 77.942 C 673.065 85.23 676.811 89.599 681.348 100.942 C 686.135 141.626 670.754 179.323 647.348 211.942 C 646.802 212.708 646.256 213.474 645.694 214.264 C 639.659 222.701 633.646 231.093 626.508 238.641 C 624.67 240.599 622.919 242.594 621.169 244.629 C 617.033 249.374 612.621 253.816 608.161 258.254 C 607.367 259.052 606.574 259.849 605.756 260.67 C 604.989 261.437 604.221 262.203 603.43 262.993 C 602.397 264.024 602.397 264.024 601.344 265.076 C 599.435 266.861 597.469 268.419 595.348 269.942 C 595.858 277.926 596.86 285.621 598.536 293.442 C 598.865 294.99 598.865 294.99 599.2 296.568 C 604.931 322.773 606.185 346.207 629.003 362.18 C 639.38 366.931 649.536 375.173 663.903 371.691 C 688.428 363.142 664.336 373.127 681.977 363.468 C 664.744 359.549 661.769 355.941 651.306 346.788 C 639.016 334.105 636.598 326.402 634.679 311.227 C 630.617 279.109 644.337 259.068 648.386 250.453 C 655.115 237.931 664.316 230.146 687.53 226.106 C 712.274 226.106 725.313 227.885 738.327 237.8 C 748.381 246.937 747.119 244.079 751.723 262.356 C 748.858 291.414 744.213 302.904 727.394 352.455 C 742.509 362.342 779.153 325.232 784.757 321.204 C 786.077 311.304 787.215 242.732 788.575 232.532 C 792.575 221.532 792.575 221.532 798.575 215.532 C 801.575 214.532 801.575 214.532 809.575 214.532 C 815.575 217.532 815.575 217.532 818.575 223.532 C 821.298 234.425 819.368 246.812 818.279 257.891 C 818.036 260.363 817.804 262.836 817.573 265.31 C 816.917 272.331 816.244 279.351 815.566 286.371 C 815.069 291.529 814.582 296.688 814.106 301.848 C 814.03 302.676 813.954 303.504 813.875 304.357 C 810.801 334.205 810.801 334.205 821.575 361.532 C 825.954 365.345 825.954 365.345 834.575 365.532 C 843.723 362.266 843.723 362.266 848.048 359.231 C 849.578 358.227 851.108 357.223 852.638 356.219 C 853.39 355.72 854.142 355.22 854.917 354.706 C 862.01 350.069 866.853 347.532 875.575 347.532 C 882.575 353.532 882.575 353.532 884.575 361.532 C 877.617 378.927 865.565 386.062 849.575 393.532 C 833.576 397.895 821.143 398.37 805.575 392.532 C 792.017 381.686 795.666 384.838 791.647 379.984 C 790.979 379.177 789.411 375.705 789.162 374.666 C 787.158 365.763 789.427 375.296 787.261 365.29 C 787.061 364.364 787.622 360.135 787.622 359.159 C 787.683 350.838 786.919 359.23 788.16 351.005 C 789.224 341.201 765.843 377.232 733.948 378.095 C 725.761 378.593 714.771 373.776 712.092 374.544 C 708.986 375.435 716.589 373.566 686.348 392.942 C 666.109 402.019 647.291 400.487 626.348 393.942 C 594.74 375.504 580.333 346.358 571.114 311.974 C 554.627 246.69 556.502 168.665 590.348 108.942 C 599.751 93.252 609.608 84.312 626.348 75.942 C 639.94 73.677 650.068 74.32 663.348 77.942 Z M 629.348 108.942 C 599.027 136.231 594.71 186.661 592.601 225.764 C 592.514 227.49 592.43 229.216 592.348 230.942 C 597.273 228.48 599.753 225.076 603.348 220.942 C 604.171 220.009 604.993 219.075 605.84 218.114 C 629.44 191.048 654.348 153.957 654.348 116.942 C 651.717 110.889 651.717 110.889 647.348 106.942 C 638.909 105.34 638.909 105.34 629.348 108.942 Z M 685.726 253.746 C 661.716 259.111 662.844 274.059 656.325 291.508 C 652.35 314.444 662.703 329.927 672.053 336.039 C 685.466 341.982 701.662 345.751 704.722 346.091 C 715.107 321.434 726.52 278.549 723.03 268.27 C 710.926 251.555 702.277 251.265 685.726 253.746 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 1037.94 72.386 C 1047.43 83.226 1048.9 90.016 1050.94 104.386 C 1050.02 118.231 1048.14 131.14 1043.94 144.386 C 1043.74 145.048 1043.53 145.711 1043.33 146.393 C 1037.39 164.996 1027.37 182.622 1015.95 198.386 C 1015.19 199.439 1014.43 200.492 1013.65 201.577 C 1006.59 211.141 999.068 220.276 991.059 229.058 C 989.193 231.117 987.379 233.21 985.574 235.323 C 977.778 244.234 969.267 252.093 959.949 259.386 C 959.061 260.083 958.173 260.781 957.258 261.499 C 951 266.386 951 266.386 948.949 266.386 C 948.289 271.666 947.629 276.946 946.949 282.386 C 956.189 282.386 965.429 282.386 974.949 282.386 C 980.949 285.386 980.949 285.386 984.949 289.386 C 985.949 292.386 985.949 292.386 985.949 302.386 C 981.949 308.386 981.949 308.386 974.949 312.386 C 959.109 312.881 959.109 312.881 942.949 313.386 C 941.774 321.358 940.599 329.331 939.432 337.305 C 938.889 341.018 938.343 344.731 937.795 348.444 C 937.266 352.023 936.741 355.602 936.219 359.181 C 936.02 360.544 935.819 361.907 935.616 363.269 C 935.332 365.183 935.054 367.098 934.776 369.013 C 934.536 370.646 934.536 370.646 934.291 372.311 C 933.952 375.364 933.888 378.317 933.949 381.386 C 934.39 381.04 934.83 380.695 935.284 380.339 C 945.021 372.711 954.831 365.195 964.745 357.8 C 970.292 353.654 975.761 349.425 981.185 345.12 C 989.702 338.383 996.342 333.568 1006.95 330.386 C 1013.95 332.386 1013.95 332.386 1018.95 337.386 C 1019.95 339.386 1019.95 339.386 1019.95 348.386 C 1014.71 356.483 1009.65 362.833 1002.11 368.859 C 999.914 370.611 997.727 372.37 995.543 374.132 C 988.208 380.039 980.794 385.824 973.296 391.523 C 968.544 395.143 963.853 398.828 959.199 402.573 C 950.504 409.571 941.662 416.357 932.731 423.051 C 932.175 423.469 931.618 423.886 931.045 424.316 C 929.68 425.339 928.314 426.363 926.949 427.386 C 926.818 428.276 926.687 429.166 926.552 430.083 C 925.309 438.513 924.059 446.942 922.802 455.37 C 922.156 459.702 921.513 464.034 920.875 468.367 C 920.259 472.557 919.636 476.745 919.008 480.933 C 918.771 482.523 918.536 484.113 918.304 485.704 C 915.169 507.133 910.657 522.534 893.949 537.386 C 878.749 544.986 867.445 546.385 850.949 543.386 C 834.095 534.959 823.244 526.259 816.949 508.386 C 813.276 493.692 816.886 481.1 823.949 468.386 C 829.738 461.506 835.871 455.894 842.949 450.386 C 844.331 449.3 845.713 448.214 847.094 447.128 C 860.205 436.851 873.539 426.887 886.953 417.011 C 887.823 416.37 888.693 415.73 889.589 415.07 C 891.709 413.508 893.829 411.947 895.949 410.386 C 896.123 409.232 896.296 408.078 896.474 406.889 C 898.106 396.015 899.739 385.141 901.374 374.268 C 902.214 368.678 903.054 363.087 903.892 357.497 C 904.702 352.102 905.512 346.708 906.324 341.313 C 906.633 339.255 906.942 337.196 907.251 335.138 C 907.683 332.255 908.117 329.373 908.551 326.491 C 908.678 325.639 908.805 324.787 908.936 323.91 C 909.056 323.121 909.175 322.331 909.298 321.518 C 909.4 320.837 909.502 320.155 909.608 319.454 C 909.999 317.088 910.479 314.737 910.949 312.386 C 902.039 312.386 893.129 312.386 883.949 312.386 C 875.949 308.386 875.949 308.386 872.949 302.386 C 872.949 292.386 872.949 292.386 875.949 286.386 C 890.169 278.26 894.626 281.386 914.949 281.386 C 915.592 277.137 915.592 277.137 916.247 272.802 C 917.679 263.334 919.117 253.867 920.558 244.4 C 921.429 238.673 922.298 232.946 923.163 227.217 C 932.698 164.109 932.698 164.109 938.262 144.073 C 938.699 142.481 938.699 142.481 939.145 140.857 C 947.339 111.837 959.162 84.577 984.949 67.386 C 1004.45 60.885 1020.4 60.683 1037.94 72.386 Z M 989.949 102.386 C 969.914 127.885 964.736 160.457 959.637 191.698 C 959.508 192.484 959.379 193.269 959.245 194.078 C 957.707 203.507 956.483 212.839 955.949 222.386 C 984.65 199.301 1013.2 156.21 1018.95 119.386 C 1020.04 109.177 1020.04 109.177 1016.95 99.386 C 1007.8 90.233 999.004 95.918 989.949 102.386 Z M 858.949 478.386 C 857.99 479.656 857.032 480.927 856.074 482.198 C 855.541 482.906 855.007 483.614 854.457 484.343 C 850.758 489.355 850.846 490.213 849.949 497.386 C 852.146 506.609 852.146 506.609 858.949 511.386 C 862.529 512.755 862.529 512.755 868.949 512.386 C 877.566 508.947 877.566 508.947 881.949 500.386 C 884.354 491.073 886.334 481.787 887.699 472.261 C 887.827 471.385 887.954 470.51 888.085 469.608 C 888.742 464.818 889.08 460.219 888.949 455.386 C 881.287 455.386 865.011 473.339 858.949 478.386 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 817.055 162.631 C 823.055 167.295 823.055 167.295 827.055 174.291 C 827.055 185.95 827.055 185.95 823.055 194.112 C 818.055 197.61 818.055 197.61 811.055 198.776 C 802.055 195.278 802.055 195.278 798.055 189.448 C 797.055 187.116 797.055 187.116 797.055 174.291 C 802.011 162.734 806.204 162.631 817.055 162.631 Z\" fill=\"#FFFFFF\" style=\"\"/>\r\n  <path d=\"M 377.982 74 C 392.312 83.977 403.382 94.579 409.357 111.875 C 409.599 112.567 409.842 113.259 410.092 113.972 C 413.476 123.952 414.009 133.296 414.037 143.715 C 414.042 145.267 414.048 146.82 414.057 148.373 C 414.069 150.614 414.075 152.856 414.079 155.098 C 414.084 155.783 414.09 156.469 414.095 157.176 C 414.095 161.564 413.691 165.684 412.982 170 C 427.947 165.528 441.181 158.768 454.667 150.97 C 462.5 146.462 465.324 146 474.982 146 C 480.982 150 480.982 150 484.982 156 C 484.982 166 484.982 166 479.982 174 C 460.873 193.109 434.808 199.975 408.982 205 C 407.662 205 406.342 205 404.982 205 C 404.764 206.299 404.546 207.599 404.321 208.938 C 402.737 216.82 400.1 224.391 397.544 232 C 397.278 232.794 397.013 233.588 396.739 234.405 C 386.871 263.762 374.338 292.239 356.982 318 C 356.288 319.035 356.288 319.035 355.581 320.091 C 348.68 330.317 341.219 339.824 332.982 349 C 332.498 349.546 332.014 350.091 331.515 350.653 C 326.019 356.847 320.487 362.843 313.982 368 C 313.439 368.433 312.897 368.866 312.339 369.312 C 298.327 380.412 283.829 388.984 266.982 395 C 265.939 395.379 264.896 395.758 263.821 396.148 C 243.261 403.063 221.665 404.364 200.982 398 C 194.674 394.321 188.718 390.519 182.982 386 C 182.035 386.447 181.089 386.895 180.114 387.355 C 155.869 398.544 130.479 403.077 103.982 399 C 87.378 392.359 77.829 381.915 70.747 365.808 C 47.991 312.033 67.489 239.249 76.309 184.018 C 81.687 154.646 81.687 154.646 83.982 125 C 82.468 125.93 82.468 125.93 80.923 126.879 C 75.949 129.93 70.966 132.966 65.982 136 C 64.954 136.626 63.927 137.252 62.869 137.896 C 59.618 139.874 56.363 141.844 53.107 143.813 C 52.086 144.434 51.066 145.055 50.015 145.696 C 31.263 157 31.263 157 21.982 157 C 15.982 154 15.982 154 10.982 148 C 8.982 139 8.982 139 11.982 131 C 19.559 122.933 28.779 117.04 37.982 111 C 39.759 109.814 41.533 108.624 43.307 107.435 C 56.428 98.646 69.64 90.038 83.25 82.024 C 84.94 81.024 86.621 80.008 88.302 78.992 C 97.613 73.415 102.783 70.756 113.982 72 C 120.982 77 120.982 77 123.982 84 C 123.452 99.222 121.324 114.292 119.41 129.387 C 118.92 133.263 118.436 137.141 117.952 141.018 C 116.821 150.057 115.684 159.095 114.545 168.134 C 107.998 219.673 107.998 219.673 101.966 271.273 C 101.866 272.154 101.767 273.035 101.664 273.943 C 98.74 299.141 98.74 299.141 99.919 324.375 C 100.019 325.23 100.119 326.084 100.222 326.965 C 101.533 338.08 104.787 346.708 110.982 356 C 121.998 363.344 120.849 361 137.982 361 C 148.842 358.762 158.783 356.397 168.982 352 C 169.642 352 170.302 352 170.982 352 C 170.728 351.016 170.474 350.033 170.212 349.02 C 166.015 332.287 163.46 315.258 162.982 298 C 162.949 296.858 162.949 296.858 162.915 295.692 C 161.948 255.503 165.776 213.77 193.982 183 C 209.511 173.294 221.99 172.232 239.982 175 C 256.959 181.791 264.787 189.61 272.982 206 C 282.907 245.702 270.539 288.793 250.139 323.315 C 241.452 337.636 231.308 352.635 217.982 363 C 219.482 367 219.482 367 221.982 368 C 255.736 368 278.408 355.458 301.482 332.875 C 333.445 300.805 352.644 256.938 367.027 214.709 C 367.942 212.114 368.96 209.555 369.982 207 C 366.352 207 362.722 207 358.982 207 C 333.396 202.544 310.981 194.025 293.982 173 C 286.94 160.929 286.94 160.929 284.544 153.438 C 284.314 152.733 284.084 152.029 283.847 151.303 C 281.32 143.355 280.841 135.855 280.919 127.563 C 280.924 126.64 280.928 125.718 280.933 124.768 C 281.029 106.195 289.793 94.297 301.982 81 C 326.694 63.702 350.176 62.414 377.982 74 Z M 323.982 111 C 315.565 120.82 314.982 125.997 314.982 139 C 320.757 154.884 327.865 162.442 342.982 170 C 344.835 170.484 346.689 170.962 348.544 171.438 C 349.577 171.704 350.609 171.971 351.673 172.246 C 357.981 173.684 363.986 174.138 370.419 174.063 C 374.163 174.032 374.163 174.032 377.982 174 C 381.587 154.771 382.794 137.892 376.982 119 C 369.743 109.349 366.263 106.513 354.982 102 C 341.405 102 335.244 103.492 323.982 111 Z M 214.982 215 C 199.278 233.321 197.013 260.636 196.061 284.067 C 195.992 285.741 195.906 287.413 195.818 289.086 C 195.43 302.241 197.278 316.126 199.982 329 C 221.781 314.467 233.301 284.97 238.403 260.316 C 239.804 252.283 240.107 244.647 240.044 236.5 C 240.04 235.391 240.035 234.283 240.03 233.141 C 240.002 226.551 239.809 224.597 236.982 218 C 228.91 211.274 225.059 209.962 214.982 215 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 1074.63 184.297 C 1079.63 187.297 1079.63 187.297 1082.63 193.297 C 1083.63 201.297 1083.63 201.297 1083.11 205.202 C 1082.46 210.085 1081.83 214.968 1081.18 219.852 C 1080.9 221.946 1080.62 224.041 1080.36 226.135 C 1076.54 254.742 1076.54 254.742 1075.52 283.547 C 1075.53 284.901 1075.54 286.255 1075.54 287.609 C 1075.63 300.623 1077.77 311.559 1083.63 323.297 C 1088.44 327.618 1088.44 327.618 1094.63 329.297 C 1104.09 329.018 1104.09 329.018 1111.63 322.297 C 1127.07 298.051 1131.36 270.929 1136.02 243.019 C 1136.53 239.973 1137.06 236.933 1137.61 233.895 C 1139.67 222.426 1140.71 210.91 1141.63 199.297 C 1145.63 190.297 1145.63 190.297 1149.63 186.297 C 1152.63 185.297 1152.63 185.297 1162.63 185.297 C 1167.6 188.269 1170.76 190.66 1172.63 196.297 C 1173.6 213.648 1170.86 230.598 1168.39 247.715 C 1167.8 251.895 1167.21 256.077 1166.63 260.259 C 1165.53 268.147 1164.4 276.033 1163.29 283.918 C 1162.01 292.908 1160.74 301.901 1159.47 310.893 C 1156.87 329.364 1154.27 347.831 1151.63 366.297 C 1155.02 364.295 1158.18 362.215 1161.3 359.82 C 1162.16 359.154 1163.04 358.488 1163.93 357.802 C 1164.85 357.099 1165.76 356.396 1166.69 355.672 C 1168.61 354.213 1170.51 352.755 1172.41 351.297 C 1173.78 350.251 1173.78 350.251 1175.16 349.184 C 1178.04 346.991 1180.92 344.827 1183.83 342.672 C 1187.27 340.107 1190.66 337.501 1194.05 334.855 C 1194.84 334.238 1195.62 333.621 1196.43 332.985 C 1197.97 331.774 1199.52 330.56 1201.06 329.343 C 1209.37 322.814 1216.27 318.409 1226.63 315.297 C 1234.63 317.297 1234.63 317.297 1238.63 321.297 C 1239.63 324.297 1239.63 324.297 1239.63 332.297 C 1233.47 342.562 1227.67 348.632 1218.45 355.757 C 1213.63 359.485 1208.94 363.337 1204.27 367.234 C 1198.11 372.336 1191.86 377.222 1185.43 381.975 C 1180.66 385.51 1176 389.144 1171.35 392.836 C 1166.03 397.034 1160.61 401.096 1155.18 405.152 C 1154.27 405.842 1153.35 406.532 1152.39 407.243 C 1150.14 408.928 1147.88 410.613 1145.63 412.297 C 1145.52 413.174 1145.39 414.052 1145.28 414.956 C 1144.15 423.268 1143.02 431.58 1141.88 439.89 C 1141.3 444.161 1140.71 448.433 1140.13 452.705 C 1139.58 456.837 1139.02 460.967 1138.44 465.096 C 1138.22 466.664 1138.02 468.232 1137.81 469.8 C 1135.29 488.633 1131.06 502.385 1117.63 517.297 C 1102.26 527.085 1096 529.297 1077.63 529.297 C 1059.03 523.571 1048.76 516.166 1038.63 499.297 C 1033.25 481.334 1035.43 467.698 1043.63 451.297 C 1050.5 444.064 1057.61 437.739 1065.62 431.802 C 1067.93 430.078 1070.21 428.326 1072.5 426.57 C 1082.43 418.938 1092.46 411.451 1102.65 404.164 C 1110.09 399.563 1110.09 399.563 1115.63 393.297 C 1116.95 382.407 1118.28 371.517 1119.63 360.297 C 1119.96 359.307 1120.3 358.317 1120.63 357.297 C 1115.68 359.277 1115.68 359.277 1110.63 361.297 C 1093.71 364.268 1081.53 363.964 1065.63 355.297 C 1055.08 346.493 1049.21 335.432 1045.77 322.297 C 1045.59 321.668 1045.41 321.039 1045.24 320.391 C 1041.7 306.803 1041.26 292.935 1041.33 278.984 C 1041.33 278.16 1041.33 277.335 1041.33 276.485 C 1041.43 247.64 1042.1 208.634 1061.63 186.297 C 1065.63 184.297 1065.63 184.297 1074.63 184.297 Z M 1097.39 447.98 C 1095.68 449.26 1093.97 450.533 1092.27 451.805 C 1082.29 459.275 1074.78 465.728 1069.63 477.297 C 1069.83 487.099 1069.83 487.099 1074.63 493.297 C 1080.24 497.24 1080.24 497.24 1090.63 496.297 C 1100.86 489.48 1102.69 481.012 1105.11 469.985 C 1106.06 465.2 1106.74 460.381 1107.38 455.547 C 1107.52 454.607 1107.64 453.667 1107.78 452.699 C 1108.32 448.525 1108.69 444.512 1108.63 440.297 C 1105.25 440.297 1100.24 445.832 1097.39 447.98 Z\" fill=\"#FFFFFF\"/>\r\n  <path d=\"M 520.756 232.959 C 532.813 251.045 531.614 263.385 527.756 283.959 C 516.221 307.029 502.103 322.919 477.932 331.03 C 465.63 335.035 452.528 336.514 439.756 333.959 C 440.381 351.549 440.381 351.549 448.756 365.959 C 463.516 372.519 473.792 371.644 489.756 367.959 C 502.05 362.528 513.42 356.172 524.756 348.959 C 527.756 347.959 527.756 347.959 535.756 347.959 C 542.756 353.959 542.756 353.959 543.756 355.959 C 543.756 365.959 543.756 365.959 537.756 374.959 C 515.001 393.164 487.817 402.912 458.756 403.959 C 438.811 401.11 429.385 396.745 416.756 380.959 C 403.116 347.781 405.738 311.425 419.268 278.519 C 429.317 255.273 442.65 237.855 464.756 224.959 C 484.389 218.774 503.565 219.206 520.756 232.959 Z M 465.756 262.959 C 456.326 275.533 450.239 288.959 445.756 303.959 C 455.983 307.368 465.044 304.873 474.756 301.959 C 486.924 295.199 495.516 288.061 500.756 274.959 C 502.521 266.358 501.891 260.317 498.756 251.959 C 486.417 242.705 474.814 254.807 465.756 262.959 Z\" fill=\"#FFFFFF\"/>\r\n</svg>");

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
/* harmony import */ var _css_webflow_required_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/webflow-required-styles.css */ "./src/css/webflow-required-styles.css");
/* harmony import */ var _css_contactForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/contactForm.css */ "./src/css/contactForm.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_modalAnimations_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/modalAnimations.css */ "./src/css/modalAnimations.css");
/* harmony import */ var _css_webflow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/webflow.css */ "./src/css/webflow.css");
/* harmony import */ var _js_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/images */ "./src/js/images.js");
/* harmony import */ var _js_contactFormModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/contactFormModule */ "./src/js/contactFormModule.js");
/* harmony import */ var _js_webflowReq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/webflowReq */ "./src/js/webflowReq.js");
/* harmony import */ var _js_typekit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/typekit */ "./src/js/typekit.js");
/* harmony import */ var _js_introScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/introScreen */ "./src/js/introScreen.js");










(0,_js_webflowReq__WEBPACK_IMPORTED_MODULE_7__.webflowInit)();
(0,_js_images__WEBPACK_IMPORTED_MODULE_5__.setImages)();
(0,_js_contactFormModule__WEBPACK_IMPORTED_MODULE_6__.initContactButtons)();
(0,_js_typekit__WEBPACK_IMPORTED_MODULE_8__.importTypekit)();
(0,_js_introScreen__WEBPACK_IMPORTED_MODULE_9__.introScreen)();

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