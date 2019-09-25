function get_num1() {
    let _num = parseInt(document.getElementById("idNum1").value);
    return _num;
}
function get_num2() {
    let _num = parseInt(document.getElementById("idNum2").value);
    return _num;
}
// phan mo rong
function  caculator(e) {
    let id = e.id;
    let n1 = get_num1();
    let n2 = get_num2();
    let result = document.getElementById("idResult");
    switch (id) {
        case 'idAddition':
            result.innerHTML = n1 + n2;
            break;
        case 'idSubtraction':
            result.innerHTML = n1 - n2;
            break;
        case 'idMutiplication':
            result.innerHTML = n1 * n2;
            break;
        case 'idDivision':
            result.innerHTML = n1 / n2;
            break;
    }
}
//4 ham cho 4 button
function addition() {
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 + _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}
function subtraction() {
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 - _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}
function mutiplication() {
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 * _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}
function divition() {
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 / _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}