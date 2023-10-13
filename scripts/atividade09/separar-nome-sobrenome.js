// inputs
const nomeCompleto = document.querySelector("#nome-completo");
const sobrenome = document.querySelector("#sobrenome");
const nome = document.querySelector("#nome");

// botoes
const separar = document.querySelector("#separar");
const juntar = document.querySelector("#juntar");

separar.addEventListener("click", () => {
    const txt = nomeCompleto.value.trim().replace(/ +/g, ' ');
    const lista = txt.split(' ');
    nome.value = lista[0];
    sobrenome.value = lista[1] || '';
    nomeCompleto.value = "";
});

juntar.addEventListener("click", () => {
    const lista = [nome.value, sobrenome.value];
    nomeCompleto.value = lista.join(' ').trim();
    nome.value = "";
    sobrenome.value = "";
});