const links = document.querySelectorAll('.nav-link')

links.forEach((link) => {
    link.addEventListener('click', function(e) {
        const pageLink = link.attributes.href.nodeValue;
        if (pageLink === '#') return

        e.preventDefault(); // Evita que o link funcione como um link padrão

        // Encontre a posição do elemento alvo (o código)
        let elementoAlvo = document.querySelector(pageLink);
        let posicaoAlvo = elementoAlvo.offsetTop;
        
        // Ajuste a posição alvo para rolar um pouco antes do elemento (por exemplo, 20 pixels antes)
        posicaoAlvo -= 100;

        // Faça a rolagem suave até a posição alvo
        window.scrollTo({
            top: posicaoAlvo,
            behavior: 'smooth' // Isso cria uma rolagem suave
        });
    });
});