/*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */
window.addEventListener("DOMContentLoaded", () => {
    var textToCheck = document.getElementById("text").innerText;
    var result = document.getElementById("out");

    var words = textToCheck.match(/[a-zA-Z]+/g);
    console.log(words);
    var ae = textToCheck.match(/[a-e]\w+/g);
    console.log(ae);
    var year = textToCheck.match(/[0-9]{4}/g);
    console.log(year);
    var square = textToCheck.match(/\[\w+\]/g);
    console.log(square);
    var formats = textToCheck.match(/\B\.\w{1,4}\b/g);
    console.log(formats);
    var emails = textToCheck.match(/(\w+)@(\w+)\.(com)/g);
    console.log(emails);
    var toUpperCase = textToCheck.match(/[A-Z]\w+/g);
    console.log(toUpperCase);
    var phoneNumbers = textToCheck.match(
        /\+[0-9]{2}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/g
    );
    console.log(phoneNumbers);
});
