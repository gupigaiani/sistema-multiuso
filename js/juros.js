const calcularBtn = document.getElementById("calcular");
const tipo = document.getElementById("tipo");
const capitalInput = document.getElementById("capital");
const taxaInput = document.getElementById("taxa");
const tempoInput = document.getElementById("tempo");
const unidade = document.getElementById("unidade");
const erro = document.getElementById("erro");
const resultadoDiv = document.getElementById("resultado");

const unidadeSelect = document.getElementById("unidade");
const tempoLabel = document.getElementById("tempo-label");
const taxaLabel = document.getElementById("taxa-label");

unidadeSelect.addEventListener("change", () => {
    if (unidadeSelect.value === "meses") {
        tempoLabel.textContent = "Tempo em meses:";
        taxaLabel.textContent = "Taxa mensal (%)";
    } else {
        tempoLabel.textContent = "Tempo em anos:";
        taxaLabel.textContent = "Taxa anual (%)";
    }
});

calcularBtn.addEventListener("click", () => {
    erro.textContent = "";
    resultadoDiv.innerHTML = "";

    const capital = parseFloat(capitalInput.value.replace(",", "."));
    const taxa = parseFloat(taxaInput.value.replace(",", "."));
    let tempo = parseFloat(tempoInput.value.replace(",", "."));

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa < 0 || tempo <= 0) {
        erro.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    if (unidade.value === "anos") {
        tempo *= 12;
    }

    let resultado;

    if (tipo.value === "simples") {
        resultado = capital + (capital * (taxa / 100) * tempo);
        resultadoDiv.innerHTML = `Juros Simples: R$ ${resultado.toFixed(2)}`;
    } else if (tipo.value === "compostos") {
        resultado = capital * Math.pow(1 + (taxa / 100), tempo);
        resultadoDiv.innerHTML = `Juros Compostos: R$ ${resultado.toFixed(2)}`;
    }
});
