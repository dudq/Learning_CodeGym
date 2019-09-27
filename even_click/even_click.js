let imgObj = null;

function init() {
    imgObj = document.getElementById("ball");
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.height = '100px';
    imgObj.style.width = '100px';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';

}

