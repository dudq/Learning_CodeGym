//Bai 1
/*
function alertMessage() {
    alert('Xin Chao');
}*/
//Bai 2
/*
let b =2;
function changeNumber(a) {
    return a+1;
}
document.write(changeNumber(b));*/
//Bai 3
/*
let input1 =parseInt(prompt("enter first number"));
let input2 =parseInt(prompt("enter second number"));
function checkNum(num1,num2) {
    if (num1<=num2) return num1+num2;
    else {
        num1 = parseInt(prompt("enter first number again"));
        num2 = parseInt(prompt("enter second number again"));
         return  checkNum(num1,num2);
    }
}
document.write(input1+ ' '+ input2+'<br>');
document.write(checkNum(input1,input2));*/
//Bai 4
/*
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}
result = 0;
alert(result);
result = addNumbers();
alert(result);*/
//Bai 5
let stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let nameStar = ['Ursa', 'Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
let star = prompt("enter star");

function find(str) {
    for (let i = 0; i < stars.length; i++) {
        if (str === stars[i]) {
            return nameStar[i];
        } else if (i == stars.length - 1) {
            str = prompt("Not found. Enter star again!");
            return find(str);
        }
    }
}
document.write(find(star));