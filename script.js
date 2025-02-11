
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
    