import "./styles/app.scss";

import "./scripts/real-tabs";
import "./scripts/filled-input";
import "./scripts/tooltip";
import "./scripts/form-validation";
import "./scripts/form-response";
import "./scripts/fancymodals";
import "./scripts/select";
import "./scripts/accordion";

// checkbox payment

{
  document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('[data-checkbox-payment]')

    if (checkbox) {
      const container = document.querySelector('[data-payment-container]')
      const inputs = container.querySelectorAll('[data-hidden-input]')

      checkbox.onchange = function() {
        if (this.checked) {
          inputs.forEach(input => input.setAttribute('required', 'true'))
          container.classList.add('active')
        } else {
          inputs.forEach(input => input.removeAttribute('required'))
          container.classList.remove('active')
        }
      }
    }
  })
}