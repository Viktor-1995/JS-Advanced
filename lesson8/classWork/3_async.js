/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
window.addEventListener("DOMContentLoaded", function () {
    companies();
    async function companies() {
        const companieFetch = await fetch(
            "http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2"
        );
        const companiesArray = await companieFetch.json();

        console.log(companiesArray);
        var table = document.createElement("table");
        table.innerHTML = `
              <tr>  
                <th>#</th>
                <th> Company </th>
                <th> Balance </th>
                <th> Registration Date </th>
                <th> Adress </th>
              </tr>  
        `;

        showDate = (date) => {};
        showAddress = (address) => {};

        for (var i = 0; i < companiesArray.length; i++) {
            var tableRaw = document.createElement("tr");
            tableRaw.className = "lists";
            tableRaw.innerHTML = `
                <td class = 'count'> ${i + 1} </td>
                <td> ${companiesArray[i].company} </td>
                <td> ${companiesArray[i].balance} </td>
                <td class = 'date'><button type = 'button' class = 'dateBtn'>push to show</button> </td>
                <td class = 'adress'> <button type = 'button' class = 'adressBtn'>push to show</button> </td>
                `;
            table.appendChild(tableRaw);
        }
        document.body.appendChild(table);
        var tablebtn = document.querySelector("table");
        var idCompanies = tablebtn.querySelectorAll(".count");
        var dateBtn = tablebtn.querySelectorAll(".dateBtn");
        var registrField = tablebtn.querySelectorAll(".date");
        var adressBtn = tablebtn.querySelectorAll(".adressBtn");
        var adressField = tablebtn.querySelectorAll(".adress");

        dateBtn.forEach((btn, key) => {
            // console.log(btn);
            // console.log(key);
            btn.addEventListener("click", (e) => {
                console.log(idCompanies[key].innerHTML);
                registrField[key].innerHTML = "";
                registrField[key].innerHTML = companiesArray[key].registered;
            });
        });

        adressBtn.forEach((btn, key) => {
            btn.addEventListener("click", (e) => {
                console.log(idCompanies[key].innerHTML);
                adressField[key].innerHTML = "";
                adressField[key].innerHTML =
                    companiesArray[key].address.country +
                    " " +
                    companiesArray[key].address.city +
                    " " +
                    companiesArray[key].address.street +
                    " " +
                    companiesArray[key].address.house;
            });
        });
    }
});
