function check(value) {
    let good = document.getElementById('idGood');
    let cheap = document.getElementById('idCheap');
    let fast = document.getElementById('idFast');
    /*if (good.checked == true && cheap.checked == true) {
        fast.checked = false;
    } else if (cheap.checked == true && fast.checked == true) {
        good.checked = false;
    } else if (fast.checked == true && good.checked == true) {
        cheap.checked = false;
    }*/
    switch (value) {
        case 'good' :
            if (cheap.checked === true && good.checked === true) {
                fast.checked = false;
            }
            break;
        case 'cheap' :
            if (fast.checked === true && cheap.checked === true) {
                good.checked = false;
            }
            break;
        case 'fast':
            if (good.checked === true && fast.checked === true) {
                cheap.checked = false;
            }
            break;
    }
}