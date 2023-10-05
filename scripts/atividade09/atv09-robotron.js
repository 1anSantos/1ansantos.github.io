const robotrons = document.querySelector('#slide');
const btnVoltar = document.querySelector("#voltar");
const btnAvancar = document.querySelector("#avancar");

let voltar = voltarTrocaDeCor;
let avancar = avancarTrocaDeCor;

function mudarDemonstracaoDoRobotron(tipo) {
    if (tipo === 'TrocaDeCor') {
        voltar = voltarTrocaDeCor;
        avancar = avancarTrocaDeCor;
    }
    else if (tipo === 'Slide') {
        voltar = voltarSlide;
        avancar = avancarSlide;
    }
    else if (tipo === 'Substituir') {
        voltar = voltarSubstituicao;
        avancar = avancarSubstituicao;
    }
}

btnVoltar.addEventListener('click', () => voltar());
btnAvancar.addEventListener('click', () => avancar());

function voltarTrocaDeCor() {
    const images = robotrons.querySelectorAll('img');
    const img01 = images[images.length-1];
    const img02 = images[0];
    robotrons.insertBefore(img01, img02);
}
function avancarTrocaDeCor() {
    const images = robotrons.querySelectorAll('img');
    const img01 = images[0];
    robotrons.appendChild(img01);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function voltarSlide() {
    const images = robotrons.querySelectorAll('img');
    robotrons.insertBefore(images[images.length - 1], images[0]);
    console.log(images)
    
    images[0].style.translate = '-375px';
    await delay(0);
    images[0].style.transition = '.5s';
    images[0].style.translate = '0px';
    images[1].style.transition = 'none';
}
async function avancarSlide() {
    const images = robotrons.querySelectorAll('img');

    images[1].style.translate = '-375px';
    images[1].style.transition = '.3s';
    images[0].style.translate = '-375px';
    images[0].style.transition = '.3s';
    // Aguarda um atraso de 500 milissegundos (0,5 segundo)
    await delay(300);

    images[1].style.transition = 'none';
    images[0].style.transition = 'none';
    images[1].style.translate = '0';
    images[0].style.translate = '0';
    robotrons.insertBefore(images[0], images[images.length - 1]);
}

async function voltarSubstituicao() {
    const images = robotrons.querySelectorAll('img');
    robotrons.insertBefore(images[images.length - 1], images[0]);
    console.log(images)
    
    images[0].style.translate = '-375px';
    await delay(0);
    images[0].style.transition = '.5s';
    images[0].style.translate = '0px';
    images[1].style.transition = 'none';
}

async function avancarSubstituicao() {
    const images = robotrons.querySelectorAll('img');

    images[1].style.translate = '-375px';
    images[1].style.transition = '.3s';
    // Aguarda um atraso de 500 milissegundos (0,5 segundo)
    await delay(300);

    images[1].style.transition = 'none';
    images[1].style.translate = '0';
    robotrons.insertBefore(images[0], images[images.length - 1]);
}
