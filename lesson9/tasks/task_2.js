/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
window.addEventListener("DOMContentLoaded", (e) => {
    var pushBtn = document.getElementById("push");

    if (localStorage.getItem("userLogin") !== null) {
        var userLogin = localStorage.getItem("userLogin");
        var div = document.createElement("div");
        div.innerText = "Hello " + userLogin;
        document.body.appendChild(div);
    }

    pushBtn.addEventListener("click", (e) => {
        var login = document.getElementById("login");
        var pass = document.getElementById("password");
        localStorage.setItem("userLogin", login.value);
        localStorage.setItem("userPass", pass.value);
        pass.value = "";
        login.value = "";
    });
    var exitBtn = document.getElementById("exit");
    exitBtn.addEventListener("click", (e) => {
        localStorage.removeItem("userLogin");
        localStorage.removeItem("userPass");
    });
});
