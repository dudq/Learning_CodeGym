function println(str) {
    document.write(str + '<br>');
}

//Bai 1
/*
function sqrt(num) {
    return num*num;
}
let num = sqrt(3);
println(num);
*/

//Bai 2
/*
function perimeterCircle(radius) {
    return 2*radius*Math.PI;
}
function areaCircle(radius) {
    return Math.PI*radius*radius;
}
let periameter = perimeterCircle(3);
println(periameter);
let area = areaCircle(3);
println(area);
*/

//Bai 3
/*
function factorial(num) {
    let result = 1;
    for (let i=1;i<=num;i++){
        result = result*i;
    }
    return result;
}
let factorialNum = factorial(5);
println(factorialNum);
*/

//Bai 4
/*
function checkNumber(character) {
    for (let i=0; i <character.length;i++){
        if (!parseInt(character[i])){
            return false
        }
    }
    return  true;
}
let str = prompt('Nhap so thoi');
for (let i=0;i<str.length;i++){
    if (!checkNumber(str[i])){
        println('Sai roi');
        break;
    }
    println('dung roi');
}*/

//Bai 5
/*function min(num1, num2, num3) {
    let min = num1;
    if (min > num2) {
        min = num2;
    }
    if (min > num3) {
        min = num3;
    }
    return min;
}
let a = min(3,2,5);
println(a);*/

//Bai 6
/*function checkInt(num) {
    if (num >= 0) {
        return true;
    }
    return false;
}

let a = checkInt(-2);
println(a);*/
//Bai 7
/*
function swap(a, b) {
    let temp = a.value;
    a.value = b.value;
    b.value = temp;
}
let a = {value : 4};
let b = {value: 6};
swap(a, b);
println(a.value);
println(b.value);
*/

//Bai 8
/*
function rever(array) {
    let arrayRe = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayRe.push(array[i]);
    }
    return arrayRe;
}

let arr = [3, 2, 1];
println(rever(arr).join(' '));*/
//Bai 9
function find(arr,num) {
    count = 0;
    for (let i= 0; i<arr.length;i++){
        if (num == arr[i]){
            count++;
        }
    }
    if (count){
        return count;
    } else return -1;
}
let arr = [1,4,6,8,1];
let num =3;
let exit = find(arr,num);
println( exit);