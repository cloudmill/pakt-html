import "./styles/app.scss";

import "./scripts/real-tabs";
import "./scripts/filled-input";
import "./scripts/tooltip";
import "./scripts/form-validation";
import "./scripts/form-response";
import "./scripts/fancymodals";

// checkbox payment

{
  document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('[data-checkbox-payment]')

    if (checkbox) {
      const container = document.querySelector('[data-payment-container]')

      checkbox.onchange = function() {
        if (this.checked) {
          container.classList.remove('hidden')
        } else {
          container.classList.add('hidden')
        }
      }
    }
  })
}