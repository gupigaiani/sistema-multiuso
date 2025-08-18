import QRCode from "https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js";

const gerarBtn = document.getElementById("gerar");
const textoInput = document.getElementById("texto");
const qrcodeDiv = document.getElementById("qrcode");
const erro = document.getElementById("erro");

gerarBtn.addEventListener("click", async () => {
    erro.textContent = "";
    qrcodeDiv.innerHTML = ""; // limpa QR anterior

    const texto = textoInput.value.trim();
    if (!texto) {
        erro.textContent = "Digite um texto ou link válido.";
        return;
    }

    try {
        const svgString = await QRCode.toString(texto, {
            type: 'svg',
            width: 200,
            color: {
                dark: '#00bfff',
                light: '#1e1e1e'
            }
        });
        qrcodeDiv.innerHTML = svgString;
    } catch (err) {
        erro.textContent = "Erro ao gerar QR Code.";
        console.error(err);
    }
});
