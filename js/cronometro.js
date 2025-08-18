const tempoDisplay = document.getElementById("tempo");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalId = null;

function atualizarDisplay() {
    const h = String(horas).padStart(2, "0");
    const m = String(minutos).padStart(2, "0");
    const s = String(segundos).padStart(2, "0");
    tempoDisplay.textContent = `${h}:${m}:${s}`;
}

function iniciarCronometro() {
    if(intervalId) return; // evita múltiplos intervalos
    intervalId = setInterval(() => {
        segundos++;
        if(segundos >= 60) { segundos = 0; minutos++; }
        if(minutos >= 60) { minutos = 0; horas++; }
        atualizarDisplay();
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetarCronometro() {
    pausarCronometro();
    segundos = 0; minutos = 0; horas = 0;
    atualizarDisplay();
}

startBtn.addEventListener("click", iniciarCronometro);
pauseBtn.addEventListener("click", pausarCronometro);
resetBtn.addEventListener("click", resetarCronometro);
