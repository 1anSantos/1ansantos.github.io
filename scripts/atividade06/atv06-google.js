// VAR
const body = document.body;
const titlePage = document.querySelector("title");

// ID
const search = document.querySelector("#search");
const settings = document.querySelector("#settings");
const searchBTN = document.querySelector("#search-button");
const settingsBoard = document.querySelector("#settings-board");
const imFeelingLucktBTN = document.querySelector("#im-feeling-lucky-button");

// Class
const logo = document.querySelector(".logo");
const changeLogo = document.querySelector(".change-logo");
const changeTheme = document.querySelector(".change-theme");
const magnifyingGlass = document.querySelector("div.magnifying-glass");

// Functions
settings.addEventListener("click", () => {
    if (settingsBoard.style.display === "none") {
        settingsBoard.style.display = "block";
    }
    else {
        settingsBoard.style.display = "none";
    }
});

changeTheme.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

changeLogo.addEventListener("click", () => {
    logo.classList.toggle("perry");
    if (logo.classList.contains("perry")) {
        logo.innerHTML = `
        <img src="../../multimedia/img/perry-search.png" alt="image of perry the platypus">
        `;
        searchBTN.innerText = `Perry Search`;
        titlePage.innerHTML = `Google - Perry Search`;
    }
    else {
        logo.innerHTML = `
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo">
        `;
        searchBTN.innerText = `Google Search`;
        titlePage.innerHTML = `Google`;
    }
});

magnifyingGlass.addEventListener("click", () => {
    search.focus();
});

searchBTN.addEventListener("click", () => {
    searchOnGoogle('https://www.google.com/search?q=');
});

search.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchOnGoogle('https://www.google.com/search?q=');
    }
});

imFeelingLucktBTN.addEventListener("click", () => {
    searchOnGoogle('https://www.google.com/search?btnI=1&q=');
});

function searchOnGoogle(googleUrl) {
    googleUrl += encodeURIComponent(search.value);
    window.open(googleUrl, "_blank");
}