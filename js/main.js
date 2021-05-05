'use strict';

{
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
        // btn.textContent = n;
    })
}