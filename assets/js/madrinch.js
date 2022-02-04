var textA = ["A", "4"];
var counterA = 0;
var elemA = document.getElementById("rotA");
var instA = setInterval(changeA, 2500);
var textI = ["I", "1"];
var counterI = 0;
var elemI = document.getElementById("rotI");
var instI = setInterval(changeI, 2500);

function changeA() {
    elemA.innerHTML = textA[counterA];
    counterA++;
    if (counterA >= textA.length) {
        counterA = 0;
        elemA.style.color = "#ff2828";
    } else {
        elemA.style.color = "#fff";
    }
}

function changeI() {
    elemI.innerHTML = textI[counterI];
    counterI++;
    if (counterI >= textI.length) {
        counterI = 0;
        elemI.style.color = "#ff2828";
    } else {
        elemI.style.color = "#fff";
    }
}

const logo = () => {
    changeA();
    changeI();
}

logo();