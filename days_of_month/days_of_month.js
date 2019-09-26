function countDays() {
    let month =parseInt(document.getElementById("idMonth").value);
    let daysOfMonth = document.getElementById("idDaysOfMonth");
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysOfMonth.innerHTML = " Thang " + month + " co 31 ngay ";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysOfMonth.innerHTML = " Thang " + month + " co 30 ngay ";
            break;
        case 2:
            daysOfMonth.innerHTML = " Thang " + month + " co 28 hoac 29 ngay ";
            break;
    }

}