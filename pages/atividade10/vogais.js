const input = document.getElementById("texto");
const textoFrase = document.getElementById("frase");
const textoVogal = document.getElementById("vogais_quantidade");
const vogais = ["a", "e", "i", "o", "u"];

function contarVogais() {
    const texto = input.value;
    const textoVogais = texto.split("").filter(separarVogais);
    // o split transforma a string em um array para poder usar o filter
    // split não altera o elemento original

    textoFrase.innerHTML = "Frase: " + texto;
    textoVogal.innerHTML = "Quantidade de vogais: " + textoVogais.length;
}

function separarVogais(elemento) {
    return vogais.includes(elemento);
}