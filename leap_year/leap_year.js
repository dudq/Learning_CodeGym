let year = parseInt(prompt("Enter year: "));
isDivisionBy4 = year%4==0;
isDivisionBy100 = year%100==0;
isDivisionBy400 = year%400==0;
    if (isDivisionBy4){
        if(isDivisionBy100){
            if (isDivisionBy400){
                alert(year+" is leap year")
            } else {
                alert(year +" is not a leap year")
            }
        } else {
            alert(year + " is a leap year");
        }
    } else alert(year + " is not a leap year")