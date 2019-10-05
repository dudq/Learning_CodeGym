function drawnBroad() {
    sout = "<h3> Tic Tac Toe</h3>\n <table border=' 0 ' width='50' cellspacing='2'  id='table'>";
    for (let i = 0; i < 3; i++) {
        sout += '<tr>';
        for (let j = 0; j < 3; j++) {
            sout += '<td> <input type="button" id ="' + i + '' + j + '"  value="." onclick="change(this)"></td>';
        }
    }
    sout += '</table>';
    document.getElementById('broad').innerHTML = sout;
}

let firstPlayer = true;
let count = 0;

function checkFull() {
    count++;
    if (count == 9) {
        count = 0;
        return true;
    } else return false;
}

function change(button) {
    if (button.value == '.') {
        if (firstPlayer) {
            button.value = 'x';
            firstPlayer = false;
            if (checkWinner(button)) {
                alert(button.value + ' winner');
                drawnBroad();
            }
            if (checkFull()) {
                alert('Drawn')
                let again = confirm('Do you want to play again?');
                if (again) {
                    drawnBroad();
                }
            }
        } else {
            button.value = 'o';
            firstPlayer = true;
            if (checkWinner(button)) {
                alert(button.value + ' winner');
                drawnBroad();
            }
            if (checkFull()) {
                alert('Drawn')
                let again = confirm('Do you want to play again?');
                if (again) {
                    drawnBroad();
                }
            }

        }
    } else alert('nhap o khac');
}

function checkWinner(button) {
    let id = document.getElementById(button.id).id;
    let arr = [['00', '01', '02'],
        ['10', '11', '12'],
        ['20', '21', '22'],
        ['00', '10', '20'],
        ['01', '11', '21'],
        ['02', '12', '22'],
        ['00', '11', '22'],
        ['20', '11', '02']
    ];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (id === arr[i][j]) {
                let button1 = document.getElementById(arr[i][0]).value;
                let button2 = document.getElementById(arr[i][1]).value;
                let button3 = document.getElementById(arr[i][2]).value;
                if (button1 == button2 && button1 == button3) {
                    return true;
                }
            }
        }
    }
    return false;
}

drawnBroad();

