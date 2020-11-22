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
window.addEventListener('DOMContentLoaded', function(){
function Comment(name, text, url){
    this.name = name;
    this.text = text;
    this.avatarUrl = url;
    this.likes = 0;
    } 

    Comment.prototype = {
      avatarUrl : 'url.jpg',
      addLikes : function addLikes (){
        this.likes++;
      }
    }


var comment1 = new Comment('name1', 'text1');
    comment1.avatarUrl = 'url1'; 
var comment2 = new Comment('name2', 'text2', 'url2');
var comment3 = new Comment('name3', 'text3', 'url3');
var comment4 = new Comment('name4', 'text4', 'url4');



var commentsArray = [comment1, comment2, comment3, comment4];
var showComments = document.getElementById('CommentsFeed');
     
function viewComments (commentsArray){
  
      commentsArray.forEach( comment => {
        let div = document.createElement('div');
  
        let title = document.createElement('h3');
        title.innerText = comment.name;
        div.appendChild(title);
  
        let description = document.createElement('p');
        description.innerText = comment.text;
        div.appendChild(description); 
  
        let avatar = document.createElement('img');
        avatar.src = comment.avatarUrl;
        div.appendChild(avatar);
  
        let likes = document.createElement('div');
        likes.className = 'like';
        likes.innerText = comment.likes;
        div.appendChild(likes);
  
        div.addEventListener('click', function() {
          console.log('dick')
          comment.addLikes();
          div.querySelector('.like').innerHTML = comment.likes;
          console.log(comment.likes)
        })
  
        showComments.appendChild(div);      
      })
    
    
}

viewComments(commentsArray)
})