
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : "!23123", "age": 15, "password": "*****" }'

*/
window.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('form');
  var form1 = document.getElementById('form1');

  var button = document.querySelector('button');
  button.addEventListener('click',function(e){
      e.preventDefault();
      let formObj = {
        name : form.elements.name.value,
        age : form.elements.age.value,
        password : form.elements.password.value,
      }
     
      
      console.log(JSON.stringify(formObj))
  
  })
  var button1 = form1.querySelector('button');
  button1.addEventListener('click', function (e) {
    e.preventDefault();
    var stringValue = form1.querySelector('input').value;
    console.log(stringValue)
    var parse = JSON.parse(stringValue)
    console.log(parse)
  }
  )
})




