function change_money() {
    let amount =parseInt(document.getElementById("idAmount").value);
    let fromCurrency = document.getElementById("idFromCurrency").value;
    let _exchangeRate;
    if (fromCurrency == "VND")
            _exchangeRate=23000;
        else _exchangeRate = 1000;
    let result = amount/_exchangeRate;
    document.getElementById('idResult').innerHTML="Result: "+result;
}