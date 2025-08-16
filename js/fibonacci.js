document.getElementById("gerar").addEventListener("click", function () {
    const numero = document.getElementById("numero").value;
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (numero === "" || isNaN(numero) || numero <= 0) {
        erro.textContent = "Por favor, informe um número válido maior que 0.";
        return;
    }

    let n = parseInt(numero);
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    resultado.textContent = `Sequência: ${fib.slice(0, n).join(", ")}`;
});
