function extraerVocales() {
    var frase = document.getElementById("frase").value;
    var vocales = "";
    
    for (var i = 0; i < frase.length; i++) {
        var letra = frase.charAt(i).toLowerCase();
        if ("aeiou".indexOf(letra) !== -1) {
            if (vocales.indexOf(letra) === -1) {
                vocales += letra + " ";
            }
        }
    }
    
    if (vocales === "") {
        document.getElementById("resultado").innerHTML = "La frase no contiene vocales.";
    } else {
        document.getElementById("resultado").innerHTML = "Las vocales en la frase son: " + vocales;
    }
}