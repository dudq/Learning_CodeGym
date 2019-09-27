let element = document.getElementById("nobita");

function upArrowPressed() {
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed() {
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}

function leftArrowPressed() {
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}