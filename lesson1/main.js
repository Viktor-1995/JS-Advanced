/*
  Задание 1.
  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)
  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore
  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;
    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,
      var myNumber = '251'
      myNumber.toString(16) // fb
*/
var max = 255;
var c;

    getRandomInt(max);
    var r = getRandomInt(max);
    var g = getRandomInt(max);
    var b = getRandomInt(max);

    var div = document.createElement('div');
    var span = document.createElement('span');
    span.style = 'position:absolute;top:50%;width:100%;text-align:center;';


    document.body.style.background = "#" + Number(r).toString( 16 ) + Number(g).toString( 16 ) + Number(b).toString( 16 ) ;
    var c = Number(r).toString( 16 ) + Number(g).toString( 16 ) + Number(b).toString( 16 );
    span.innerText = 'now color of background #' + c ;
  

  function getRandomInt(max) {

      return Math.floor(Math.random() * Math.floor(max));

    }


  function changeColor(  ){

      getRandomInt(max);
          var r = getRandomInt(max);
          var g = getRandomInt(max);
          var b = getRandomInt(max);
  
        document.body.style.background = "rgb( " + r + "," + g + "," + b + ")" ;

      var c = r + "," + g + "," + b ;
      span.innerText = 'now color of background ' + c;
  }
  
 div.appendChild(span);
document.body.appendChild(div);

