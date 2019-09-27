function yes() {
    document.getElementById('yes')
    alert('Yes.You are right');
}

function no() {
    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;
    let no = document.getElementById('no');
    no.style.left = left + 'px';
    no.style.top = top + 'px';
}