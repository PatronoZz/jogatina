const imagemURL = 'https://img.buzzfeed.com/buzzfeed-static/static/2020-09/15/19/asset/49f653424ccb/sub-buzz-9155-1600197858-50.png?crop=861:637;0,56';
const audioURL = 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav';
let contadorCliques = 0;
let ponto = document.getElementById('ponto');
let imagemTelaCheia = document.createElement('img');
imagemTelaCheia.id = 'imagemTelaCheia';
imagemTelaCheia.src = imagemURL;
imagemTelaCheia.style.position = 'fixed';
imagemTelaCheia.style.top = 0;
imagemTelaCheia.style.left = 0;
imagemTelaCheia.style.width = '100%';
imagemTelaCheia.style.height = '100%';
imagemTelaCheia.style.zIndex = 1000;
imagemTelaCheia.style.display = 'none';
document.body.appendChild(imagemTelaCheia);

let audio = new Audio(audioURL);

ponto.addEventListener('click', function() {
    contadorCliques++;

    if (contadorCliques === 3) {
        mostrarImagemTelaCheia();
        reproduzirAudio();
        contadorCliques = 0;
    }

    gerarNovaPosicao();
    atualizarPosicaoPonto();
    mudarCorPonto();
});

function gerarNovaPosicao() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    return { top: y + 'px', left: x + 'px' };
}

function atualizarPosicaoPonto() {
    let novaPosicao = gerarNovaPosicao();
    ponto.style.top = novaPosicao.top;
    ponto.style.left = novaPosicao.left;
}

function mudarCorPonto() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    ponto.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function mostrarImagemTelaCheia() {
    imagemTelaCheia.style.display = 'block';
}

function reproduzirAudio() {
    audio.play();
}

// Função para fechar a imagem em tela cheia e parar o áudio (a ser implementada)
function fecharImagemTelaCheia() {
    imagemTelaCheia.style.display = 'none';
    audio.pause();
}