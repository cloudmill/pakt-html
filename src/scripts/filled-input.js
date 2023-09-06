
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-input]')

  if (inputs.length) {
    inputs.forEach(input => {
      const parent = input.closest('[data-input-parent]')
      const isNumber = input.hasAttribute('data-input-number')

      input.oninput = function() {

        if (isNumber) {
          this.value = this.value.replaceAll(/\D/g, '')
        }
        
        if (this.value) {
          parent.classList.add('filled')
        } else {
          parent.classList.remove('filled')
        }
      }
    })
  }
})