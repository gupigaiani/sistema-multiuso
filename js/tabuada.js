const gerarBtn = document.getElementById('gerar');
const numeroInput = document.getElementById('numero');
const resultadoDiv = document.getElementById('resultado');
const erroP = document.getElementById('erro');

gerarBtn.addEventListener('click', () => {
    const valor = numeroInput.value.trim();
    resultadoDiv.innerHTML = '';
    erroP.textContent = '';

    // Validação
    if (valor === '' || isNaN(valor)) {
        erroP.textContent = 'Digite um número válido!';
        return;
    }

    const numero = parseInt(valor);

    // Gerar tabuada
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultadoDiv.innerHTML = resultado;
});
