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

// tv modal toggle
{
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-tv-modal]')

    if (modal) {
      window.addEventListener('click', (e) => {
        const target = e.target.closest('[data-tv-button]')

        if (target) {
          modal.classList.toggle('active')
        }
      })
    }
  })
}

// profile news
{
  document.addEventListener('DOMContentLoaded', () => {
    const news = document.querySelector('[data-news]')
    
    if (news) {
      const buttons = document.querySelectorAll('[data-news-btn]')

      buttons.forEach(btn => {
        btn.onclick = function() {
          news.classList.toggle('active')
        }
      })
    }
  })
}

// feedback modal
{
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('[data-feedback-link]')
    const blocks = document.querySelectorAll('[data-feedback-block]')
    const button = document.querySelector('[data-feedback-back]')
    
    links.forEach((item, i) => {

      item.onclick = function() {
        document.querySelector('[data-feedback-block].active').classList.remove('active')
        blocks[i+1].classList.add('active')
      }
    })

    button.onclick = function() {
      document.querySelector('[data-feedback-block].active').classList.remove('active')
      blocks[0].classList.add('active')
    }
  })
}

// tarif change
{
  document.addEventListener('DOMContentLoaded', () => {
    const tarifPage = document.querySelector('[data-tarif]')

    if (tarifPage) {
      const buttons = tarifPage.querySelectorAll('[data-tarif-next]')
      const blocks = tarifPage.querySelectorAll('[data-tarif-block]')
      const items = tarifPage.querySelectorAll('[data-tarif-item]')

      buttons.forEach((item, i) => {
        item.onclick = function() {
          if (i+1 !== items.length) {
            items[i+1].classList.remove('locked')
          }
          items[i].classList.add('active')
          blocks[i].classList.remove('active')
          blocks[i+1].classList.add('active')
        }
      })
    }
  })
}

// copy
{
  document.addEventListener('DOMContentLoaded', () => {
    const copy = document.querySelectorAll('[data-copy]')

    copy.forEach(item => {
      const text = item.querySelector('[data-copy-text]')

      item.onclick = function() {
        item.classList.add('active')
        navigator.clipboard.writeText(text.textContent);
      }
    })
  })
}