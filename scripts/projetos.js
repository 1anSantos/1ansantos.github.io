//* ----- Variáveis ----- 
const notFound = document.querySelector("#not-found");
const navLinks = document.querySelector("#nav-links");
const searchArea = document.querySelector("#search-area");
const searchGlass = document.querySelector("#search-glass");
const searchBack = document.querySelector("#search-back");
const searchCard = document.querySelector("#search-card");
const searchClear = document.querySelector("#search-clear");
const projectCards = document.querySelector("#project-cards");
const allCards = Array.from(projectCards.querySelectorAll(".card"));

//* ----- Functions ----- 
organize()// rodar o script logo no começo
window.addEventListener("resize", organize); // rodar o script a cada resize da tela

// searchGlass.addEventListener("click", isMobile);

// Limpar a caixa de pesquisa + mostrar todos os cards
searchClear.addEventListener("click", () => {
    searchCard.value = "";
    search();
});

// Pesquisar apenas com o Enter
/*
searchCard.addEventListener("keyup", (keyPressed) => {
    if (keyPressed.key !== "Enter") return;
    search();
});
*/
// Pesquisar a cada clique de tecla
searchCard.addEventListener("input", search);


function search() {
    const cardsSearched = allCards.filter((card) => {
        const title = card.querySelector(".card-title").textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const value = searchCard.value.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const result = title.includes(value);
        return result;
    });

    allCards.forEach((card) => card.style.display = "none");
    cardsSearched.forEach((card) => card.style.display = "grid");

    if (cardsSearched.length !== 0) {
        notFound.style.display = "none";
        organize();
    }
    else {
        if (notFound.style.display !== "none") return;
        notFound.style.display = "flex";
        let num = parseInt(Math.random() * 2);
        notFound.children[num].style.display = "block";
        notFound.children[num === 1 ? 0 : 1].style.display = "none";
    }
}

// Alterar entre um card grande para quantidades ímpares em pc
function organize() {
    const cardsOpen = allCards.filter((card) => card.style.display !== "none");
    const isOdd = cardsOpen.length % 2 !== 0;
    if (window.innerWidth > 880 && isOdd) {
        cardsOpen[cardsOpen.length-1].style.gridColumn = "1 / span 2";
    }
    if(test(cardsOpen)) return;
    const cardsFilter = cardsOpen.filter((card) => {
        if (isOdd && card === cardsOpen[cardsOpen.length-1] && window.innerWidth > 880) {
            return false;
        }
        return card.style.gridColumn === "1 / span 2";
    });
    cardsFilter.forEach((card) => {
        return card.style.gridColumn = "span 1";
    });
}

function test(cards) {
    const isOdd = cards.length % 2 !== 0;
    return cards.every((card) => {
        if (isOdd && card === cards[cards.length-1] && window.innerWidth > 880) {
            return true;
        }
        else {
            return card.style.gridColumn !== "1 / span 2";
        }
    });
}