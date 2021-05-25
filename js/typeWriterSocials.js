var i = 0;
var txt = 'socials';
var speed = 160;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("titleConsole").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function(){
        typeWriter();
    }, 1000);
}, false);