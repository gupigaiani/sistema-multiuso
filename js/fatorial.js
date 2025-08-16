document.getElementById("calcular").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");
    const erro = document.getElementById("erro");

    resultadoDiv.innerHTML = "";
    erro.textContent = "";

    if (isNaN(numero) || numero < 0) {
        erro.textContent = "Digite um número inteiro válido.";
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    resultadoDiv.innerHTML = `<p>O fatorial de <strong>${numero}</strong> é: <strong>${fatorial}</strong></p>`;
});
