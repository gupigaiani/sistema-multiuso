let palavras = ["banana", "computador", "javascript", "programacao", "futebol", "python", "carro"];
let palavraSecreta = "";
let palavraExibida = [];
let tentativas = 0;
let tentativasRestantes = 0;

function iniciarJogo() {
  let inputTentativas = document.getElementById("tentativas").value;
  tentativas = parseInt(inputTentativas);

  if (isNaN(tentativas) || tentativas <= 0) {
    document.getElementById("mensagem").textContent = "Digite um número válido de tentativas.";
    return;
  }

  palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  palavraExibida = Array(palavraSecreta.length).fill("_");
  tentativasRestantes = tentativas;

  document.getElementById("palavra").textContent = "Palavra: " + palavraExibida.join(" ");
  document.getElementById("tentativasRestantes").textContent = "Tentativas restantes: " + tentativasRestantes;
  document.getElementById("mensagem").textContent = "";
  document.getElementById("jogo").style.display = "block";
}

function chutarLetra() {
  let letra = document.getElementById("letra").value.toLowerCase();
  document.getElementById("letra").value = "";

  if (!letra.match(/[a-z]/) || letra.length !== 1) {
    document.getElementById("mensagem").textContent = "Digite apenas uma letra válida.";
    return;
  }

  let acertou = false;
  for (let i = 0; i < palavraSecreta.length; i++) {
    if (palavraSecreta[i] === letra && palavraExibida[i] === "_") {
      palavraExibida[i] = letra;
      acertou = true;
    }
  }

  if (!acertou) {
    tentativasRestantes--;
  }

  document.getElementById("palavra").textContent = "Palavra: " + palavraExibida.join(" ");
  document.getElementById("tentativasRestantes").textContent = "Tentativas restantes: " + tentativasRestantes;

  if (palavraExibida.join("") === palavraSecreta) {
    document.getElementById("mensagem").textContent = "🎉 Você venceu! A palavra era: " + palavraSecreta;
    document.getElementById("jogo").style.display = "none";
  } else if (tentativasRestantes <= 0) {
    document.getElementById("mensagem").textContent = "💀 Você perdeu! A palavra era: " + palavraSecreta;
    document.getElementById("jogo").style.display = "none";
  }
}
