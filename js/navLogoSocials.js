var textO = ["O", "0"];
var counterO = 0;
var elemO = document.getElementById("navRotateO");
var instO = setInterval(changeO, 2500);
var textA = ["A", "4"];
var counterA = 0;
var elemA = document.getElementById("navRotateA");
var instA = setInterval(changeA, 2500);

function changeO() {
    elemO.innerHTML = textO[counterO];
    counterO++;
    if (counterO >= textO.length) {
        counterO = 0;
    }
}

function changeA() {
    elemA.innerHTML = textA[counterA];
    counterA++;
    if (counterA >= textA.length) {
        counterA = 0;
    }
}

const logo = () => {
    changeA();
    changeO();
}

logo();