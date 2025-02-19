





function endIntro(){
   intro.style.display = "none"
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

export function introScreen(){
   
   

 
    if (document.readyState !== 'loading') {
        endIntro()
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            endIntro()
        });
    }

}
