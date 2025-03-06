import Bowser from "bowser";


//import animated_logo_S from "../image/intro_webify_logo_S.gif"
import webify_logo_animated from "../image/webify_logo_animated.svg"
import transition from "../image/load_animation.svg"
import webify_logo_animatedGif from "../image/mobile/intro.gif"
import transitionGif from  "../image/mobile/2323.gif"



// import binance from "../image/binance.png"
// import btc from "../image/btc.png"
// import eth from "../image/eth.png"
// import sol from "../image/sol.png"
// import moonpay from "../image/moonpay.png"
import trustpilot from "../image/trustpilot.png"

import clutchRating from "../image/clutch.svg"
import favicon from "../image/favicon/favicon.png"
import faviconL from "../image/favicon/faviconL.png"
import webify_logo from "../image/webify_logo.svg"


//CardIcons
import cardIcon1 from "../image/element/cardIcon1.svg"
import cardIcon2 from "../image/element/cardIcon2.svg"
import cardIcon3 from "../image/element/cardIcon3.svg"
import cardIcon4 from "../image/element/cardIcon4.svg"


//Elements
import linkedinIcon from "../image/element/linkedinIcon.svg"
import buttonNext from "../image/element/buttonNext.svg"
import rating5 from "../image/element/rating5.svg"
import languageIcon from "../image/element/languageIcon.svg"


//Products
import bigProductShowcase from "../image/products/big.webp"
import long1ProductShowcase from "../image/products/long1.webp"
import long2ProductShowcase from "../image/products/long2.webp"
import long3ProductShowcase from "../image/products/long3.webp"
import square1ProductShowcase from "../image/products/square1.webp"
import square2ProdProductShowcase from "../image/products/square2.webp"

//Stats
import graph1 from "../image/stats/graph1.webp"
import graph2 from "../image/stats/graph2.webp"
import graph3 from "../image/stats/graph3.webp"


//ProcessImg
import design from "../image/process/design.svg"
import develop from "../image/process/develop.svg"
import launch from "../image/process/launch.svg"


import dots from "../image/bg/dots.svg"
import dotsSmall from "../image/bg/dots2.svg"
import line1 from "../image/bg/line1.svg"
import line2 from "../image/bg/line2.svg"
import line3 from "../image/bg/line3.svg"
import line4 from "../image/bg/line4.svg"
import line5 from "../image/bg/line5.svg"
import line6 from "../image/bg/line6.svg"
import line8 from "../image/bg/line8.svg"








function setFavicon(srcs, rel, type) {
        var link = document.createElement('link');
        link.href = srcs;
        link.rel = rel;
        if(type){link.type = type} 
      
        document.head.appendChild(link);
}




function createImageDiv(element, id , setClass,loading ,sizes)
{
    if (document.getElementById(id))
    {
        const tempImg = new Image();
        tempImg.src=  element
        tempImg.classList.add(...setClass)
        
        tempImg.setAttribute('alt', id);

        if(loading)
            { tempImg.setAttribute('loading', loading);}
        else
             { tempImg.setAttribute('loading', "lazy");}
       
        if(sizes){ tempImg.setAttribute('sizes', sizes);}

        var parentElement = document.getElementById(id)
        parentElement.append(tempImg)
    
    }

    else
    console.log("ID doest exist:"+ id)

}

function createLoadingSVG(element, id , setClass) {
   
    setTimeout(()=>{
    const svgObject = document.createElement("object");
    svgObject.id = "animated-svg";
    svgObject.type = "image/svg+xml";
    svgObject.data = element;
    svgObject.classList.add(setClass);
    svgObject.style.width = "100vw";  // Make it fit the screen horizontally
    svgObject.style.height = "100vh"; // Make it fit the screen vertically
    svgObject.style.position = "absolute"; // Position it absolutely within the container
    svgObject.style.top = "0"; // Align to the top of the parent container
    svgObject.style.left = "0"; // Align to the left of the parent container

    const parentElement = document.getElementById(id);
    parentElement.append(svgObject);
},700)
}


function createLogoSVG(element, id , setClass) {
   
    setTimeout(()=>{
    const svgObject = document.createElement("object");
    svgObject.id = "animated-svg";
    svgObject.type = "image/svg+xml";
    svgObject.data = element;
    svgObject.classList.add(...setClass);


    const parentElement = document.getElementById(id);
    parentElement.append(svgObject);
},700)
}






export function setImages(){
//    createImageDiv(binance, "binanceImg", "image-100")
//    createImageDiv(moonpay, "moonpayImg", "image-100")
//    createImageDiv(btc, "btcImg", "image-100")
//    createImageDiv(sol, "solImg", "image-100")


 //loading screen
const browser = Bowser.getParser(window.navigator.userAgent);
const isHandheld = browser.getPlatformType() === 'tablet' || browser.getPlatformType() === 'mobile';
       
if (!isHandheld) {
    createLogoSVG(webify_logo_animated, "animatedLogo", ["animatedLogo"] , "eager")
    createLoadingSVG(transition, "loadingSvg", ["transition"] , "eager" )
} else {
   // createImageDiv(webify_logo_animatedGif, "animatedLogo", ["animatedLogoGif"] , "eager")
    createImageDiv(transitionGif, "loadingSvg", ["transitionGif"] , "eager" )

    console.log('Mobile Animations.');
}

    setFavicon(favicon, "shortcut icon", "image/x-icon")
    setFavicon(faviconL, "apple-touch-icon")
    //logos
    createImageDiv(webify_logo, "webify_logo",[ "webifyLogo"] , "lazy")
    createImageDiv(webify_logo, "webifyLogoImg2", ["webifyLogo"] , "lazy")



    
    var tempElement =  document.getElementById('trustpilotImg');
    if (typeof(tempElement) != 'undefined' && tempElement != null)
      {
        
    //createImageDiv( animated_logo_S, "animatedLogo", "animatedLogo")

    createImageDiv(trustpilot, "trustpilotImg", ["image-100"] , "lazy")

    //cardIcons
    createImageDiv(cardIcon1, "cardIcon1", ["image-100"] , "lazy" )
    createImageDiv(cardIcon2, "cardIcon2", ["image-100"] , "lazy" )
    createImageDiv(cardIcon3, "cardIcon3", ["image-100"] , "lazy" )
    createImageDiv(cardIcon4, "cardIcon4", ["image-100"] , "lazy" )

    createImageDiv(linkedinIcon, "linkedinIcon", ["image-100"] , "lazy" )

    //products
    createImageDiv(bigProductShowcase, "bigProductShowcase", ["image-100"], "lazy" , "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw" )
    createImageDiv(long1ProductShowcase, "long1ProductShowcase", ["image-100"], "lazy" ,  "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw")
    createImageDiv(long2ProductShowcase, "long2ProductShowcase", ["image-100"], "lazy" , "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw")
    createImageDiv(long3ProductShowcase, "long3ProductShowcase", ["image-100"], "lazy" , "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw")
    createImageDiv(square1ProductShowcase, "square1ProductShowcase", ["image-100"],  "lazy" ,  "(max-width: 479px) 44vw, (max-width: 767px) 45vw, 22vw")
    createImageDiv(square2ProdProductShowcase, "square2ProdProductShowcase" ,[ "image-100"],  "lazy","(max-width: 479px) 44vw, (max-width: 767px) 45vw, 22vw")
    

    //Stats

    createImageDiv(graph1, "card-1", ["image-100", "carouselImage"] , "lazy" )
    createImageDiv(graph2, "card-2", ["image-100", "carouselImage"] , "lazy" )
    createImageDiv(graph3, "card-3", ["image-100", "carouselImage"] , "lazy" )

    //ProcessImg
    createImageDiv(design, "designImg", [  "processImg"] , "lazy" )
    createImageDiv(develop, "developImg", [ "processImg"] , "lazy" )
    createImageDiv(launch, "launchImg", [ "processImg"] , "lazy" )
    


    createImageDiv(buttonNext, "buttonNext1", ["image-100"] )
    createImageDiv(buttonNext, "buttonNext2", ["image-100"] )
    createImageDiv(buttonNext, "buttonNext3", ["image-100"] )
    createImageDiv(buttonNext, "buttonNext4", ["image-100"] )
    createImageDiv(buttonNext, "buttonNext5", ["image-100"] )
    createImageDiv(rating5, "rating5", ["image-100"] )
    createImageDiv(languageIcon, "languageIcon", ["languageIcon"] )

    //bg
    
    createImageDiv(dots, "bg_dots1", ["image-100","cover"] , "eager")
    createImageDiv(dotsSmall, "bg_dots2_right", ["image-100"] )
    createImageDiv(dotsSmall, "bg_dots2_left", ["image-100"] )

    createImageDiv(line1, "bg_line1", ["pattern-image"] , "eager")
    createImageDiv(line2, "bg_line2", ["image-100"] , "lazy")
    createImageDiv(line3, "bg_line3", ["image-100"] , "lazy")
    createImageDiv(line4, "bg_line4", ["image-100"] , "lazy")
    createImageDiv(line5, "bg_line5", ["image-100"] , "lazy")
    createImageDiv(line6, "bg_line6", ["image-100"] , "lazy")
    createImageDiv(line8, "bg_line8", ["image-100"] , "lazy")
}
}