document.getElementById("calcular").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const erro = document.getElementById("erro");
    const resultado = document.getElementById("resultado");

    erro.textContent = "";
    resultado.textContent = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        erro.textContent = "Por favor, preencha todos os valores.";
        return;
    }

    if (a === 0) {
        erro.textContent = "O valor de 'a' não pode ser zero (não é equação do 2º grau).";
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        resultado.textContent = `Não existem raízes reais.`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultado.textContent = `Delta = ${delta}. Raiz única: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado.textContent = `x₁ = ${x1.toFixed(2)} e x₂ = ${x2.toFixed(2)}`;
    }
});
