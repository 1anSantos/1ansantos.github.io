const input = document.querySelector("#texto");
const btn = document.querySelector("#btn-contar");
const txtFrase = document.querySelector("#frase");
const txtVogaisQnt = document.querySelector("#qnt-vogais");

btn.addEventListener("click", mostrarInfo);
input.addEventListener("keyup", (keyPressed) => {
    if (keyPressed.key !== "Enter") return;
    mostrarInfo();
});

const vogais = ["a", "e", "i", "o", "u"];

function mostrarInfo () {
    const texto = input.value;
    const qntVogais = contarVogais(texto);
    txtFrase.innerText = texto;
    txtVogaisQnt.innerText = qntVogais;
}

function contarVogais(texto) {
    const noSpecialCaracter = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const vogaisNoTexto = noSpecialCaracter.split("").filter((letra) => vogais.includes(letra));
    return vogaisNoTexto.length;
}