const valorInput = document.getElementById("valor");
const deSelect = document.getElementById("de");
const paraSelect = document.getElementById("para");
const converterBtn = document.getElementById("converter");
const resultadoDiv = document.getElementById("resultado");
const erro = document.getElementById("erro");

const taxas = {
    BRL: { USD: 0.20, EUR: 0.18, GBP: 0.16 },
    USD: { BRL: 5.0, EUR: 0.9, GBP: 0.8 },
    EUR: { BRL: 5.5, USD: 1.1, GBP: 0.88 },
    GBP: { BRL: 6.2, USD: 1.25, EUR: 1.13 }
};

converterBtn.addEventListener("click", () => {
    erro.textContent = "";
    resultadoDiv.textContent = "";

    const valor = parseFloat(valorInput.value);
    const de = deSelect.value;
    const para = paraSelect.value;

    if (isNaN(valor) || valor <= 0) {
        erro.textContent = "Digite um valor válido.";
        return;
    }

    if (de === para) {
        resultadoDiv.textContent = `O valor é o mesmo: ${valor.toFixed(2)} ${para}`;
        return;
    }

    const taxa = taxas[de][para];
    if (!taxa) {
        erro.textContent = "Conversão não disponível.";
        return;
    }

    const convertido = valor * taxa;
    resultadoDiv.textContent = `${valor.toFixed(2)} ${de} = ${convertido.toFixed(2)} ${para}`;
});
