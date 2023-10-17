const buttons = document.querySelectorAll(".controle-ajuste");
const btnPreviousRobotron = document.querySelector("#previous");
const btnNextRobotron = document.querySelector("#next");
const robotronDiv = document.querySelector("#robotron-container");

btnPreviousRobotron.addEventListener("click", () => {
    const robotronIMG = robotronDiv.querySelectorAll(".robo");
    robotronDiv.insertBefore(robotronIMG[robotronIMG.length - 1], robotronIMG[0]);
});

btnNextRobotron.addEventListener("click", () => {
    const robotronIMG = robotronDiv.querySelectorAll(".robo");
    robotronDiv.appendChild(robotronIMG[0]);
});

buttons.forEach(botao => {
    botao.addEventListener("click", () => mudarValor(botao));
});

function mudarValor(botao) {
    const input = botao.parentNode.querySelector("input");

    if (botao.innerText === "+") {
        if (input.value === "10") return;
        const valor = Number(input.value) + 1;
        input.value = valor !== 10 ? "0"+valor : valor;
    }
    else if (botao.innerText === "-") {
        if (input.value === "00") return;
        const valor = Number(input.value) - 1;
        input.value = "0"+valor;
    }
}