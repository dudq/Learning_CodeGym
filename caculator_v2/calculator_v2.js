let display = document.getElementById('idDisplay');
let isFinish = false;
let isOperator = false;

function addOperator(value) {
    if (isOperator) {
        display.innerHTML += value;
        isFinish = false;
        isOperator = false;
    } else {
        let lastCharacter  = display.innerHTML.charAt(display.innerHTML.length -1);
        display.innerHTML = display.innerHTML.replace(lastCharacter,value);
        isOperator = false;
        isFinish = false;
    }
}

function addNumber(value) {
    if (isFinish) {
        display.innerHTML = '';
        display.innerHTML += value;
        isFinish = false;
        isOperator = false;
    } else {
        display.innerHTML += value;
        isOperator = true;
    }
}

function calculator() {
    result = eval(display.innerHTML);
    display.innerHTML = result;
    isFinish = true;
}

function clean() {
    display.innerHTML = '';
}
document.getElementById('1').addEventListener('click', function () {
    addNumber('1');
});
document.getElementById('2').addEventListener('click', function () {
    addNumber('2');
});
document.getElementById('3').addEventListener('click', function () {
    addNumber('3');
});
document.getElementById('4').addEventListener('click', function () {
    addNumber('4');
});
document.getElementById('5').addEventListener('click', function () {
    addNumber('5');
});
document.getElementById('6').addEventListener('click', function () {
    addNumber('6');
});
document.getElementById('7').addEventListener('click', function () {
    addNumber('7');
});
document.getElementById('8').addEventListener('click', function () {
    addNumber('8');
});
document.getElementById('9').addEventListener('click', function () {
    addNumber('9');
});
document.getElementById('0').addEventListener('click', function () {
    addNumber('0');
});
document.getElementById('addition').addEventListener('click', function () {
    addOperator('+');
});
document.getElementById('subtraction').addEventListener('click', function () {
    addOperator('-');
});
document.getElementById('multiplication').addEventListener('click', function () {
    addOperator('*');
});
document.getElementById('division').addEventListener('click', function () {
    addOperator('/');
});
document.getElementById('c').addEventListener('click', function () {
    clean()
});
