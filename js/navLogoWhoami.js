var textI = ["I", "1"];
var counterI = 0;
var elemI = document.getElementById("navRotateI");
var instI = setInterval(changeI, 2500);
var textO = ["O", "0"];
var counterO = 0;
var elemO = document.getElementById("navRotateO");
var instO = setInterval(changeO, 2500);

function changeI() {
    elemI.innerHTML = textI[counterI];
    counterI++;
    if (counterI >= textI.length) {
        counterI = 0;
    }
}

function changeO() {
    elemO.innerHTML = textO[counterO];
    counterO++;
    if (counterO >= textO.length) {
        counterO = 0;
    }
}

const logo = () => {
    changeI();
    changeO();
}

logo();