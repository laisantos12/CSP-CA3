chkpwd = function (validate) {
    var str = document.getElementById().value;
    if (str.length < 8) {
        document.getElementById("demo").innerHTML = "Password must be 8 char!";
        document.getElementById("demo").style.color = "Red";
        return ("Too Short!");
    } else if (str.search(/[0-9]/) == -1) {
        document.getElementById("demo").innerHTML = "At least 1 numeric value must be entered!";
        document.getElementById("demo").style.color = "Red";
        return ("No number");

    } else if (str.search(/[a-z]/) == -1) {
        document.getElementById("demo").innerHTML = "At least 1 small letter must be entered!";
        document.getElementById("demo").style.color = "Red";
        return ("No letter");
    } else if (str.search(/[A-Z]/) == -1) {
        document.getElementById("demo").innerHTML = "At least 1 uppercase letter must be entered!";
        document.getElementById("demo").style.color = "Red";
        return ("No Uppercase letter");
    } else if (str.search(/[!\@\#\$\^\&\.\,\;\(\)\+\:\_]/) == -1) {
        document.getElementById("demo").innerHTML = "At least 1 special character must be entered!";
        document.getElementById("demo").style.color = "Red";
        return ("No special character");

    }
    document.getElementById("demo").innerHTML = "Successful!";
    document.getElementById("demo").style.color = "Green";
    return ("ok");
}
