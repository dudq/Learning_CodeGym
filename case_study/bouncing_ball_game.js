let canvas =  document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let ballX = 50;
let ballY = 50;
let ballSpeedX =10;
let ballSpeedY = 4.5;
let barPlayer1X =0;
let barPlayer1Y =100;
window.onload = function () {
    let framePsrSecond = 30;
    setInterval(function () {
        moveBall();
        drawEverything();
    },1000/framePsrSecond);

};
function moveBall() {
    ballX = ballX +ballSpeedX;
    ballY = ballY +ballSpeedY;
    if (ballX<0){
        ballSpeedX = -ballSpeedX;
    }
    if (ballX> canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if (ballY<0){
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
    }
}
function drawEverything() {
    drawRect(0,0,canvas.width,canvas.height,'black');
    drawRect(barPlayer1X,barPlayer1Y,10,100,'white');
    drawBall(ballX,ballY,10,'red');
}
function drawBall(centerX,centerY,radius,drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,0,Math.PI*2,true);
    ctx.fill();
}
function drawRect(leftX,topY,width,height,drawColor) {
    ctx.fillStyle =drawColor;
    ctx.fillRect(leftX,topY,width,height);
}