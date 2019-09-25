// Bai 1 Khai bao va su dung bien
/*
let  i = 10;
let  f = 20.5;
let b = true;
let s = 'Ha Noi';
document.write('i = :'+i);
document.write("<br/>");
document.write('f = :'+f);
document.write("<br/>");
document.write('b = :'+b);
document.write("<br/>");
document.write('s = :'+s);
document.write("<br/>");
*/

// Bai 2
/*
let width = 20;
let height = 10;
let area = width * height;
document.write("area=: " + area);
*/

//Bai 3: Thuc hanh su dung toan tu
/*let inputWidth;
let inputHeight;
inputWidth = prompt("Enter the Width");
inputHeight = prompt("Enter the Height");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.write("The area is: " + area);
*/
// Bai 4 [Bai tap] Bien, kieu du lieu va toan tu
//Nhap diem vat ly, hoa hoc, sinh hoc. Tinh diem trung binh, tong
/*
let inputPhycis = prompt(" Enter the Phycis score: ");
let inputChemistry = prompt("Enter the Chemistry score: ");
let inputBiology = prompt("Enter the Biology score: ");
let scorePhycis = parseInt(inputPhycis);
let scoreChemistry = parseInt(inputChemistry);
let scoreBiology = parseInt(inputBiology);
let sum = scorePhycis + scoreChemistry + scoreBiology;
document.write(" Sum: "+ sum + "<br/>");
let average = sum/3;
document.write("Average: " + average);
*/

//Chuyen tu do C sang do F
/*
let inputTemperatureC = prompt("Enter the Temperature (C): ");
let temperatureC = parseInt(inputTemperatureC);
let temperatureF = (temperatureC*9)/5+32;
document.write(" The temperature F is: "+ temperatureF);
*/
//Tinh dien tich va chu vi hinh tron
let inputRadius = prompt("Enter the radius:");
let radius = parseInt(inputRadius);
const Pi = 3.14;
let perimeter = 2*radius*Pi;
let area = Pi*radius^2;
document.write(" Perimeter is: "+ perimeter + "<br/>");
document.write(" Area is: " + area);