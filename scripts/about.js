document.addEventListener("DOMContentLoaded", function () {
    // Padrão: exibir o slide1
    exibirSlide("slide1");

    // Adicionar ouvintes de evento para os botões
    document.getElementById("radio1").addEventListener("change", function () {
        exibirSlide("slide1");
    });
    // Adicionar um segundo botão e ouvinte de evento
    document.getElementById("radio2").addEventListener("change", function () {
        exibirSlide("slide2");
    });

    // Adicionar um terceiro botão e ouvinte de evento
    document.getElementById("radio3").addEventListener("change", function () {
        exibirSlide("slide3");
    });

    // Adicionar um quarto botão e ouvinte de evento
    document.getElementById("radio4").addEventListener("change", function () {
        exibirSlide("slide4");
    });
});

function exibirSlide(slideId) {
    // Ocultar todos os slides
    var slides = document.querySelectorAll(".about-conteudo");
    slides.forEach(function (slide) {
        slide.style.display = "none";
    });

    // Exibir o slide desejado
    document.getElementById(slideId).style.display = "block";
}
