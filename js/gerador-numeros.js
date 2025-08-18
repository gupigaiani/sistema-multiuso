document.getElementById("gerar").addEventListener("click", function() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (isNaN(quantidade) || isNaN(min) || isNaN(max) || quantidade <= 0 || min > max) {
        erro.textContent = "Preencha todos os campos corretamente!";
        return;
    }

    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    resultado.textContent = "Números gerados: " + numeros.join(", ");
});
