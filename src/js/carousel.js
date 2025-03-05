export function initCarousel() {

      
   
  document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 1; // Start with the second card in the center (index 1)
    const cards = document.querySelectorAll('.icon-cards__item');
    const content = document.querySelector('.icon-cards__content');
    let startX = 0;
    let isSwiping = false;

    function stopAnimation() {
      content.style.animation = 'none';
    }

    function updateCardPositions() {
      cards.forEach((card, index) => {
        card.classList.remove('left', 'center', 'right');
        card.removeAttribute('data-pointer');
        if (index === currentIndex) {
          card.classList.add('center');
        } else if (index === (currentIndex - 1 + 3) % 3) {
          card.classList.add('left');
          card.setAttribute('data-pointer', 'hover');
        } else if (index === (currentIndex + 1) % 3) {
          card.classList.add('right');
          card.setAttribute('data-pointer', 'hover');
        }
      });
    }

    function rotateCarousel() {
      content.style.transition = 'transform 0.6s ease-in-out';
      content.style.transform = `translateZ(-35vw) rotateY(${-120 * currentIndex}deg)`;
    }

    function moveLeft() {
      currentIndex = (currentIndex - 1 + 3) % 3;
      updateCardPositions();
      rotateCarousel();
      stopAnimation();
    }

    function moveRight() {
      currentIndex = (currentIndex + 1) % 3;
      updateCardPositions();
      rotateCarousel();
      stopAnimation();
    }

    function moveToCenter(event) {
      const clickedCard = event.target.closest('.icon-cards__item');
      if (!clickedCard) return;
      const clickedCardIndex = Array.from(cards).indexOf(clickedCard);
      currentIndex = clickedCardIndex;
      updateCardPositions();
      rotateCarousel();
      stopAnimation();
    }

    function handleTouchStart(event) {
      event.preventDefault(); // Prevent selection behavior
      startX = event.touches[0].clientX;
      isSwiping = true;
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;
      const moveX = event.touches[0].clientX - startX;
      
      // Prevents text/image selection
      event.preventDefault();

      if (Math.abs(moveX) > 50) {
        isSwiping = false;
        if (moveX < 0) {
          moveRight();
        } else {
          moveLeft();
        }
      }
    }

    function handleTouchEnd() {
      isSwiping = false;
    }

    updateCardPositions();
    rotateCarousel();

    cards.forEach(card => {
      card.addEventListener('click', moveToCenter);
    });

    content.addEventListener('touchstart', handleTouchStart, { passive: false });
    content.addEventListener('touchmove', handleTouchMove, { passive: false });
    content.addEventListener('touchend', handleTouchEnd);


  });
}

