var textO = ["O", "0"];
var counterO = 0;
var elemO = document.getElementById("navRotateO");
var instO = setInterval(changeO, 2500);
var textE = ["E", "3"];
var counterE = 0;
var elemE = document.getElementById("navRotateE");
var instE = setInterval(changeE, 2500);

function changeO() {
    elemO.innerHTML = textO[counterO];
    counterO++;
    if (counterO >= textO.length) {
        counterO = 0;
    }
}

function changeE() {
    elemE.innerHTML = textE[counterE];
    counterE++;
    if (counterE >= textE.length) {
        counterE = 0;
    }
}

const logo = () => {
    changeE();
    changeO();
}

logo();