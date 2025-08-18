document.getElementById("contar").addEventListener("click", function() {
    const texto = document.getElementById("texto").value.trim();
    const ignorarEspacos = document.getElementById("ignorarEspacos").checked;
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (texto === "") {
        erro.textContent = "Digite algum texto para contar!";
        return;
    }

    let caracteres = ignorarEspacos ? texto.replace(/\s/g, "").length : texto.length;
    let palavras = texto.split(/\s+/).filter(word => word.length > 0).length;

    resultado.textContent = `Palavras: ${palavras} | Caracteres: ${caracteres}`;
});
