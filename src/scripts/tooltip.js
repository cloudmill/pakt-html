import tippy from 'tippy.js';

export function tooltipInit() {
  if ($('.tooltip'.length)) {
    $('.tooltip').each(function() {
      const tooltipContent = $(this).find('.tooltip__container')[0];
      const tooltipMark = $(this).find('.tooltip__icon');
      const isBig = $(this).hasClass('tooltip--big')

      tippy(tooltipMark[0],  {
        content: tooltipContent.innerHTML,
        allowHTML: true,
        // trigger: 'click',
        appendTo: $('.main')[0],
        offset: [0, 14],
        theme: isBig ? 'big' : '',
        delay: 0,
        zIndex: 100000,
      });
    });
  }
}

$(() => {
  tooltipInit();
});