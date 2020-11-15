
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
var button = document.querySelectorAll('.showButton');
var buttonArray = Array.from(button);

// // console.log(buttonArray);
//   for(var i = 0; i < buttonArray.length;i++){}

var container = document.querySelectorAll('.tab');
var containerArray = Array.from(container);
 
     // var button1 = document.
     
    for(var item of buttonArray){ 

        item.onclick = function( e ){
            var buttonn = e.target.dataset.tab
            console.log(buttonn);

            for(var itemCont of containerArray){
                var tabContainer = itemCont.dataset.tab;
                if(tabContainer == buttonn){
                  console.log(tabContainer);
                  hide();
                  itemCont.classList.toggle('active');

                }  
            }
            for(var itemCont of containerArray){
              var tabContainer = itemCont.dataset.tab;
                  if(itemCont.classList.contains("active") && tabContainer == 3){ 
                     for(var itemCont of containerArray){
                         if(itemCont.classList.contains("active")){
                              setTimeout(hide ,3000)
                              console.log(container)
                            }
                      }          
              }
            }  

        }
       
    }
  
    var hide = function(){ 
      for(var itemCont of containerArray){
          itemCont.classList.remove('active')
      } 
    }