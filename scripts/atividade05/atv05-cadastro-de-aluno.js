const matricula_input = document.querySelector("#txt-matricula");
const nome_input = document.querySelector("#txt-nome");
const email_input = document.querySelector("#txt-email");

const salvar_exibir_BTN = document.querySelector("#salvar-exibir");
const atualizar_BTN = document.querySelector("#atualizar");
const excluir_BTN = document.querySelector("#excluir");
const Aluno = {};

salvar_exibir_BTN.addEventListener("click", () => {
    
});

function atualizar_cadastro() {
    Aluno.matricula = matricula_input.value;
    Aluno.nome = nome_input.value;
    Aluno.email = email_input.value;
    limpar_input();
    if (salvar_exibir_BTN.innerText === "Salvar") {
        salvar_exibir_BTN.innerText = "Exibir";
        salvar_exibir_BTN.type = "button";
    }
}

function limpar_input() {
    matricula_input.value = "";
    nome_input.value = "";
    email_input.value = "";
}