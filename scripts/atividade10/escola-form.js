const DDDpossiveis = [
    61, // Distrito Federal
    62, 64, // Goiás
    65, 66, // Mato Grosso
    67, // Mato Grosso do Sul
    82, // Alagoas
    71, 73, 74, 75, 77, // Bahia
    85, 88, // Ceará
    98, 99, // Maranhão
    83, // Paraíba
    81, 87, // Pernambuco
    86, 89, // Piauí
    84, // Rio Grande do Norte
    79, // Sergipe
    68, // Acre
    96, // Amapá
    92, 97, // Amazonas
    91, 93, 94, // Pará
    69, // Rondônia
    95, // Roraima
    63, // Tocantins
    27, 28, // Espírito Santo
    31, 32, 33, 34, 35, 37, 38, // Minas Gerais
    21, 22, 24, // Rio de Janeiro
    11, 12, 13, 14, 15, 16, 17, 18, 19, // São Paulo
    41, 42, 43, 44, 45, 46, // Paraná
    51, 53, 54, 55, // Rio Grande do Sul
    47, 48, 49 // Santa Catarina
];

const form = document.getElementById("form");
const ddd = document.getElementById("ddd");
const email = document.getElementById("email");
const checkBox = document.getElementsByName("atividade-extracurricular");

form.addEventListener("submit", submitMessage);

function submitMessage(event) {
    if (verificarCampos()) {
        event.preventDefault();
        return;
    }
    alert('Formulário enviado com sucesso!');
}

function verificarCampos() {
    if (!DDDpossiveis.includes(Number(ddd.value))) {
        alert("DDD inválido");
        return true;
    }
    if (!email.value.includes(".")) {
        alert("Email inválido!\nNão contém ponto.");
        return true;
    }
    const checkBoxAtiva = Array.from(checkBox).filter(check => check.checked);
    if (checkBoxAtiva.length > 3) {
        alert("Só aceitamos 3 atividades extracurriculares!");
        return true;
    }
    return false
}