function comprobarDivisibilidad() {
    var num = parseInt(document.getElementById("numero").value);

    if (isNaN(num)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
    } else if (num % 2 === 0) {
        document.getElementById("resultado").innerHTML = num + " es divisible por 2.";
    } else {
        document.getElementById("resultado").innerHTML = num + " no es divisible por 2.";
    }
}