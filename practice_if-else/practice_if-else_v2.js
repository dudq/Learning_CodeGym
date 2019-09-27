function changeToTemperature() {
    let temperature = parseInt(document.getElementById('ipTemperature').value);
    let temF = temperature * 5 / 9 + 32;
    alert('Temperature F=: ' + temF);
}

function changeToFeet() {
    let meter = parseInt(document.getElementById('ipMeter').value);
    let feet = meter * 3.2808;
    alert('Feet=:' + feet);
}

function areaSquare() {
    let square = parseInt(document.getElementById('ipSquare').value);
    let area = square * square;
    alert('Square=:' + area);
}

function areaRectangle() {
    let height = parseInt(document.getElementById('ipHeight').value);
    let width = parseInt(document.getElementById('ipWidth').value);
    let area = height * width;
    alert('Square Rectangle =:' + area);
}

function areaTriangle() {
    let height = parseInt(document.getElementById('ipHeightTriangle').value);
    let bottom = parseInt(document.getElementById('ipBottomTriangle').value);
    let area = height * bottom / 2;
    alert('Square Rectangle =:' + area);
}

function solution() {
    let a = parseInt(document.getElementById('ipA1').value);
    let b = parseInt(document.getElementById('ipA2').value);
    let result = -b / a;
    alert('Result =:' + result);
}

function result() {
    let a = parseInt(document.getElementById('ipB1').value);
    let b = parseInt(document.getElementById('ipB2').value);
    let c = parseInt(document.getElementById('ipB3').value);
    let delta = b * -4 * a * c;
    let result1 = (-b + Math.sqrt(delta)) / (2 * a);
    let result2 = (-b - Math.sqrt(delta)) / (2 * a);
    if (a != 0) {
        if (a > 0) {
            alert(" 2 Result: " + result1 + ' and ' + result2);
        } else {
            alert('No Result');
        }
    } else {
        let result3 = -c / b;
        alert('Result =:' + result3);
    }
}

function agePerson() {
    let age = document.getElementById('ipAgePerson').value;
    let isInterger = age == parseInt(age);
    if (isInterger && age > 0 && age < 120) {
        alert(" It is a interger number")
    } else {
        alert('Not a interger number');

    }
}

function isTriangle() {
    let a = parseFloat(document.getElementById('ipC1').value);
    let b = parseFloat(document.getElementById('ipC2').value);
    let c = parseFloat(document.getElementById('ipC3').value);
    let isopsitive = a > 0 && b > 0 && c > 0;
    let isTriangle = (a + b) > c && (a + c) > b && (b + c) > a;
    if (isopsitive && isTriangle) {
        alert('It is a Triangle');
    } else {
        alert('It is not a Triangle');
    }
}

function yourTax() {
    let income = parseFloat(document.getElementById('ipIncome').value);
    let tax = 0;
    if (income < 9000) {
        tax = 0;
    } else if (income < 12000) {
        tax = (income - 9000) * 0.05;
    } else if (income < 15000) {
        tax = 3000 * 0.05 + (income - 12000) * 0.08;
    } else if (income < 20000) {
        tax = 3000 * 0.05 + 3000 * 0.08 + (income - 15000) * 0.1;
    } else if (income < 30000) {
        tax = 3000 * 0.05 + 3000 * 0.08 + 5000 * 0.1 + (income - 20000) * 0.15;
    } else {
        tax = 3000 * 0.05 + 3000 * 0.08 + 5000 * 0.1 + 10000 * 0.15 + (income - 30000) * 20;
    }
    alert("Your Tax: " + tax);
}
function haveToPay() {
    let borrowAmount = parseFloat(document.getElementById('ipBorrowAmount').value);
    let borrowTime = parseInt(document.getElementById('ipBorrowTime').value);
    let interest = parseFloat(document.getElementById('ipInterest').value);
    let profit = borrowAmount * Math.pow((1 + interest/100),borrowTime);
    alert(Math.pow(profit));
}