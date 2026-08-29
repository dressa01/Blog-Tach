const botoes = document.querySelectorAll(".botao-curtida");

botoes.forEach(function (botao) {

    let clicado = false;

    botao.addEventListener("click", function () {

        let contador = botao.querySelector("span");

        if (clicado === false) {
            contador.textContent++;
            clicado = true;
        }

    });

});