
let intro = document.getElementById("intro");
let logo = document.getElementById("animatedLogo");

export function introScreen(){
intro.style.display = "flex";

    $(document).ready(function() {
        $(window).on("load", function() { 

            function endIntro(){
                setTimeout(() => {

                    intro.style.backgroundColor = "rgba(0,0,0,0)";
                    logo.style.opacity = 0;
                
                    setTimeout(() => {
                       intro.style.display = "none";
                        window.scrollTo(0, 0);
                    }, 1000);
                }, 4300);
            }
         
            if (!sessionStorage.getItem('doNotShow')) {
                sessionStorage.setItem('doNotShow', 'true');
                endIntro();
            } else {
                document.getElementById("intro").style.display = "none"; 
            }
        });
    });

}
