let intro = document.getElementById("intro")
let logo = document.getElementById("animatedLogo")


function endIntro(){
    setTimeout(()=>{
        intro.style.top = "-100vh";
    },20)
    console.log("ss")
}

export function introScreen(){
    console.log("ss")
    intro.style.top = "-100vh";
    if (document.readyState !== 'loading') {
        endIntro()
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            endIntro()
        });
    }



  

}
