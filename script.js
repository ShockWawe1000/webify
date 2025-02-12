



      try {
        Typekit.load();
      } catch (e) {}
    

      !(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
        (n.className += t + "js"),
          ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
            (n.className += t + "touch");
      })(window, document);
    

      let typeSplit = new SplitType(".heading", {
        types: "words, chars",
        tagName: "span",
      });

      $(".heading-wrap").each(function (index) {
        let headings = $(this).find(".heading");
        let tl = gsap.timeline({ repeat: -1 });
        tl.set($(this), { opacity: 1 });
        headings.each(function (index) {
          if (index > 0) {
            tl.from(
              $(this).find(".char"),
              { yPercent: 100, stagger: { amount: 0.4 }, duration: 0.4 },
              "<0.1"
            );
          }
          if (index < headings.length - 1) {
            tl.to($(this).find(".char"), {
              delay: 1,
              yPercent: -150,
              stagger: { amount: 0.4 },
              duration: 0.4,
            });
          }
        });
      });
    



// Contact Form

      const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."
  var sent= false;
    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
                sent=true;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
              if (sent==false)
               result.innerHTML = "TRY <br> AGAIN" ;
             else
             result.innerHTML = "THANK <br> YOU" ;
            }, 3000);
        });
});