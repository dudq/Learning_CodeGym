//Bai 1
/*
let dayfibo= " 0 1";
let count=0;
for (let i= 0, j=1;count <=18; count++ ){
    let fibo = i + j;
    dayfibo = dayfibo + " " + fibo;
    i=j;
    j=fibo;
}
document.write(dayfibo);*/
//Bai 2
/*
let num = prompt('Nhap so nguyen duong');
let total = 1;
for (let i=1; i<=num;i++){
    total = total *i;
}
document.write(total);*/
// Bai 3
for ( let i=1; i<6;i++){
    for (let j =1; j<6;j++){
        if (i>=j){
            document.write('*');
        }
    }
    document.write('<br>');
}
for ( let i=1; i<6;i++){
    for (let j =1; j<6;j++){
        if (i<=j){
            document.write('*');
        }
    }
    document.write('<br>');
}
sout1 = '<table border="0" width="50" cellpadding="0" cellspacing="0">'
for ( let i=1; i<6;i++){
    sout1 = sout1 +'<tr>';
    for (let j =1; j<6;j++){
        if (i<=j){
            sout1 = sout1 +'<td>*</td>';
        } else {
            sout1 = sout1 + '<td> </td>'
        }
    }
}
sout1 = sout1 +'</table>'
document.write(sout1);
sout2 = '<table border="0" width="50" cellpadding="0" cellspacing="0">'
for ( let i=1; i<6;i++){
    sout2 = sout2 +'<tr>';
    for (let j =1; j<6;j++){
        if (i>=j){
            sout2 = sout2 +'<td>*</td>'
        } else {
            sout2 =sout2 + '<td> </td>'
        }
    }
}
sout2 = sout2 +'</table>';
document.write(sout2);
//Bai 4
/*
let sout = '<table border="0" width="50" cellspacing="0" cellpadding="0">';
for (let i =1;i<8;i++){
    sout = sout + '<tr>';
    if (i==1 || i==7){
        for (let j= 1; j<22;j++){
            sout = sout +'<td>*</td>'
        }
    } else {
        for (let j = 1; j < 22; j++) {
            if (j == 1 || j == 21) {
                sout = sout + '<td>*</td>';
            } else sout = sout +'<td> </td>';
        }
    }
}
sout = sout + '</table>';
document.write(sout);*/
//Bai 5
/*
let tienVay = parseInt(prompt('Nhap so tien vay'));
let thoigianVay = parseInt(prompt('nhap so thang vay'));
let laisuat = parseInt(prompt('Lai suat ngan hang (%):'));
for ( let i=1; i<=thoigianVay; i++){
    tienVay = tienVay * (1 + laisuat/100);
}
alert('So tien phai tra: ' +  tienVay);*/
//Bai 6
/*
sout6 ='<table border="0" width="50" cellpadding="0" cellspacing="0">';
for (let i =1; i<5;i++){
    sout6 = sout6 + '<tr>';
    for (let j=1;j<6;j++){
        if (j<=3){
            if (i ==1 && j ==2){
                sout6 = sout6 +'<td>*</td>';
            } else if (i==2 && (j == 1 || j ==3)){
                sout6 = sout6 +'<td>*</td>';
            } else  if (i== 3 && j==2){
                sout6 = sout6 +'<td>*</td>';
            } else if (i==4 && j == 3){
                sout6 = sout6 +'<td>*</td>';
            } else {
                sout6 = sout6 + '<td> </td>';
            }
        }
        else {
            if (i ==1 && j ==4){
                sout6 = sout6 +'<td>*</td>';
            } else if (i==2 && j == 5){
                sout6 = sout6 +'<td>*</td>';
            } else  if (i== 3 && j==4){
                sout6 = sout6 +'<td>*</td>';
            } else  {
                sout6 = sout6 + '<td> </td>';
            }
        }
    }
}
sout6 = sout6 + '</table>';
document.write(sout6);*/
