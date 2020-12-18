var Suzuki = [
    "Suzuki/Suzuki_Bandit1.jpg",
    "Suzuki/Suzuki_Bandit2.jpg",
    "Suzuki/Suzuki_Bandit3.jpg",
    "Suzuki/Suzuki_Bandit4.jpg",
    "Suzuki/Suzuki_Bandit5.jpg",
    "Suzuki/Suzuki_Bandit6.jpg",
];
var Honda = [
    "Honda/Honda1.jpg",
    "Honda/Honda2.jpg",
    "Honda/Honda3.jpg",
    "Honda/Honda4.jpg",
    "Honda/Honda5.jpg",
    "Honda/Honda6.jpg",
];
var KTM = [
    "KTM/ktm1.jpg",
    "KTM/ktm2.jpg",
    "KTM/ktm3.jpg",
    "KTM/ktm4.jpg",
    "KTM/ktm5.jpg",
    "KTM/ktm6.jpg",
];
window.addEventListener("DOMContentLoaded", () => {
    var suzuki = document.getElementById("suzukiBandit");
    var suzuki_ul = suzuki.querySelector("ul");

    var honda = document.getElementById("hondaFireBlade");
    var honda_ul = honda.querySelector("ul");

    var ktm = document.getElementById("ktm390");
    var ktm_ul = ktm.querySelector("ul");

    var Btn = document.querySelectorAll(".main_wrap");

    var step = 400;

    function createImgSuzuki() {
        for (var i = 0; i < 6; i++) {
            var cover = document.createElement("li");
            cover.className = "coverImg";
            var link = document.createElement("a");
            link.href = "#" + Suzuki[i];
            link.className = "links";

            var largeLink = document.createElement("a");
            largeLink.id = Suzuki[i];
            largeLink.href = "#";
            largeLink.style = `background-image:url(${Suzuki[i]})`;
            largeLink.className = "largeLink";

            var img = document.createElement("img");
            img.src = Suzuki[i];
            img.alt = "";

            link.appendChild(img);
            cover.appendChild(link);
            suzuki.appendChild(largeLink);
            suzuki_ul.appendChild(cover);
        }
    }

    function createImgHonda() {
        for (var i = 0; i < 6; i++) {
            var cover = document.createElement("li");
            cover.className = "coverImg";
            var link = document.createElement("a");
            link.href = "#" + Honda[i];
            link.className = "links";

            var largeLink = document.createElement("a");
            largeLink.id = Honda[i];
            largeLink.href = "#";
            largeLink.style = `background-image:url(${Honda[i]})`;
            largeLink.className = "largeLink";

            var img = document.createElement("img");
            img.src = Honda[i];
            img.alt = "";

            link.appendChild(img);
            cover.appendChild(link);
            honda.appendChild(largeLink);
            honda_ul.appendChild(cover);
        }
    }

    function createImgKTM() {
        for (var i = 0; i < 6; i++) {
            var cover = document.createElement("li");
            cover.className = "coverImg";
            var link = document.createElement("a");
            link.href = "#" + KTM[i];
            link.className = "links";

            var largeLink = document.createElement("a");
            largeLink.id = KTM[i];
            largeLink.href = "#";
            largeLink.style = `background-image:url(${KTM[i]})`;
            largeLink.className = "largeLink";

            var img = document.createElement("img");
            img.src = KTM[i];
            img.alt = "";

            link.appendChild(img);
            cover.appendChild(link);
            ktm.appendChild(largeLink);
            ktm_ul.appendChild(cover);
        }
    }

    Btn.forEach((btnNext) => {
        var position = 0;
        btnNext.addEventListener("click", (e) => {
            console.log(e.currentTarget);
            console.log(e);
            var nextBtn = e.currentTarget.querySelector(".slider_next");
            var prevBtn = e.currentTarget.querySelector(".slider_prev");
            console.log(nextBtn);
            console.log(prevBtn);
            var ul = e.currentTarget.querySelector("ul");
            if (e.target == nextBtn) {
                function toLeft(ul) {
                    if (position < 3) {
                        position++;
                        ul.style.transform = `translateX(-${
                            step * position
                        }px)`;
                    } else {
                        position = 3;
                    }
                }
                toLeft(ul);
            }
            if (e.target == prevBtn) {
                function toRight(ul) {
                    if (position > 0) {
                        position--;
                        ul.style.transform = `translateX(-${
                            step * position
                        }px)`;
                    } else {
                        position = 0;
                    }
                }
                toRight(ul);
            }
        });
    });

    createImgSuzuki();
    createImgHonda();
    createImgKTM();
});
