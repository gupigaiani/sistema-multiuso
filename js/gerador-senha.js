document.getElementById("gerar").addEventListener("click", function() {
    const tamanho = parseInt(document.getElementById("tamanho").value);
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (isNaN(tamanho) || tamanho < 4 || tamanho > 50) {
        erro.textContent = "A senha deve ter entre 4 e 50 caracteres.";
        return;
    }

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/~`-=";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    resultado.textContent = senha;
});
