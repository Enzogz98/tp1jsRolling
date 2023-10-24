function comprobarDivisibilidad() {
    var num = parseInt(document.getElementById("numero").value);

    if (isNaN(num)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
    } else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        document.getElementById("resultado").innerHTML = num + " es divisible por al menos uno de los números 2, 3, 5 o 7.";
    } else {
        document.getElementById("resultado").innerHTML = num + " no es divisible por ninguno de los números 2, 3, 5 o 7.";
    }
}