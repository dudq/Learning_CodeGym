let account = prompt(" Enter account:");
if (account === "Admin") {
    let password = prompt("Enter Password:");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === '') {
        alert("Canceled");
    } else alert("Wrong Password");
} else if (account === '') {
    alert("Canceled");
} else alert("I don't know you");