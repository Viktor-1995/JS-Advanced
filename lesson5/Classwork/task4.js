/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

window.addEventListener('DOMContentLoaded', function(){
  var word = document.getElementById('word').value;
  console.log(word); 
  var number = Number(document.getElementById('number').value);
  console.log(number)
  const isMobile = document.innerWidth < 768;
  var encrypt = document.getElementById('encrypt');
  var deEncrypt = document.getElementById('deEncrypt');
  var encrypt1 = document.getElementById('encrypt1');
  var encrypt3 = document.getElementById('encrypt3');
  var encrypt5 = document.getElementById('encrypt5'); 
  var deEncrypt1 = document.getElementById('deEncrypt1');
  var deEncrypt3 = document.getElementById('deEncrypt3');
  var deEncrypt5 = document.getElementById('deEncrypt5');



function encryptCesarWithStep(number){
  var word = document.getElementById('word').value;  
      if(document.querySelector('div')){
        document.body.removeChild(document.querySelector('div'))
      }
      var div = document.createElement('div')
        var array = [];
      for(var i = 0; i < word.length; i++){  
      array.push(word.charCodeAt(i))

      }
      // console.log(array)
      var array1 = [];
      for(var w = 0; w < word.length; w++){
        array1.push(array[w] + number)
        
      }
      // console.log(array1) 

        var newWord = '';
      for(var q = 0; q < word.length; q++){
      
        var w = String.fromCharCode(array[q]);
        newWord = newWord + w;
      }

      // console.log(newWord)
        var newWord1 = '';
        for(var q = 0; q < word.length; q++){
      
          var w = String.fromCharCode(array1[q]);
          newWord1 = newWord1 + w;
        }
        div.innerText = newWord1;
        document.body.appendChild(div)
        // console.log(newWord1)
        return newWord1;
}
// encryptCesarWithStep(number);

function deEncryptCesarWithStep(number){
  var word = document.getElementById('word').value;
      if(document.querySelector('div')){
        document.body.removeChild(document.querySelector('div'))
      }
      var div = document.createElement('div')
      var array = [];
      for(var i = 0; i < word.length; i++){  
      array.push(word.charCodeAt(i))

      }
      // console.log(array)
      var array1 = [];
      for(var w = 0; w < word.length; w++){
        array1.push(array[w] - number)
        
      }
      // console.log(array1) 

        var newWord = '';
      for(var q = 0; q < word.length; q++){
      
        var w = String.fromCharCode(array[q]);
        newWord = newWord + w;
      }

      // console.log(newWord)
        var newWord2 = '';
        for(var q = 0; q < word.length; q++){
      
          var w = String.fromCharCode(array1[q]);
          newWord2 = newWord2 + w;
        }
        div.innerText = newWord2;
        document.body.appendChild(div)
        // console.log(newWord2)
        return newWord2;
}
// deEncryptCesarWithStep(number);

var encryptCesar1 = encryptCesarWithStep.bind(null,1)
var encryptCesar2 = encryptCesarWithStep.bind(null,2)
var encryptCesar3 = encryptCesarWithStep.bind(null,3)
var encryptCesar4 = encryptCesarWithStep.bind(null,4)
var encryptCesar5 = encryptCesarWithStep.bind(null,5)
var A = encryptCesar3()
// console.log(A);
var deEncryptCesar1 = deEncryptCesarWithStep.bind(null,1);
var deEncryptCesar2 = deEncryptCesarWithStep.bind(null,2);
var deEncryptCesar3 = deEncryptCesarWithStep.bind(null,3);
var deEncryptCesar4 = deEncryptCesarWithStep.bind(null,4);
var deEncryptCesar5 = deEncryptCesarWithStep.bind(null,5);
var B = deEncryptCesar3();
// console.log(B);
encrypt.addEventListener('click', function(){
  // var word = document.getElementById('word').value;
  var number =  Number(document.getElementById('number').value);
  return encryptCesarWithStep(number);
})
deEncrypt.addEventListener('click', function(){
  // var word = document.getElementById('word').value;
  var number =  Number(document.getElementById('number').value);
  return deEncryptCesarWithStep(number);
})
encrypt1.addEventListener('click', function(){
  return encryptCesar1();
})
encrypt3.addEventListener('click', function(){
  return encryptCesar3();
})
encrypt5.addEventListener('click', function(){
  return encryptCesar5();
})
deEncrypt1.addEventListener('click', function(){
  return deEncryptCesar1();
})
deEncrypt3.addEventListener('click', function(){
  return deEncryptCesar3();
})
deEncrypt5.addEventListener('click', function(){
  return deEncryptCesar5();
})
})
