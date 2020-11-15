

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

    
     window.addEventListener('DOMContentLoaded', function(){

        var myForm = document.getElementById('myForm')
        var submit = document.getElementById('submit');
        var check = document.getElementById('test_btn');
        console.log(myForm)
        var name = myForm.elements.name;
        var email = myForm.elements.email;
        var password = myForm.elements.password;
        var howMuchApples = myForm.elements.howMuchApples;
        var thanks = myForm.elements.thanks;
        var agree = myForm.elements.agree;

        // name.addEventListener('change', function(){
        name.addEventListener('change', function(){
             if(name.validity.tooShort){
                name.setCustomValidity('Too short');
                console.log('hyeta')
            }else{
                console.log('zaebok')
            name.setCustomValidity('perfect')
            }
            
        })   
       
        
        agree.addEventListener('click',function(){
            if(agree.checked){
              submit.disabled = false;      
            }else{
              alert()  
              submit.disabled = true;
            };
          },false)
        
    // function checkName(nameValue){
           
    // }   
 /*   function checkEmail(){
        if(email.validity.tooShort || email.validity.typeMismatch){   
            email.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
            alert("Ну и зря, не получишь бандероль с яблоками!");
        }     
    }
    function checkPass(){
        if(password == ''){
            password.setCustomValidity("Я никому не скажу наш секрет");
            alert("Я никому не скажу наш секрет");
        }else if(password.validity.tooShort){
         
            password.setCustomValidity("Слишком краток пароль");
            alert("Слишком краток пароль");
        }
    }
    function checkApples(applesValue){
        if(applesValue == '0'){    
            howMuchApples.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
            alert("Ну хоть покушай немного... Яблочки вкусные");
        }else if(applesValue < 0){
         
            alert('Ты чего,сам сюда яблок принёс?')
        }
    }
        
        name.addEventListener('change', function (e){
        
            var nameValue = e.target.value;
            if(!name.checkValidity() || nameValue == ''){
                //  name.style.border = '1px solid red';
                 name.setCustomValidity('Как тебя зовут дружище?!') 
                 // alert('Как тебя зовут дружище?!');
              }
            // checkName(nameValue);
            console.log(nameValue)
        }, true)
       
        email.addEventListener('change', function(e){
            var emailValue = e.target.value; 
            checkEmail();
        },false)
       
        password.addEventListener('change', function(e){
            var passwordValue = e.target.value; 
            checkPass();
        }, false)
       
        howMuchApples.addEventListener('change',function(e){
            var applesValue = e.target.value;
            checkApples(applesValue);
        },false)
       
        agree.addEventListener('click',function(){
            if(agree.checked){
              submit.disabled = false;      
            }else{
              alert()  
              submit.disabled = true;
            };
          },false)

        submit.addEventListener('click', function(e){
            //   e.preventDefault();
              console.log(myForm)
              if(myForm){
                  console.log('zaebok')

              }
          }, false)
          
        check.addEventListener('click', function(){
              checkName();
              checkEmail();
              checkPass();
              checkApples();


        }, false)  */
     })