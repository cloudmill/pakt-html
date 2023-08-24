
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-input]')

  if (inputs.length) {
    inputs.forEach(input => {
      const parent = input.closest('[data-input-parent]')
      input.oninput = function() {
        if (this.value) {
          parent.classList.add('filled')
        } else {
          parent.classList.remove('filled')
        }
      }
    })
  }
})