/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/
function Dog(name, breed)  {
    this.name = name;
    this.breed = breed;
    this.status = 'test';
    this.changeStatus = function(){
      this.status = 'dog run';
      console.log('dog runs', this.status, this.name)
    };
    this.showProps = function(){
      for (let key in this) {
        //console.log( key, this[key] );
       console.log('hah')
      }
    };
}
var dogF = new Dog('Fun','terier');
dogF.changeStatus();
dogF.showProps();
console.log(dogF)
