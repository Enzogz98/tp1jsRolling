function comprobarDivisibilidad() {
    var num = parseInt(document.getElementById("numero").value);

    if (isNaN(num)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    var divisores = [];

    if (num % 2 === 0) {
        divisores.push(2);
    }
    if (num % 3 === 0) {
        divisores.push(3);
    }
    if (num % 5 === 0) {
        divisores.push(5);
    }
    if (num % 7 === 0) {
        divisores.push(7);
    }

    if (divisores.length > 0) {
        document.getElementById("resultado").innerHTML = num + " es divisible por los siguientes números: " + divisores.join(", ");
    } else {
        document.getElementById("resultado").innerHTML = num + " no es divisible por ninguno de los números 2, 3, 5 o 7.";
    }
}