var aff: HTMLInputElement = <HTMLInputElement>document.getElementById("aff");

function touche(str:string): void {
    aff.textContent = aff.textContent + str;
}