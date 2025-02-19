export function tiltCardsLogic() {
  let cardEls = document.getElementsByClassName("card");
  
  Array.from(cardEls).forEach(cardEl => {
      cardEl.addEventListener("mousemove", (e) => {
          const { x, y } = cardEl.getBoundingClientRect();
          cardEl.style.setProperty("--x", e.clientX - x);
          cardEl.style.setProperty("--y", e.clientY - y);
      });
  });
}