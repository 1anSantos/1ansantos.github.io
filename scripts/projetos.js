const searchCard = document.querySelector("#search-card");
const searchClose = document.querySelector("#search-close");
const projectCards = document.querySelector("#project-cards");
const allCards = Array.from(projectCards.querySelectorAll(".card"));

organize()
window.addEventListener("resize", organize);

searchClose.addEventListener("click", () => {
    searchCard.value = "";
    search();
});// rodar o script logo no começo

function search() {
    const cardsSearched = allCards.filter((card) => {
        const title = card.querySelector(".card-title").textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const value = searchCard.value.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const result = title.includes(value);
        return result;
    });

    allCards.forEach((card) => card.style.display = "none");
    cardsSearched.forEach((card) => card.style.display = "grid");
    organize();
}

function organize() {
    const cardsOpen = allCards.filter((card) => card.style.display !== "none");
    const isOdd = cardsOpen.length % 2 !== 0;
    if (window.innerWidth > 880 && isOdd) {
        cardsOpen[cardsOpen.length-1].style.gridColumn = "1 / span 2";
    }
    if(test(cardsOpen)) return;
    const cardsFilter = cardsOpen.filter((card) => {
        const test1 = card !== cardsOpen[cardsOpen.length-1] && window.innerWidth > 880;
        const test2 = card.style.gridColumn === "1 / span 2";
        return test1 || test2
    });
    console.log(cardsFilter)
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