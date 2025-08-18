document.getElementById("converter").addEventListener("click", function () {
    const decimalInput = document.getElementById("decimal").value.trim();
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (decimalInput === "" || isNaN(decimalInput)) {
        erro.textContent = "Por favor, digite um número válido.";
        return;
    }

    const decimal = parseInt(decimalInput, 10);

    if (decimal < 0) {
        erro.textContent = "Digite apenas números inteiros positivos.";
        return;
    }

    const binario = decimal.toString(2);
    resultado.textContent = `Binário: ${binario}`;
});
