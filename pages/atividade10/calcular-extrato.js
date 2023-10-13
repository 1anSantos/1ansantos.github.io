// Tabela
const tabela = document.getElementById("extrato-linhas");

// Extrato
const extrato = document.getElementById("extrato-resumo");
const extratoTotal = document.getElementById("extrato-total");
const extratoMeses = document.getElementById("extrato-meses");
const extratoMercadoTotal = document.getElementById("extrato-total-mercado");
const extratoMercadoMaior = document.getElementById("extrato-maior-gasto-mercado");

// Inputs
const categoria = document.getElementById("categoria");
const valor = document.getElementById("valor");
const data = document.getElementById("data");

// Variáveis
const gastos = [];

function adicionar() {
    const dataValue = data.value.replace(/-/g, "/");
    const valorValue = valor.value.replace(",", ".");

    if (dataValue === "" || valorValue === "") return;
    if (isNaN(valorValue)) {
        alert("Coloque um valor válido!");
        return;
    }

    gastos.push({
        categoria: categoria.value,
        data: dataValue,
        valor: Number(valorValue)
    });
    tabela.innerHTML += `
    <tr>
        <td>${categoria.value}</td>
        <td>${dataValue}</td>
        <td>${valorValue}</td>
    </tr>
    `
}

function calcular() {
    if (tabela.children.length === 1) {
        alert("Nada para calcular aqui");
        return;
    }
    if (extrato.style.display === "none") {
        extrato.style.display = "block";
    }

    gastos.sort(mesesEmOrdemCrescente);

    extratoTotal.innerText = 'Total: ' + gastos.reduce((sum, gasto) => sum + gasto.valor, 0);
    extratoMercadoMaior.innerText = 'Maior gasto com Mercado: ' + maiorGasto();
    extratoMercadoTotal.innerText = 'Total de gastos com Mercado: ' + mercadoTotal();
    let mes;
    extratoMeses.innerHTML = "";
    for (let i = 0; i < gastos.length; i++) {
        let mesGasto = gastos[i].data.split("/")[1];
        if (mesGasto === mes) {
            const p = extratoMeses.children[extratoMeses.children.length - 1];
            const valorAntigo = Number(p.innerText.split(":")[1].replace("</p>", ""));
            const novoValor = valorAntigo + gastos[i].valor;
            p.innerHTML = `<p>Total no Mês ${mesGasto}: ${novoValor}</p>`
        }
        else {
            mes = mesGasto;
            extratoMeses.innerHTML += `<p>Total no Mês ${mesGasto}: ${gastos[i].valor}</p>`
        }
    }
}

function mesesEmOrdemCrescente(a, b) {
    const mes1 = a.data.split("/")[1];
    const mes2 = b.data.split("/")[1];
    return mes1 - mes2;
}

function maiorGasto() {
    const listaMercado = gastos.filter(gasto => gasto.categoria === "Mercado");
    let valores = listaMercado.map(gasto => gasto.valor);
    if (valores.length === 0) valores = [0,0];
    return Math.max(...valores);
}

function mercadoTotal() {
    const listaMercado = gastos.filter(gasto => gasto.categoria === "Mercado");
    const totalGastos = listaMercado.reduce((sum, gasto) => sum + gasto.valor, 0);
    return totalGastos;
}