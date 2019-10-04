let sout = "<table border=' 0 ' width='50' cellspacing='2' onclick='change()'  id='table'>";
for (let i = 0; i < 3; i++) {
    sout += '<tr>';
    for (let j = 0; j < 3; j++) {
        sout +='<td> <input type="button"  value="" onclick="change(this)"></td>';
    }
}
sout += '</table>';
document.write(sout);
function change(value) {
    a = value;
    alert(a);
}

