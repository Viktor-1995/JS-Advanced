

    // /*

    //     Документация:
        
    //     https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
    //     form.checkValidity() > Проверка всех полей формы на валидость
    //     form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

    //     formElement.validity > Объект с параметрами валидности поля 
    //     formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
    //         сообщения выведет message в браузерный попал

    //     Классы для стилизации состояния элемента
    //     input:valid{}
    //     input:invalid{}

        
    //     Задание:
        
    //     Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

    //     - Имя пользователя: type:text -> validation: required; minlength = 2;  
    //         Если пустое выввести сообщение: "Как тебя зовут дружище?!"
    //     - Email: type: email -> validation: required; minlength = 3; validEmail;
    //         Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
    //     - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
    //         Если пустой вывести сообщение: "Я никому не скажу наш секрет";
    //     - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
    //         Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
    //     - Напиши спасибо за яблоки: type: text -> validation: required; 
    //         Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

    //     - Согласен на обучение: type: checkbox -> validation: required;
    //         Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

    //     Внизу две кнопки:

    //     1) Обычный submit который отправит форму, если она валидна.
    //     2) Кнопка Validate(Проверить) которая запускает методы:
    //         - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
    //         - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    //  */
    

//  document.addEventListener('blur', function(e){

//  },false)

    // "use strict"
     window.addEventListener('DOMContentLoaded', function(){

        var myForm = document.getElementById('myForm')
        var submit = document.getElementById('submit');
        console.log(myForm)
        var name = myForm.elements.name;      
        var agree = myForm.elements.agree;
        var email = myForm.elements.email;
        var check = document.getElementById("test_btn")
        var pass = myForm.elements.password;
        var howMuchApples = myForm.elements.howMuchApples

        name.addEventListener('input', function(event){
            
              if(!name.validity.valid){
                name.setCustomValidity('Name please'); 
            }else{
                name.setCustomValidity('')
            }       
        });        

        email.addEventListener("input", function (event) {
            if (email.validity.typeMismatch) {
              email.setCustomValidity("I expect an e-mail, darling!");
            } else {
              email.setCustomValidity("");
            }
          });

        agree.addEventListener('click',function(e){
            var agree = myForm.elements.agree; 
            if(agree.checked){
            submit.disabled = false;      
            }else{
            alert()  
            submit.disabled = true;
            };
            console.log(myForm.checkValidity())
        },false)

        var cleanValidationMessage = function() {
            let arrOfInputs = Array.from(myForm.elements);
            arrOfInputs.forEach( item => {
                item.setCustomValidity('');
            })
        }
        
        check.addEventListener('click', function(event){
            cleanValidationMessage();
            if(name.validity.valid){
                console.log('Good name')
            }else{
                console.log(' Bad name ')
                name.setCustomValidity("Too short")
            }
            if (!email.validity.valid) {
                email.setCustomValidity("I expect an e-mail, darling!");
                console.log('Bad email')
            } else {
                
                console.log('Good email')
              }
             if(pass.validity.valid){
                 console.log('good  password')
             } else{
                 pass.setCustomValidity('I will keep silent!')
                 console.log('bad password')
             }
             if(howMuchApples.validity.valid){
                console.log('good  Apples')
             }else {
                 howMuchApples.setCustomValidity('please eat some apples ')
                 console.log('bad Apples')
             }
        })  




 
    }) 