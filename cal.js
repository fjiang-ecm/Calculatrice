"use strict";
var aff = document.getElementById("aff");
function touche(str) {
    var val = aff.textContent;
    if (val == "") {
        if (str == "*" || str == "/" || str == "+") {
        }
        else {
            aff.textContent = str;
        }
    }
    else if (val == "ERROR" || val == "NaN") {
        if (str == "*" || str == "/" || str == "+") {
            aff.textContent = "";
        }
        else {
            aff.textContent = str;
        }
    }
    else if (val.substr(-1) == "*" || val.substr(-1) == "/" || val.substr(-1) == "+" || val.substr(-1) == "-") {
        if (str == "*" || str == "/" || str == "+" || str == "-") {
            aff.textContent = "ERROR";
        }
        else {
            aff.textContent = val + str;
        }
    }
    else if (val.substr(-1) == "." && str == ".") {
        aff.textContent = "ERROR";
    }
    else {
        aff.textContent = val + str;
    }
}
function sup() {
    aff.textContent = "";
}
function del() {
    if (aff.textContent == "ERROR" || aff.textContent == "NaN") {
        aff.textContent = "";
    }
    else if (aff.textContent != "") {
        aff.textContent = aff.textContent.substr(0, aff.textContent.length - 1);
    }
}
function calculer() {
    function cal(aux, str) {
        if (aux == "ERROR" || aux == "NaN") {
            return "ERROR";
        }
        else if (str == "") {
            return aux;
        }
        else {
            var car = str.substr(0, 1);
            if (car == "*") {
                var aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                }
                else {
                    return String(Number(aux) * Number(aux1));
                }
            }
            else if (car == "/") {
                var aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                }
                else if (aux1 == "0") {
                    alert("Division par 0 !!!");
                    return "ERROR";
                }
                else {
                    return String(Number(aux) / Number(aux1));
                }
            }
            else if (car == "+") {
                var aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                }
                else {
                    return String(Number(aux) + Number(aux1));
                }
            }
            else if (car == "-") {
                var aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                }
                else if (aux == "") {
                    return String(-Number(aux1));
                }
                else {
                    return String(Number(aux) - Number(aux1));
                }
            }
            else {
                return cal(aux + car, str.substr(1, str.length - 1));
            }
        }
    }
    aff.textContent = cal("", aff.textContent);
}
