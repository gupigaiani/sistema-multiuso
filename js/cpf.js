const opcao = document.getElementById("opcao");
const inputValidar = document.getElementById("input-validar");
const executar = document.getElementById("executar");
const resultado = document.getElementById("resultado");
const erro = document.getElementById("erro");
const cpfInput = document.getElementById("cpf");

opcao.addEventListener("change", function() {
    if (opcao.value === "validar") {
        inputValidar.style.display = "block";
    } else {
        inputValidar.style.display = "none";
        cpfInput.value = "";
    }
    resultado.textContent = "";
    erro.textContent = "";
});

executar.addEventListener("click", function() {
    erro.textContent = "";
    resultado.textContent = "";

    if (opcao.value === "gerar") {
        resultado.textContent = gerarCPF();
    } else {
        const cpf = cpfInput.value.replace(/\D/g, '');
        if (!cpf) {
            erro.textContent = "Digite um CPF válido para validar.";
            return;
        }
        resultado.textContent = validarCPF(cpf) ? "CPF Válido ✅" : "CPF Inválido ❌";
    }
});

function gerarCPF() {
    let numeros = [];
    for (let i = 0; i < 9; i++) {
        numeros.push(Math.floor(Math.random() * 10));
    }

    // Primeiro dígito verificador
    let soma = numeros.reduce((acc, val, idx) => acc + val * (10 - idx), 0);
    let dv1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    numeros.push(dv1);

    // Segundo dígito verificador
    soma = numeros.reduce((acc, val, idx) => acc + val * (11 - idx), 0);
    let dv2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    numeros.push(dv2);

    return numeros.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let numeros = cpf.split('').map(Number);

    let soma1 = 0;
    for (let i = 0; i < 9; i++) soma1 += numeros[i] * (10 - i);
    let dv1 = soma1 % 11 < 2 ? 0 : 11 - (soma1 % 11);
    if (dv1 !== numeros[9]) return false;

    let soma2 = 0;
    for (let i = 0; i < 10; i++) soma2 += numeros[i] * (11 - i);
    let dv2 = soma2 % 11 < 2 ? 0 : 11 - (soma2 % 11);
    return dv2 === numeros[10];
}
