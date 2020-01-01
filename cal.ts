var aff: HTMLInputElement = <HTMLInputElement>document.getElementById("aff");

function touche(str:string): void {
    aff.textContent = aff.textContent + str;
}

function sup(): void {
    aff.textContent = "";
}

function del(): void {
    if (aff.textContent !== "") {
        aff.textContent = aff.textContent.substr(0, aff.textContent.length - 1);
    }
}