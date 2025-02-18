import { contactFormLogic, contactFormLogicModal } from "./contactForm";

const buttons = document.querySelectorAll(".openContactModal");
const modal = document.getElementById("modalContainer");
const modalContent = document.getElementById("modalContent");

let closeButton1, closeButton2;


function openContactModal() {
  const contactFormHTML = `
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <button class="screen-header-button close" id="closeButton1"></button>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title" id="resultModal">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT : +389 71 878 598</div>
        </div>
        <div class="screen-body-item">
          <form id="formModal" class="app-form" method="POST">
            <input type="hidden" name="access_key" value="40d910f7-a3af-41a9-a081-7323558c24e0">

              <div class="app-form-group">
                <input class="app-form-control"  name="name" placeholder="NAME"  autocomplete="given-name"  required>
              </div>
              
              <div class="app-form-group">
                <input class="app-form-control" name="email" placeholder="EMAIL" autocomplete="email"  required>
              </div>
              <div class="app-form-group">
                <input class="app-form-control" name="number" placeholder="CONTACT NO" autocomplete="tel"  >
              </div>
              <div class="app-form-group message">
                <input class="app-form-control" name="mesage" placeholder="MESSAGE"  autocomplete="off" required>
              </div>
            <div class="app-form-group buttons">
              <button type="button" class="app-form-button" id="closeButton2">CANCEL</button>
              <button type="submit" class="app-form-button">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="credits">designed by Webify</div>
  `;

  modalContent.innerHTML = contactFormHTML;

  // Set initial hidden styles before showing
  modal.classList.remove("hidden");
  modal.style.opacity = "0"; // Start fully transparent
  modalContent.style.transform = "translate(50vw, 50vh) scale(0)";
  modalContent.style.opacity = "0"; // Start fully transparent

  // Force reflow to apply initial styles before transition
  void modalContent.offsetWidth;

  // Animate the modal opening
  modal.style.transition = "opacity 0.3s ease-in-out";
  modalContent.style.transition = "transform 0.4s ease-out, opacity 0.3s ease-out";

  setTimeout(() => {
    modal.style.opacity = "1"; // Fade in background
    modalContent.style.transform = "translate(0, 0) scale(1)";
    modalContent.style.opacity = "1"; // Fade in modal content
  }, 10); // Small delay to ensure animation runs

  // Reattach close button listeners
  closeButton1 = document.getElementById("closeButton1");
  closeButton2 = document.getElementById("closeButton2");

  closeButton1.addEventListener("click", closeModal);
  closeButton2.addEventListener("click", closeModal);

  contactFormLogicModal("formModal", "resultModal");
}




function closeModal() {
  if (!modalContent) return;

 
  modalContent.style.transition = "transform 0.4s ease-in-out, opacity 0.3s ease-in-out";
  modal.style.transition = "opacity 0.3s ease-in-out";


  modalContent.style.transform = "translate(50vw, 50vh) scale(0)";
  modal.style.opacity = "0";


  setTimeout(() => {
    modal.classList.add("hidden");
    modalContent.innerHTML = "";
    modalContent.style.transform = "translate(0, 0) scale(1)"; 
    modal.style.opacity = "1"; 
  }, 400); // Match this to the transition duration
}

export function initContactButtons(){

  buttons.forEach((btn) => {
    btn.addEventListener("click", openContactModal);
  });
  
  
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}


