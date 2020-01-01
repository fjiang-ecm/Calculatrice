"use strict";
var aff = document.getElementById("aff");
function touche(str) {
    aff.textContent = aff.textContent + str;
}
function sup() {
    aff.textContent = "";
}
function del() {
    if (aff.textContent !== "") {
        aff.textContent = aff.textContent.substr(0, aff.textContent.length - 1);
    }
}
