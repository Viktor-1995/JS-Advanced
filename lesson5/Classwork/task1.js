/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
var train = {};
    train.name = 'hynduai';
    train.speed = 0;
    train.people = 1;
    train.drive = function(){
            console.log(' Поезд', this.name, 'везет', this.people, 'со скоростью', this.speed)
            }
    train.stand = function(){console.log(' Поезд', this.name, 'остановился. Скорость', this.speed)} 
    train.takePeople = function(x){
        train.people = train.people + x;
        console.log(train.people)
    }  
    
  
