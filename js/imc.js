const calcularBtn = document.getElementById('calcular');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoDiv = document.getElementById('resultado');
const erroP = document.getElementById('erro');

pesoInput.addEventListener('input', () => {
    let valor = pesoInput.value;
    valor = valor.replace(/[^0-9]/g, ''); 
    if (valor.length > 2) {
        valor = valor.slice(0, valor.length - 1) + ',' + valor.slice(valor.length - 1);
    }
    pesoInput.value = valor;
});

alturaInput.addEventListener('input', () => {
    let valor = alturaInput.value;
    valor = valor.replace(/[^0-9]/g, ''); 
    if (valor.length > 1) {
        valor = valor.slice(0, 1) + ',' + valor.slice(1);
    }
    alturaInput.value = valor;
});

calcularBtn.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value.replace(',', '.'));
    const altura = parseFloat(alturaInput.value.replace(',', '.'));

    resultadoDiv.innerHTML = '';
    erroP.textContent = '';

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        erroP.textContent = 'Por favor, digite valores válidos!';
        return;
    }

    const imc = peso / (altura * altura);
    const imcFixed = imc.toFixed(1);

    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc >= 18.5 && imc <= 24.9) classificacao = 'Peso normal';
    else if (imc >= 25 && imc <= 29.9) classificacao = 'Sobrepeso';
    else if (imc >= 30 && imc <= 34.9) classificacao = 'Obesidade grau I';
    else if (imc >= 35 && imc <= 39.9) classificacao = 'Obesidade grau II';
    else if (imc >= 40) classificacao = 'Obesidade grau III';

    resultadoDiv.innerHTML = `Seu IMC é <strong>${imcFixed}</strong>.<br>Classificação: <strong>${classificacao}</strong>`;
});
