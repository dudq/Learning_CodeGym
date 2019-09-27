function changeImg(value) {
    src = document.getElementById(value).getAttribute("src");

    if (src == 'images/line' + value + '1.png') {
        src = 'images/line' + value + '2.png';

    } else if (src == 'images/line' + value + '2.png') {
        src = 'images/line' + value + '3.png';

    } else if (src == 'images/line' + value + '3.png') {
        src = 'images/line' + value + '1.png';
    }
    document.getElementById(value).setAttribute("src", src);
    correct();
}

function correct() {
    let srcA = document.getElementById('a').getAttribute("src")
    let srcB = document.getElementById('b').getAttribute("src")
    let srcC = document.getElementById('c').getAttribute("src")
    console.log(srcA.substr(12, 1));
    if (srcA.substr(12, 1) === srcB.substr(12, 1)
        && srcB.substr(12, 1) === srcC.substr(12, 1)) {
        alert("Dung roi");
    }
}

