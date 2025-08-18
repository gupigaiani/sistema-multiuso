document.getElementById("converter").addEventListener("click", function () {
    const valor = document.getElementById("valor").value.trim();
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (valor === "" || isNaN(valor)) {
        erro.textContent = "Insira um valor válido.";
        return;
    }

    let temp = parseFloat(valor);
    let convertido;

    // Converter para Celsius primeiro
    let emCelsius;
    switch (origem) {
        case "celsius":
            emCelsius = temp;
            break;
        case "fahrenheit":
            emCelsius = (temp - 32) * 5 / 9;
            break;
        case "kelvin":
            emCelsius = temp - 273.15;
            break;
    }

    // Converter de Celsius para destino
    switch (destino) {
        case "celsius":
            convertido = emCelsius;
            break;
        case "fahrenheit":
            convertido = (emCelsius * 9 / 5) + 32;
            break;
        case "kelvin":
            convertido = emCelsius + 273.15;
            break;
    }

    resultado.textContent = `${temp} ${origem.charAt(0).toUpperCase() + origem.slice(1)} = ${convertido.toFixed(2)} ${destino.charAt(0).toUpperCase() + destino.slice(1)}`;
});
