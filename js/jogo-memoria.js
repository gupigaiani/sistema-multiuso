const tabuleiro = document.getElementById("tabuleiro");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");

let emojis = ["🍎", "🍌", "🍇", "🍉", "🍓", "🥝", "🍒", "🍑"];
let cartas = [...emojis, ...emojis]; 
let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;
let paresEncontrados = 0;

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function criarTabuleiro() {
    tabuleiro.innerHTML = "";
    embaralhar(cartas);
    cartas.forEach((emoji, index) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.setAttribute("data-emoji", emoji);
        carta.setAttribute("data-index", index);
        carta.addEventListener("click", revelarCarta);
        tabuleiro.appendChild(carta);
    });
    paresEncontrados = 0;
    resultado.textContent = "";
}

function revelarCarta(event) {
    if (bloqueio) return;
    const carta = event.target;
    if (carta.classList.contains("revelada")) return;

    carta.textContent = carta.getAttribute("data-emoji");
    carta.classList.add("revelada");

    if (!primeiraCarta) {
        primeiraCarta = carta;
    } else {
        segundaCarta = carta;
        bloqueio = true;

        setTimeout(() => {
            if (primeiraCarta.getAttribute("data-emoji") !== segundaCarta.getAttribute("data-emoji")) {
                primeiraCarta.textContent = "";
                segundaCarta.textContent = "";
                primeiraCarta.classList.remove("revelada");
                segundaCarta.classList.remove("revelada");
            } else {
                primeiraCarta.classList.add("certa");
                segundaCarta.classList.add("certa");
                paresEncontrados++;
                if (paresEncontrados === emojis.length) {
                    resultado.textContent = "Parabéns! Você encontrou todos os pares!";
                }
            }
            primeiraCarta = null;
            segundaCarta = null;
            bloqueio = false;
        }, 800);
    }
}

reiniciar.addEventListener("click", criarTabuleiro);

criarTabuleiro();
