//* ----- Variables ----- 
const navLinks = document.querySelector("#nav-links");

const searchBar = document.querySelector("#search-bar");
const searchArea = document.querySelector("#search-area");
const searchGlass = document.querySelector("#search-glass");
const searchBack = document.querySelector("#search-back");
const searchCard = document.querySelector("#search-card");
const searchClear = document.querySelector("#search-clear");

const notFound = document.querySelector("#not-found");

const projectCards = document.querySelector("#project-cards");
const allCards = Array.from(projectCards.querySelectorAll(".card"));

//-------------------------------------------------------------------------------------
// initial commands
organize()// rodar o script logo no começo
window.addEventListener("resize", organize); // rodar o script a cada resize da tela
//-------------------------------------------------------------------------------------

//* ----- Event Listeners ----- 
searchGlass.addEventListener("click", () => {
    if (window.innerWidth > 880) return;
    openSearchBarInMobile();
});

searchBack.addEventListener("click", () => {
    if (searchArea.style.display !== "block") return;
    leaveSearchBarInMobile();
});

window.addEventListener("popstate", () => {
    if (searchArea.style.display !== "block") return;
    leaveSearchBarInMobile();
});

// limpar pesquisa
searchClear.addEventListener("click", () => {
    searchCard.value = "";
    search();
});

// Pesquisar a cada clique de tecla
searchCard.addEventListener("input", () => {
    // if (window.innerWidth < 880) return;
    search();
});

// // Pesquisar apenas com o Enter
// searchCard.addEventListener("keyup", (keyPressed) => {
//     if (keyPressed.key !== "Enter") return;
//     search();
// });


//* ----- Functions ----- 
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

function openSearchBarInMobile() {
    navLinks.style.display = "none";
    searchGlass.style.display = "none";
    searchBar.style.width = "100%";
    searchBack.style.display = "block";
    searchArea.style.display = "block";
}

function leaveSearchBarInMobile() {
    navLinks.style.display = "block";
    searchGlass.style.display = "block";
    searchBar.style.width = "auto";
    searchBack.style.display = "none";
    searchArea.style.display = "none";
}