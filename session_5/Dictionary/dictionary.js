let eng = ['hello', 'bye', 'teacher', 'student', 'practice'];
let viet = ['xin chao', 'bye', 'giao vien', 'hoc sinh', 'thuc hanh']
//console.log(document.getElementById('input').value);
let input = document.getElementById('input').value;
console.log(input);
function translation() {
    for (let i = 0; i < viet.length; i++) {
        if (input == viet[i]) {
            document.getElementById("output").innerHTML = eng[i];
            break;
        } else if (input == eng[i]) {
            document.getElementById('output').innerHTML = viet[i];
            break;
        } else document.getElementById('output').innerHTML = 'Khong co ket qua';
    }
}

