/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
window.addEventListener("DOMContentLoaded", () => {
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * Math.floor(max));
    // }
    // var r = getRandomInt(255);
    // var g = getRandomInt(255);
    // var b = getRandomInt(255);
    // localStorage.setItem("background", "rgb(" + r + "," + g + "," + b + ")");

    var background = localStorage.getItem("background");
    console.log(background);
    if (background !== null) {
        document.body.style.backgroundColor = background;
    }
});
