/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
window.addEventListener("DOMContentLoaded", (e) => {
    // localStorage.removeItem("posts");
    var loadBtn = document.getElementById("load");
    var about = document.querySelector(".about");
    var title = document.querySelector(".title");
    var createBtn = document.getElementById("create");
    var postsArray = [];

    class Posts {
        constructor(_id, isActive, title, about, likes, created_at) {
            this._id = _id ? _id : new Date();
            this.isActive = isActive;
            this.title = title;
            this.about = about;
            this.likes = likes ? likes : 0;
            this.created_at = created_at ? created_at : new Date();

            this.addLike = this.addLike.bind(this);
            this.render();
        }
        addLike() {
            this.likes++;
            var addlikes = document.querySelector(
                `[data-id="${this._id}"] .like`
            );
            addlikes.innerHTML = this.likes;
            postsArray.forEach((post) => {
                if (post._id === this._id) {
                    post.likes = this.likes;
                }
            });
            localStorage.setItem("posts", JSON.stringify(postsArray));
        }
        render() {
            var div = document.createElement("div");
            div.dataset.id = this._id;
            div.innerHTML = `
                <p> status ${this.isActive}</p>
                <p> title ${this.title}</p>
                <p> about ${this.about}</p>
                <p class="like"> ${this.likes}</p><button type="button"class="addLikeBtn">AddLike</button>
                <p> created_at ${this.created_at}</p>
            `;
            var btn = div.querySelector(".addLikeBtn");
            btn.addEventListener("click", this.addLike);
            var view = document.querySelector(".view");
            view.appendChild(div);
        }
    }

    if (localStorage.getItem("posts")) {
        var loadedPosts = JSON.parse(localStorage.getItem("posts"));
        console.log(loadedPosts);
        loadedPosts.forEach((post) => {
            var postArr = new Posts(
                post._id,
                post.isActive,
                post.title,
                post.about,
                post.likes,
                post.created_at
            );
            postsArray.push(postArr);
        });
    } else {
        console.log("hyeta");
    }

    const convertToJSON = (response) => {
        console.log(response);
        return response.json();
    };
    createBtn.addEventListener("click", (e) => {
        var newPost = new Posts(null, true, title.value, about.value);
        postsArray.unshift(newPost);
        title.value = "";
        about.value = "";
        localStorage.setItem("posts", JSON.stringify(postsArray));
        window.location.reload();
    });

    loadBtn.addEventListener("click", (e) => {
        fetch("http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2")
            .then(convertToJSON)
            .then((post) => {
                console.log(post);

                post.forEach((element) => {
                    var newPost = new Posts(
                        element._id,
                        element.isActive,
                        element.title,
                        element.about,
                        element.likes,
                        element.created_at
                    );
                    postsArray.push(newPost);
                });
                console.log(postsArray);
                localStorage.setItem("posts", JSON.stringify(postsArray));
            });
    });
});
