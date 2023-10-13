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

btnVoltar.addEventListener('click', async () => {
    btnVoltar.setAttribute('disabled', true);
    voltar();
    await delay(300);
    btnVoltar.removeAttribute('disabled');
});
btnAvancar.addEventListener('click', async () => {
    btnAvancar.setAttribute('disabled', true);
    avancar();
    await delay(300);
    btnAvancar.removeAttribute('disabled');
});

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
    robotrons.insertBefore(images[images.length-1], images[0]);
    images.forEach(img => {
        img.style.translate = '-375px';
    });
    await delay(0);
    images.forEach(img => {
        img.style.transition = '.3s translate';
        img.style.translate = '0';
    });
    await delay(300);
    images.forEach(img => {
        img.style.transition = 'none';
    });
}
async function avancarSlide() {
    const images = robotrons.querySelectorAll('img');
    images.forEach(img => {
        img.style.transition = '.3s translate';
        img.style.translate = '-375px';
    });
    await delay(300);
    images.forEach(img => {
        img.style.transition = 'none';
        img.style.translate = '0';
    });
    robotrons.appendChild(images[0]);
}

async function voltarSubstituicao() {
    const images = robotrons.querySelectorAll('img');
    robotrons.insertBefore(images[images.length - 1], images[0]);
    
    images[0].style.translate = '-375px';
    await delay(0);
    images[0].style.transition = '.5s translate';
    images[0].style.translate = '0';
    images[1].style.transition = 'none';
}

async function avancarSubstituicao() {
    const images = robotrons.querySelectorAll('img');

    images[1].style.translate = '-375px';
    images[1].style.transition = '.3s translate';
    // Aguarda um atraso de 500 milissegundos (0,5 segundo)
    await delay(300);

    images[1].style.transition = 'none';
    images[1].style.translate = '0';
    robotrons.appendChild(images[0]);
}
