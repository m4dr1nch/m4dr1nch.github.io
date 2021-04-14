var textA = ["A", "4"];
var counterA = 0;
var elemA = document.getElementById("navRotateA");
var instA = setInterval(changeA, 2500);
var textI = ["I", "1"];
var counterI = 0;
var elemI = document.getElementById("navRotateI");
var instI = setInterval(changeI, 2500);

function changeA() {
    elemA.innerHTML = textA[counterA];
    counterA++;
    if (counterA >= textA.length) {
        counterA = 0;
    }
}

function changeI() {
    elemI.innerHTML = textI[counterI];
    counterI++;
    if (counterI >= textI.length) {
        counterI = 0;
    }
}

const logo = () => {
    changeA();
    changeI();
}

logo();