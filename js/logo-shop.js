document.addEventListener('DOMContentLoaded', function() {

  //console.log(); находит в js-ce ошибку. Deftools



  //Скрываем/показываем Header при прокрутке
  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
    const header = document.querySelector('.header') // находим header и записываем в константу
    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
    window.addEventListener('scroll', () => { // при прокрутке страницы
      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
      const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет
      if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
        header.classList.add('header_hidden') // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header_hidden') // то отображаем header
      }
      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
    })
  }

  onScrollHeader() // вызываем основную функцию onScrollHeader




  
//Селект Диваны
const selector = document.querySelector(".hero__select")  

const choices = new Choices(selector, {
  searchEnabled: false,
  classNames: {
    containerOuter: 'choices hero__сategories-form',
   },
});
 


/*Счётчик количества пижам*/
$(document).ready(function() {
	$('body').on('click', '.hero__number-minus, .hero__number-plus', function(){
		var $row = $(this).closest('.hero__number');
		var $input = $row.find('.hero__number-text');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('hero__number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});
 
	$('body').on('change', '.hero__number-text', function(){
		var $input = $(this);
		var $row = $input.closest('.hero__number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;	
		} else if (max && val > max) {
			val = max;	
		}
		$input.val(val);
	});
});



  //Модальное окно//
  const btns = document.querySelectorAll('.modalGoBtn-js');
  const modalOverlay = document.querySelector('.modalGo-overlay ');
  const modals = document.querySelectorAll('.modalGo');

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      const currentModal = document.querySelector(`[data-target="${path}"]`);
      const closeBtn = currentModal.querySelector('.modalGo__js-close');

      
      modals.forEach((el) => {
        el.classList.remove('modalGo--visible');
      });
    
      currentModal.classList.add('modalGo--visible');
      modalOverlay.classList.add('modalGo-overlay--visible');

      //Для modalGo__js-close 
      // closeBtn.focus(); 
    });
  });

  // Реакция нажима в любом месте(выключатель окна) не удалять
  modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);
    
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modalGo-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modalGo--visible');
      });
    }
  });

  //Реакция нажима на Х(выключатель окна)
  modals.forEach((el) => {
    const closeBtn = el.querySelector('.modalGo__js-close');

    closeBtn.addEventListener('click', function () {
      modalOverlay.classList.remove('modalGo-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modalGo--visible');
      });
    });
  });



   //Маска телефона, здесь email//
   var maska = document.querySelector("input[type='email']"); //Всем input с атрибутом type со значением tel
   var im = new Inputmask("+7 (999)-999-99-99"); //Задали внешний вид маски
 
   //С помощью метода .mask инициализировали этот плагин и натравили его на selector-ы input[type='tel']
   im.mask(maska);
 
   //Валидация телефона//
   //Первый аргумент передаём селектор т.е html с классом form
   new JustValidate('.footer__form', {
     //Второй аргумент передаём его(form) правила
     rules: {
       name: { //data-validate-field="name"
         required: true, //Это означает поле обязательное для заполнение
         minLength: 2,
         maxLenght: 30
       },
       tel: { //data-validate-rules="phone"
         required: true, //Это означает поле обязательное для заполнение
         function: (name, value) => {
           const phone = selector.inputmask.unmaskedvalue()
           console.log(phone)
           return Number(phone) && phone.length === 10
         }
       },
       mail: { //data-validate-field="mail"
         required: true, //Это означает поле обязательное для заполнение
         email: true //Проверяет сама себя на валидность, например @ на месте
         // Validate email
       },
     },
     //От проверяющего дополнен код
     messages: { //Извещает об ошибке
       tel: {
         required: 'Укажите ваш телефон'
       },
       name: 'Как вас зовут?',
       mail: 'Укажите ваш e-mail'
     },
     colorWrong: '#ff5c00' //цвет сообщений валидации(ошибки фразы) и бордера
   });



   //Крестик в инпуте(e-mail) удаляет введённое слово//
   $(document).ready(function() {
    //x(Delete) в форме ввода
    $(document).ready(function() {
      $('.deleteJS>.footer__label').on('click', function() {
        $(this).next().val('');
      });
    })
  });


  //Клик БУРГЕР//
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger-js').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function() {
    $('#burger-js').click(function() {
      $(this).toggleClass('open');
    })
  })




  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    })
  })











});