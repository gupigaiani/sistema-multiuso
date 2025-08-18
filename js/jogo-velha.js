const tabuleiro = document.getElementById("tabuleiro");
const celulas = document.querySelectorAll(".celula");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");

let turno = "X";
let jogoAtivo = true;
let estadoTabuleiro = ["", "", "", "", "", "", "", "", ""];

const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function verificarVitoria() {
    for (let combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        if (estadoTabuleiro[a] && estadoTabuleiro[a] === estadoTabuleiro[b] && estadoTabuleiro[a] === estadoTabuleiro[c]) {
            jogoAtivo = false;
            resultado.textContent = `Jogador ${turno} venceu!`;
            return;
        }
    }
    if (!estadoTabuleiro.includes("")) {
        jogoAtivo = false;
        resultado.textContent = "Empate!";
    }
}

function celulaClick(event) {
    const index = event.target.getAttribute("data-index");
    if (estadoTabuleiro[index] !== "" || !jogoAtivo) return;

    estadoTabuleiro[index] = turno;
    event.target.textContent = turno;

    verificarVitoria();

    turno = turno === "X" ? "O" : "X";
}

function reiniciarJogo() {
    estadoTabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogoAtivo = true;
    turno = "X";
    celulas.forEach(celula => celula.textContent = "");
    resultado.textContent = "";
}

celulas.forEach(celula => celula.addEventListener("click", celulaClick));
reiniciar.addEventListener("click", reiniciarJogo);
