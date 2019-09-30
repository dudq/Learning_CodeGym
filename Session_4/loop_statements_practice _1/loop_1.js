//Bai 1
/*for (let i=1;i<=100;i++){
    document.write( i+'<br>');
    if( i==99){
        alert("hoan thanh");
        break;
    }
}*/
//Bai 2
/*let temp = prompt('nhap nhiet do:');
for (;temp < 20 || temp >100;){
    if (temp<20){
        alert( 'Qua lanh, tang nhiet do');
    } else  {
        alert('Qua nong, giam nhiet do');
    }
    temp = prompt('Nhap lai nhiet do');
}*/
//Bai 3
/*let dayfibo= " 0 1";
let count=0;
for (let i= 0, j=1;count <=18; count++ ){
    let fibo = i + j;
    dayfibo = dayfibo + " " + fibo;
    i=j;
    j=fibo;
}
document.write(dayfibo);*/
//bai 4
/*let i = 0;
let j = 1;
let fibo2 =0;
for (;;){
    fibo2 = i+j;
    i=j;
    j=fibo2;
    if (fibo2 % 5 == 0){
        break;
    } else if (fibo2 > 60000) break;
}
document.write(fibo2);*/
//bai 5
/*let i = 0;
let j = 1;
let fibo3 =0;
let sum = i+j;
let count = 0;
for (; count <= 18; count++) {
    fibo3 = i + j;
    i = j;
    j = fibo3;
    sum += fibo3;
}
document.write(sum);*/
//bai 6
/*
let count = 1;
let sum =0;
for (let i=7;count <= 30;i+=7){
    count +=1;
    sum += i;
}
document.write(sum);*/
//bai 7
for (let i = 1; i <= 100; i++) {
    let isDivisionBy3 = i % 3 == 0;
    let isDivisionBy5 = i % 5 == 0;
    if (isDivisionBy3 && isDivisionBy5) {
        document.write('FizzBuzz <br>');
    } else if (isDivisionBy3) {
        document.write('Fizz <br>' );
    } else if (isDivisionBy5) {
        document.write('Buzz <br>');
    } else {
        document.write(i +' ');
    }
}
