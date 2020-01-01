var aff: HTMLInputElement = <HTMLInputElement>document.getElementById("aff");

function touche(str:string): void {
    let val = aff.textContent;
    if (val == "") {
        if (str == "*" || str == "/" || str == "+" || str == ")") {
            aff.textContent = "";
        } else {
            aff.textContent = str;
        }
    } else if (val == "ERROR" || val == "NaN") {
        if (str == "*" || str == "/" || str == "+" || str == ")") {
            aff.textContent = "";
        } else {
            aff.textContent = str;
        }
    } else if (val.substr(-1) == "*" || val.substr(-1) == "/" || val.substr(-1) == "+" || val.substr(-1) == "-" || val.substr(-1) == "(") {
        if (str == "*" || str == "/" || str == "+" || str == "-" || str == ")") {
            aff.textContent = "ERROR";
        } else {
            aff.textContent = val + str;
        }
    } else if (val.substr(-1) == "." && str == ".") {
        aff.textContent = "ERROR";
    } else if (str == "(") {
        aff.textContent = val + "*(";
    } else {
        aff.textContent = val + str;
    }
}

function sup(): void {
    aff.textContent = "";
}

function del(): void {
    if (aff.textContent == "ERROR" || aff.textContent == "NaN") {
        aff.textContent = "";
    } else if (aff.textContent != "") {
        aff.textContent = aff.textContent.substr(0, aff.textContent.length - 1);
    }
}

function calculer(): void {
    function cal(aux: string, str: string): string {
        if (aux == "ERROR" || aux == "NaN") {
            return "ERROR";
        } else if (str == "") {
            return aux;
        } else {
            let car = str.substr(0,1);
            if (car == "(") {
                let i = 0;
                let cpt = 1;
                while (i < str.length && cpt > 0) {
                    i++;
                    if (str.substr(i,1) == '(') {
                        cpt++;
                    } else if (str.substr(i,1) == ')') {
                        cpt--;
                    }
                } if (cpt == 0) {
                    return cal(cal("", str.substr(1, i-1)), str.substr(i+1));
                } else {
                    alert("Mauvais parenthésage !!!");
                    return "ERROR";
                }
            } else if (car == ")") {
                alert("Mauvais parenthésage !!!");
                return "ERROR";
            } else if (car == "*" ) {
                let aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                } else {
                    return String(Number(aux) * Number(aux1));
                }
            } else if (car == "/" ) {
                let aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                } else if (aux1 == "0") {
                    alert("Division par 0 !!!");
                    return "ERROR";
                } else {
                    return String(Number(aux) / Number(aux1));
                }
            } else if (car == "+" ) {
                let aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                } else {
                    return String(Number(aux) + Number(aux1));
                }
            } else if (car == "-" ) {
                let aux1 = cal("", str.substr(1, str.length - 1));
                if (aux1 == "") {
                    return "ERROR";
                } else if (aux == "") {
                    return String(- Number(aux1));
                } else {
                    return String(Number(aux) - Number(aux1));
                }
            } else {
                return cal(aux + car, str.substr(1, str.length - 1));
            }
        }
    }
    aff.textContent = cal("", aff.textContent);
}