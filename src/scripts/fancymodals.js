import '@fancyapps/fancybox';

export const defaults = {
  closeExisting: true,
  touch: false,
  hideScrollbar: false,
  autoFocus: false,
  baseTpl:
    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
    '<div class="fancybox-bg"></div>' +
    '<div class="fancybox-stage"></div>' +
    '</div>',
  animationEffect: 'zoom',
  animationDuration: 400,
  // beforeClose: function(instance, slide) {
  //   $(slide.src).closest('.fancybox-container').removeClass('open')
  // }
};

// fancybox
$(() => {
  $('[data-fancy-button]').on('click', function (event) {
    event.preventDefault();

    fancyOpen($(this));
  });
});

export function fancyOpen(btn) {
  let options = { ...defaults };
  const id = btn.data('fancy-button');
  const modal = $(`[data-fancy-modal="${id}"]`);

  switch (id) {
    case 'filters':
      options.animationEffect = 'left';
      options.beforeClose = function() {
        const dateModal = document.querySelector('[data-fancy-modal="date"]')

        dateModal.classList.remove('active')
      }
      break;
    case 'container':
      options.animationEffect = 'right-left'
      break;
    default:
      options = {
        ...defaults,
        beforeShow: function() {}
      }
  }

  $.fancybox.defaults = { ...$.fancybox.defaults, ...options };
  $.fancybox.open(modal);
}
