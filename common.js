$('a.btn_action').on('click',function(){
cordova.InAppBrowser.open('http://app.u-lisi.com.ua/', 'location=no');
alert('click to button');
});
$(document).ready(function(){
alert('is ready');
});

var main = function() { //главная функция
 
    $('.icon-menu').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */
	$('.menu').animate({ //выбираем класс menu и метод animate
 
            left: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */
 
        }, 200); //скорость движения меню в мс
         
        $('body').animate({ //выбираем тег body и метод animate
 
            left: '285px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */
 
        }, 200); //скорость движения меню в мс
			$('.overlay').css({'display':'block','opacity':'1'});
    });

 
/* Закрытие меню */
 
    $('.overlay').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({ //выбираем класс menu и метод animate
           left: '-285px' /* при клике на крестик меню вернется назад в свое
              положение и скроется */
       }, 200); //скорость движения меню в мс
   $('body').animate({ //выбираем тег body и метод animate
           left: '0px' //а содержимое страницы снова вернется в положение 0px
        }, 200); //скорость движения меню в мс
$('.overlay').css({'display':'none','opacity':'0'});
 });
};
 
$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */
