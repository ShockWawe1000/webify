
let logo = document.getElementById("animatedLogo")


function endIntro(){
    setTimeout(()=>{
        let intro = document.getElementById("intro")
        intro.style.top = "-100vh";
    },39)
    
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
