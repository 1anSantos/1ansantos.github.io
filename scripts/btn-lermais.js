const lerMais = document.querySelectorAll(".ler-mais");
lerMais.forEach(btn => {
    btn.onclick = function () {
        let txt = document.getElementById(`${btn.id}-txt`);
        if (txt.style.display == "none") {
            txt.style.display = "inline";
            btn.innerHTML = "ler menos";
        }
        else {
            txt.style.display = "none";
            btn.innerHTML = "ler mais";
        }
    }
});