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
  console.log(btn, 'success fancyOpen');
  let options = { ...defaults };
  const id = btn.data('fancy-link');
  const modal = $(`[data-fancy-modal="${id}"]`);

  switch (id) {
    case 'content':
    case 'event':
    case 'speaker':
    case 'person':
    case 'route':
    case 'route-import':
    case 'route-border':
    case 'route-filters':
    case 'about':
      options.animationEffect = 'left';
      break;
    case 'edit':
    case 'edit-profile':
      options.animationEffect = 'left';
      options.beforeShow = function(instance, slide) {
        const modal = slide.src
        const inputs = modal.querySelectorAll('[data-edit-input]')
        const fields = document.querySelectorAll('[data-edit-field]')

        fields.forEach((field, i) => {
          const value = field.textContent

          inputs[i].value = value
          inputs[i].dispatchEvent(new Event('change'))
        })

        const file = modal.querySelector('[data-file-input]')

        if (file) {
          const files = document.querySelectorAll('[data-file-field]')
          const fileNames = Array.from(files).map(item => {
            return {name: item.textContent}
          })

          file.appFile.clearFiles()
          file.appFile.setFiles(fileNames)
        }
      }
      break;
    case 'ask':
      options.animationEffect = 'left';
      options.afterClose = function(instance, slide) {
        const modal = $(slide.src)
        modal.find('[data-response]').removeClass('active')
        modal.find('[data-form]').removeClass('hidden')
      }
      break;
    case 'filters':
      options.animationEffect = 'left';
      options.beforeClose = function() {
        const dateModal = document.querySelector('[data-fancy-modal="date"]')

        dateModal.classList.remove('active')
      }
      break;
    case 'docs':
      options.beforeShow = function(instance, slide) {
        const modal = $(slide.src)
        const href = btn.attr('href')

        modal.find('img').attr('src', href)
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
