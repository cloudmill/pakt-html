import 'parsleyjs';
import mask from "inputmask";

$(() => {

  // parsley
  $("form").parsley();

  Parsley.addMessages("ru", {
    defaultMessage: "Некорректное значение",
    type: {
      email: "Введите адрес электронной почты",
      url: "Введите URL адрес",
      number: "Введите число",
      integer: "Введите целое число",
      digits: "Введите только цифры",
      alphanum: "Введите буквенно-цифровое значение",
    },
    notblank: "Это поле должно быть заполнено",
    required: "Заполните поле",
    pattern: "Это значение некорректно",
    min: "Это значение должно быть не менее чем %s",
    max: "Это значение должно быть не более чем %s",
    range: "Это значение должно быть от %s до %s",
    minlength: "Минимум %s символов",
    maxlength: "Это значение должно содержать не более %s символов",
    length: "Это значение должно содержать от %s до %s символов",
    mincheck: "Выберите не менее %s значений",
    maxcheck: "Выберите не более %s значений",
    check: "Выберите от %s до %s значений",
    equalto: "Пароли не совпадают",
  });

  Parsley.setLocale('ru');

  // маска на телефон
  Inputmask({ mask: "+7 (999) 999-99-99", showMaskOnHover: false }).mask(
    "[data-mask-phone]"
  )

  // маска на дату
  Inputmask({ mask: "99.99.9999", showMaskOnHover: false }).mask(
    "[data-mask-date]"
  )

  // валидация телефона
  window.Parsley
    .addValidator('phone', {
      requirementType: 'string',
      validateString: function(value) {
        const result = value.replaceAll(/\D/g, '')

        return result.length === 11
      },
      messages: {
        ru: 'Заполните поле'
      }
    })

  // кастом валидатиция на цифры и спецсимволы
  window.Parsley
    .addValidator('string', {
      requirementType: 'string',
      validateString: function(value) {
        const regexp = /[^a-zа-яё\s]/i

        return !regexp.test(value)
      },
      messages: {
        ru: 'Спецсимволы и цифры запрещены'
      }
    })

  // кастом валидатиция на договор
  window.Parsley
    .addValidator('contract', {
      requirementType: 'integer',
      validateNumber: function(value, requirement) {
        return 10 === String(value).length;
      },
      messages: {
        ru: 'Неверный формат номера договора'
      }
    })

  // смена типа инпута пароля
  const items = document.querySelectorAll('[data-password]')

  items.forEach(item => {
    const input = item.querySelector('input')
    const btn = item.querySelector('[data-password-btn]')

    btn.onclick = function() {
      if (this.classList.contains('active')) {
        btn.classList.remove('active')
        input.setAttribute('type', 'password')
      } else {
        btn.classList.add('active')
        input.setAttribute('type', 'text')
      }
    }
  })

  // валидация пароля + пароль еще раз
  const passwordInputs = $('[data-input-password]');

  passwordInputs.each(function () {
    const input = $(this);
    const equalTo = $($(this).attr('data-parsley-equalto'));

    input.parsley().on('field:error', function () {
      const equalToError = input.parent().find('.parsley-equalto');

      if (input.val().length > 0 && input.val().length < 6) {
        equalToError.css('display', 'none');
      } else {
        equalToError.css('display', '');
      }
    });

    input.on('input', function () {
      if ($(this).val() === equalTo.val()) {
        equalTo.removeClass('parsley-error');
        equalTo.addClass('parsley-succes');
        equalTo.parent().find('li').remove();
      }
    });

    equalTo.on('input', function () {
      if ($(this).val() === input.val() && input.val().length >= 6) {
        input.removeClass('parsley-error');
        input.addClass('parsley-succes');
        input.parent().find('li').remove();
      }
    });
  });
});
