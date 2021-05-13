const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function(){
    for (let i=1; i<targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top 
            + targetElement[i].clientHeight * 0.4
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})

function firstscript() {
    targetElement[0].classList.add("show");
}

window.onload = firstscript;

var btn = document.getElementById('omikuji-btn');
var img = document.getElementById('omikuji-img')

btn.addEventListener('click', function(){
    var n = Math.floor(Math.random() * 5);
    switch(n){
        case 0:
            btn.textContent = "大吉";
            img.src = "images/daikiti.png";
            break;
        case 1:
            btn.textContent = "中吉";
            img.src = "images/tyuukiti.png";
            break;
        case 2:
            btn.textContent = "小吉";
            img.src = "images/syoukiti.png";
            break;
        case 3:
            btn.textContent = "吉";
            img.src = "images/kiti.png";
            break;
        case 4:
            btn.textContent = "凶";
            img.src = "images/kyou.png";
            break;
    }
})