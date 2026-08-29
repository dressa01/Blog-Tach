let curtidas = 0;

const botaoCurtir = document.getElementById("botao-curtir");
const contadorCurtidas = document.getElementById("contador-curtidas");

botaoCurtir.addEventListener("click", function () {
    curtidas++;

    contadorCurtidas.textContent = curtidas + " curtidas";
    botaoCurtir.textContent = "♥ Curtido";
});