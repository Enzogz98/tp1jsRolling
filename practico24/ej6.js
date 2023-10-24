function encontrarMayor() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    } else {
        if (num1 > num2) {
            document.getElementById("resultado").innerHTML = "El número mayor es: " + num1;
        } else if (num2 > num1) {
            document.getElementById("resultado").innerHTML = "El número mayor es: " + num2;
        } else {
            document.getElementById("resultado").innerHTML = "Ambos números son iguales: " + num1;
        }
    }
}