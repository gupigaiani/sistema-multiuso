const container = document.getElementById("labirinto-container");
const gerarBtn = document.getElementById("gerar");
const dificuldadeSelect = document.getElementById("dificuldade");

let jogador = { x: 0, y: 0 };
let labirinto = [];
let tamanho = 5;

function criarLabirintoDFS(n) {
    let grid = Array(n).fill(null).map(() => Array(n).fill(1));

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function dfs(x, y) {
        grid[y][x] = 0;
        let direcoes = shuffle([
            [0, -1], 
            [0, 1], 
            [-1, 0], 
            [1, 0]  
        ]);

        for (let [dx, dy] of direcoes) {
            let nx = x + dx*2;
            let ny = y + dy*2;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[ny][nx] === 1) {
                grid[y + dy][x + dx] = 0; 
                dfs(nx, ny);
            }
        }
    }

    dfs(0,0); 
    grid[0][0] = 0; 
    grid[n-1][n-1] = 0; 
    return grid;
}

function renderLabirinto(grid) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${grid.length}, 30px)`;
    container.style.gridTemplateRows = `repeat(${grid.length}, 30px)`;
    grid.forEach((linha, y) => {
        linha.forEach((cel, x) => {
            const div = document.createElement("div");
            div.classList.add("celula");
            if (cel === 1) div.classList.add("parede");
            if (x === jogador.x && y === jogador.y) div.classList.add("jogador");
            if (x === grid.length-1 && y === grid.length-1) div.classList.add("saida");
            container.appendChild(div);
        });
    });
}

function moverJogador(dx, dy) {
    let nx = jogador.x + dx;
    let ny = jogador.y + dy;
    if (nx >= 0 && nx < tamanho && ny >= 0 && ny < tamanho && labirinto[ny][nx] === 0) {
        jogador.x = nx;
        jogador.y = ny;
        renderLabirinto(labirinto);
        if (jogador.x === tamanho-1 && jogador.y === tamanho-1) {
            alert("Parabéns! Você chegou à saída!");
        }
    }
}

document.addEventListener("keydown", e => {
    switch(e.key) {
        case "ArrowUp": moverJogador(0,-1); break;
        case "ArrowDown": moverJogador(0,1); break;
        case "ArrowLeft": moverJogador(-1,0); break;
        case "ArrowRight": moverJogador(1,0); break;
    }
});

gerarBtn.addEventListener("click", () => {
    tamanho = parseInt(dificuldadeSelect.value);
    labirinto = criarLabirintoDFS(tamanho);
    jogador = { x:0, y:0 };
    renderLabirinto(labirinto);
});
