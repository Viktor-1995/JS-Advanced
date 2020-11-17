/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/
window.addEventListener('load', function(){
function Comment(name, text, url){
    this.name = name;
    this.text = text;
    this.avatarUrl = url;
    this.likes = 0;
    } 

// console.log(Commentary.prototype)
var comment1 = new Comment('name1', 'text1');
    comment1.avatarUrl = 'url1'; 
var comment2 = new Comment('name2', 'text2', 'url2');
var comment3 = new Comment('name3', 'text3', 'url3');
var comment4 = new Comment('name4', 'text4', 'url4');

var first = {
  name: 'ww',
  text: 'yess',
  likes: 0,
}

Object.setPrototypeOf(first, comment1)

console.log(first);
console.log(comment1);
console.log(first.avatarUrl);

var commentsArray = [comment1, comment2, comment3, comment4];
var div = document.getElementById('CommentsFeed');
     
function viewComments (array){
    

    for(var i = 0; i < array.length; i++){
        var divv = document.createElement('div');     
        Arr = array[i];
       
        divv.innerText = Arr.name +' ' + Arr.text +' ' +  Arr.avatarUrl +' ' +  Arr.likes;
        div.appendChild(divv)
        console.log(Arr.name)
       
    }
    
}
viewComments(commentsArray)
})