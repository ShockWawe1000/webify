document.addEventListener("DOMContentLoaded", function () {
  const contactFormHTML = `
    <div class="contactRight">
      <div class="containerContactForm">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
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
              <div class="app-title" id="result">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class="app-contact">CONTACT : +389 71 878 598</div>
            </div>
            <div class="screen-body-item">
              <form id="form" class="app-form" method="POST" class="price-card">
                <input type="hidden" name="access_key" value="40d910f7-a3af-41a9-a081-7323558c24e0">
                <div class="app-form-group">
                  <input class="app-form-control" name="name" placeholder="NAME" value="Krisantus Wanandi" required>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" name="email" placeholder="EMAIL" required>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" name="number" placeholder="CONTACT NO">
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" name="mesage" placeholder="MESSAGE" required>
                </div>
                <div class="app-form-group buttons">
                  <button type="button" class="app-form-button">CANCEL</button>
                  <button type="submit" class="app-form-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="credits">designed by Webify</div>
      </div>
    </div>
  `;
  document.getElementById("contactForm").innerHTML = contactFormHTML;
});