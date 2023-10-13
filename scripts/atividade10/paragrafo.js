const fontes = [
    "Arial", "Trebuchet MS", "Georgia", "cursive",
    "Impact", "Verdana", "sans-serif", "Lucida Sans",
    "Gill Sans", "Courier New", "monospace", "Times New Roman"
];
const cores = [
    "#000", "#333", "#ff0000", "#008000",
    "#0000ff", "#8a2be2", "#f08", "#b80",
    "#508223", "#420356", "#00ff00", "#f08fff"
]

const texto = document.querySelector("#text");

document.querySelector("html").addEventListener("click", js_style)


function js_style() {
    const fonteTamanho = parseInt(Math.random() * (30 - 15)) + 16;
    const fonteIndex = parseInt(Math.random() * 12);
    const corIndex = parseInt(Math.random() * 12);

    texto.style.fontSize = fonteTamanho + "px";
    texto.style.fontFamily = fontes[fonteIndex];
    texto.style.color = cores[corIndex];
}