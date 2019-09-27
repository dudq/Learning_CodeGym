function bmi() {
    let height = parseFloat(document.getElementById("idHeight").value);
    let weight = parseFloat(document.getElementById("idWeight").value);
    let bmi = weight / (height * height);
    let status = document.getElementById("idBMI");
    if (bmi < 18.5) {
        status.innerHTML = "Your BMI: " + bmi + " Underweight";
    } else if (bmi < 25) {
        status.innerHTML = "Your BMI: " + bmi + " Normal";
    } else if (bmi < 30) {
        status.innerHTML = "Your BMI: " + bmi + " Overweight";
    } else {
        status.innerHTML = "Your BMI: " + bmi + " Obese";
    }
}