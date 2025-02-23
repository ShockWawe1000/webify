import binance from "../image/binance.png"
import btc from "../image/btc.png"
import eth from "../image/eth.png"
import sol from "../image/sol.png"
import trustpilot from "../image/trustpilot.png"
import moonpay from "../image/moonpay.png"

import clutch from "../image/clutch.svg"
import logo222 from "../image/logo222.svg"
import refund from "../image/refund.svg"
import team from "../image/team.svg"
import crownImg from "../image/crown.svg"
import webify_logo from "../image/webify_logo.svg"
import transition from "../image/load_animation.svg"

import bigProductShowcase from "../image/products/big.webp"
import long1ProductShowcase from "../image/products/long1.webp"
import long2ProductShowcase from "../image/products/long2.webp"
import long3ProductShowcase from "../image/products/long3.webp"
import square1ProductShowcase from "../image/products/square1.webp"
import square2ProdProductShowcase from "../image/products/square2.webp"

import animated_logo from "../image/intro.gif"

function createImageDiv(element, id , setClass ,sizes)
{
    if (document.getElementById(id))
    {
        const tempImg = new Image();
        tempImg.src=  element
        tempImg.classList.add(setClass)
        tempImg.setAttribute('loading', 'lazy');
        tempImg.setAttribute('alt', id);
        if(sizes){ tempImg.setAttribute('sizes', sizes);}
        var parentElement = document.getElementById(id)
        parentElement.append(tempImg)
    
    }

    else
    console.log("ID doest exist:"+ id)

}

function createGifDiv(element, id , setClass) {
   
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

function createMultipleImageDiv(element, id, setClass)
{
 

        document.querySelectorAll(id).forEach(
            el => {    
           
                const tempImg = new Image();
                tempImg.src = element;
                tempImg.classList.add(setClass)
                el.append(tempImg)
           
            }
        );
    
}

export function setImages(){
//    createImageDiv(binance, "binanceImg", "image-100")
//    createImageDiv(moonpay, "moonpayImg", "image-100")
//    createImageDiv(btc, "btcImg", "image-100")
//    createImageDiv(sol, "solImg", "image-100")



    createImageDiv(webify_logo, "webify_logo", "webifyLogo")
    createImageDiv(team, "teamImg", "image-100")
    createImageDiv(refund, "refundImg", "image-100")
    createImageDiv(trustpilot, "trustpilotImg", "image-100")
    createImageDiv(crownImg, "crownImg", "image-100")
    createImageDiv(webify_logo, "webifyLogoImg2", "webifyLogo")
    createImageDiv(animated_logo, "animatedLogo", "animatedLogo")

    createImageDiv(bigProductShowcase, "bigProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw" )
    createImageDiv(long1ProductShowcase, "long1ProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw")
    createImageDiv(long2ProductShowcase, "long2ProductShowcase", "image-100", "(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw")
    createImageDiv(long3ProductShowcase, "long3ProductShowcase", "image-100","(max-width: 479px) 92vw, (max-width: 767px) 93vw, 46vw")
    createImageDiv(square1ProductShowcase, "square1ProductShowcase", "image-100", "(max-width: 479px) 44vw, (max-width: 767px) 45vw, 22vw")
    createImageDiv(square2ProdProductShowcase, "square2ProdProductShowcase", "image-100","(max-width: 479px) 44vw, (max-width: 767px) 45vw, 22vw")



    createGifDiv(transition, "loadingSvg", "transition")





    // window.onload= createMultipleImageDiv(project,".projectImg");
}