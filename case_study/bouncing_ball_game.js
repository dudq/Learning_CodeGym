let canvas =  document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let ballX = 50;
let ballY = 50;
let ballSpeedX =10;
let ballSpeedY = 4.5;
let barPlayer1X =0;
let barPlayer1Y =100;
let barPlayer2Y =100;
let BARPLAYER1_HEIGHT = 100;
let BARPLAYER2_HEIGHT = 100;
window.onload = function () {
    let framePsrSecond = 30;
    setInterval(function () {
        moveBall();
        drawEverything();
    },1000/framePsrSecond);

};
window.addEventListener('keydown',function (evt) {
    switch (evt.keyCode) {
        case 38:
            barPlayer1Y -= 20;
            break;
        case 40:
            barPlayer1Y+=20
            break;
    }
});
function ballReset() {
    ballSpeedX = - ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;

}
function computerMovement() {
    let barPlayer2YCenter= barPlayer2Y +(BARPLAYER2_HEIGHT/2)
    if (barPlayer2YCenter<ballY -15){
        barPlayer2Y +=6;
    } else if (barPlayer2YCenter >ballY +15)
        barPlayer2Y -=6;
}
function moveBall() {
    computerMovement();
    ballX = ballX +ballSpeedX;
    ballY = ballY +ballSpeedY;
    if (ballX<0){
        if (ballY>barPlayer1Y && ballY<(barPlayer1Y + BARPLAYER1_HEIGHT)) {
            ballSpeedX = - ballSpeedX;
        } else {
            ballReset();
        }
    }
    if (ballX> canvas.width){
        if (ballY>barPlayer2Y && ballY<(barPlayer2Y + BARPLAYER1_HEIGHT)) {
        ballSpeedX = - ballSpeedX;
    } else {
        ballReset();
    }
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
    drawRect(barPlayer1X,barPlayer1Y,10,BARPLAYER1_HEIGHT,'white');
    drawRect(canvas.width - 10,barPlayer2Y,10, BARPLAYER2_HEIGHT,'white');
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