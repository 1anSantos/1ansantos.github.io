const buttons = Array.from(document.getElementsByClassName("controle-ajuste"));

buttons.forEach(botao => {
    botao.addEventListener("click", mudarValor);
});

function mudarValor(botao) {
    const input = botao.parentNode.getElementsByTagName("input");
    if (botao.innerText === "+") {
        console.log(input)
        if (input.value === 10) return;
        valor = Number(input.value) + 1
        valor = isNaN(valor) ? 1 : valor;
        input.value = valor !== 10 ? "0"+valor : valor;
    }
    else if (botao.innerText === "-") {
        if (input.value === 0) return;
        valor = Number(input.value) - 1
        input.value = "0"+valor;
    }
}