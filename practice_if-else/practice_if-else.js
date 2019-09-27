function sosanh() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let isDivision = num1 % num2 == 0;
    if (isDivision) {
        alert(num1 + " division by " + num2);
    } else {
        alert(num1 + " not division by " + num2);
    }
}

function age() {
    let _age = document.getElementById('ipAge').value;
    let isPass = _age > 15;
    if (isPass) {
        alert('You Pass');
    } else {
        alert('You too young')
    }
}

function checkNumber() {
    let num = document.getElementById("ipNum").value;
    let isPositiveInt = num > 0;
    if (isPositiveInt) {
        alert(num + ' is positive interger')
    } else {
        alert(num + ' is negative interger')
    }
}

function findMax() {
    let num1 = document.getElementById("ipNum1").value;
    let num2 = document.getElementById("ipNum2").value;
    let num3 = document.getElementById("ipNum3").value;
    let max = num1;
    if (max < num2) {
        max = num2;
        if (max < num3) {
            max = num3;
        }
    } else {
        if (max < num3) {
            max = num3;
        }
    }
    alert(" Max=:" + max);
}

function classify() {
    let score1 = parseInt(document.getElementById('ipScore1').value);
    let score2 = parseInt(document.getElementById('ipScore2').value);
    let score3 = parseInt(document.getElementById('ipScore3').value);
    let average = (score1 + score2 + score3) / 3;
    if (average > 9) {
        alert('You are excellent')
    } else if (average > 8) {
        alert('You are great')
    } else if (average > 6) {
        alert('You are good')
    } else {
        alert('You terribale')
    }
}

function percentage() {
    let sale = parseInt(document.getElementById('ipSale').value);
    let earning = 0;
    if (sale > 100) {
        earning = sale * 0.1;
    } else if (sale > 80) {
        earning = sale * 0.08;
    } else if (sale > 50) {
        earning = sale * 0.05;
    } else {
        earning = sale * 0;
    }
    alert('Your earning: ' + earning);
}

function money() {
    let amount = parseInt(document.getElementById('ipAmount').value);
    let _money = 0;
    if (amount < 50) {
        _money = amount * 1500;
    } else if (amount < 100) {
        _money = 50 * 1500 + (amount - 50) * 1800;
    } else if (amount < 300) {
        _money = 50 * 1500 + 50 * 1800 + (amount - 100) * 2500;
    } else {
        _money = 50 * 1500 + 50 * 1800 + 200 * 2500 + (amount - 300) * 3500;
    }
    alert(_money + "VND");
}