const input = document.getElementById("texto");
const textoFrase = document.getElementById("frase");
const textoVogal = document.getElementById("vogais_quantidade");
const vogais = [
    "a", "á", "à", "ã", "â",
    "e", "é", "è", "ê",
    "i", "í", "ì", "î",
    "o", "ó", "ò", "õ", "ô",
    "u", "ú", "ù", "û",
];

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