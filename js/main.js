


var body = document.body;
var icon = document.getElementById('dark')

function change() {
    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        icon.className = 'fa-solid fa-moon'
        icon.style.transform ='rotate(0deg)'
        icon.style.right = '25%'
        document.getElementById("message").innerHTML = "Wakeee uppp peopleeeeee. It is not sleep at time";

    }
    else{
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        icon.className = 'fa-solid fa-sun'
        icon.style.transform ='rotate(360deg)'
        icon.style.right = '50%'
        document.getElementById("message").innerHTML = "Спят усталые игрушки, книжки спят,\nОдеяла и подушки ждут ребят;\nДаже сказка спать ложится,\nЧтобы ночью нам присниться.\nТы ей пожелай - баю-бай.";
    }
    
}


