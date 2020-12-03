/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/

// fetch(url)
//   .then(testFunc)
//   .then(test2Func)
//   .then( res => {
//      return fetch()
//       .then( friendsResponse)
//       .then()
//   })
//   .then( func)

window.addEventListener("DOMContentLoaded", function () {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const convertToJSON = (response) => {
        console.log(response);
        return response.json();
    };

    fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
        .then(convertToJSON)
        .then((res) => {
            var humans = [];
            res.map((item) => {
                let elem = new Object();
                elem.name = item.name;
                elem.age = item.age;
                humans.push(elem);
            });
            console.log(humans);
            return humans[getRandomInt(humans.length - 1)];
        })
        .then((res) => {
            console.log(res);
            return fetch(
                "http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2"
            )
                .then(convertToJSON)
                .then((friend) => {
                    var friendss = friend[0].friends;
                    res.friends = friendss;
                    console.log(res);
                    let elem = document.createElement("div");
                    elem.innerHTML = `
                      <div>
                        ${res.name}, ${res.age}
                      </div>
                    `;
                    console.log(friendss);

                    for (var i = 0; i < friendss.length; i++) {
                        let div = document.createElement("div");
                        div.innerHTML = `
                          <div>
                          His friend:${friendss[i].name}
                        </div>
                          `;
                        elem.appendChild(div);
                    }
                    document.body.appendChild(elem);
                });
            // console.log(friends);
        });
});
