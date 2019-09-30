let numRandom = 1 + Math.round(Math.random() * 5);

function play() {
    let num = prompt("Nhap so tu 1 - 100");
    for (let count = 0; count < 3; count++) {
        if (num > numRandom) {
            alert(" So qua lon");
            if (count == 2) {
                alert('Ban da het luot choi')
            } else {
                num = prompt(" Nhap lai");
            }
        } else if (num < numRandom) {
            alert(" So qua nho");
            if (count == 2) {
                alert('Ban da het luot choi')
            } else {
                num = prompt(" Nhap lai");
            }
        } else {
            alert('Chuc mung ban da dung');
            break;
        }
    }
}