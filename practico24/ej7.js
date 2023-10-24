function encontrarMayor() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    } else {
        if (num1 === num2 && num2 === num3) {
            document.getElementById("resultado").innerHTML = "Los tres números son iguales: " + num1;
        } else if (num1 === num2 && num2 !== num3) {
            document.getElementById("resultado").innerHTML = "El primer y segundo número son iguales: " + num1;
        } else if (num2 === num3 && num1 !== num2) {
            document.getElementById("resultado").innerHTML = "El segundo y tercer número son iguales: " + num2;
        } else if (num1 === num3 && num2 !== num1) {
            document.getElementById("resultado").innerHTML = "El primer y tercer número son iguales: " + num1;
        } else {
            var mayor = Math.max(num1, num2, num3);
            document.getElementById("resultado").innerHTML = "El mayor de los tres números es: " + mayor;
        }
    }
}
