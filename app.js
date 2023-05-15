var screen = document.getElementById("screen").value;

function getNum(num) {
    document.getElementById("screen").value += num;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function getResult() {
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function clearNum() {
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, screen.length - 1);
}

function square() {
    document.getElementById("screen").value = document.getElementById("screen").value * document.getElementById("screen").value;
}
