    var disp = document.getElementById('idDisp');
function addString(value) {
    disp.innerHTML += value;
}
function caculator() {
    result = eval(disp.innerHTML);
    disp.innerHTML = result;
    disp.value = '';
}

function clean() {
    disp.innerHTML ='';
}
document.getElementById('1').addEventListener('click', function () {addString('1');});
document.getElementById('2').addEventListener('click', function () {addString('2');});
document.getElementById('3').addEventListener('click', function () {addString('3');});
document.getElementById('4').addEventListener('click', function () {addString('4');});
document.getElementById('5').addEventListener('click', function () {addString('5');});
document.getElementById('6').addEventListener('click', function () {addString('6');});
document.getElementById('7').addEventListener('click', function () {addString('7');});
document.getElementById('8').addEventListener('click', function () {addString('8');});
document.getElementById('9').addEventListener('click', function () {addString('9');});
document.getElementById('0').addEventListener('click', function () {addString('0');});
document.getElementById('addition').addEventListener('click', function () {addString('+');});
document.getElementById('subtraction').addEventListener('click', function () {addString('-');});
document.getElementById('mutiplication').addEventListener('click', function () {addString('*');});
document.getElementById('division').addEventListener('click', function () {addString('/');});
document.getElementById('c').addEventListener('click', function () {clean()});
document.getElementById('=').addEventListener('click', function () {caculator();});
