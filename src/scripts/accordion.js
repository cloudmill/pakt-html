function accordionDropdown(e, root) {
  const accordion = $(root)
  const target = $(e.target)

  if (target.closest('[data-accordion-button]').length && !target.closest('.checkbox__label').length) {
    target.closest(accordion).toggleClass('active');
    target.closest(accordion).find('[data-accordion-dropdown]').eq(0).slideToggle()
  }
}

$(() => {
  window.addEventListener('click', (e) => {
    accordionDropdown(e, '[data-accordion]')
  })
})