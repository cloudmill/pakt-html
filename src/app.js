import "./styles/app.scss";

import "./scripts/real-tabs";
import "./scripts/filled-input";
import "./scripts/tooltip";
import "./scripts/form-validation";
import "./scripts/form-response";
import "./scripts/fancymodals";
import "./scripts/select";

// checkbox payment

{
  document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('[data-checkbox-payment]')

    if (checkbox) {
      const container = document.querySelector('[data-payment-container]')

      checkbox.onchange = function() {
        if (this.checked) {
          container.classList.add('active')
        } else {
          container.classList.remove('active')
        }
      }
    }
  })
}