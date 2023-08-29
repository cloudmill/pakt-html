import { defaults } from './fancymodals'

function resetForm(form) {
  const inputs = form.querySelectorAll('[data-input]')

  form.reset()
  inputs.forEach(input => {
    const parent = input.closest('[data-input-parent]')
    parent.classList.remove('filled')
  })
}

$(() => {
  const form = $('[data-form]');

  if (form.length !== 0) {

    form.each(function() {
      const ths = $(this)

      ths.on('submit', (e) => {
        e.preventDefault()

        formResponse(ths)
      })
    })
  }
});

export function formResponse(form) {
  const id = form.data('form')
  const responseContainer = form.closest('[data-response-container]')

  if (responseContainer.length) {
    form.addClass('hidden')
    responseContainer.find(`[data-response="${id}"]`).addClass('active')

    resetForm(form[0])
  } else {
    const options = {
      ...defaults,
      beforeClose: function() {
        resetForm(form[0])
      }
    }

    $.fancybox.defaults = {...$.fancybox.defaults, ...options}
    $.fancybox.open($(`[data-response=${id}]`))
  }
}