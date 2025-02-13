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
import webify_logo from "../image/webify_logo.svg"

function createImageDiv(element, id , setClass )
{
    const tempImg = new Image();
    tempImg.src=  element
    tempImg.classList.add(setClass)
    tempImg.setAttribute('loading', 'lazy');
    tempImg.setAttribute('alt', id);
    var parentElement = document.getElementById(id)
    parentElement.append(tempImg)

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
    

    createImageDiv(binance, "binanceImg", "image-100")
    createImageDiv(moonpay, "moonpayImg", "image-100")
    createImageDiv(btc, "btcImg", "image-100")
    createImageDiv(sol, "solImg", "image-100")
    createImageDiv(webify_logo, "webify_logo", "webifyLogo")
    createImageDiv(team, "teamImg", "image-100")
    createImageDiv(refund, "refundImg", "image-100")
    createImageDiv(trustpilot, "trustpilotImg", "image-100")
    createImageDiv(webify_logo, "webifyLogoImg2", "webifyLogo")
    // window.onload= createMultipleImageDiv(project,".projectImg");
}