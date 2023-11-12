// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Padrão: exibe o slide1 ao carregar a página
    exibirSlide("slide1");

    // Adiciona ouvinte de evento para o botão 1
    document.getElementById("radio1").addEventListener("change", function () {
        exibirSlide("slide1");
    });
    // Adiciona ouvinte de evento para o botão 2
    document.getElementById("radio2").addEventListener("change", function () {
        exibirSlide("slide2");
    });
});


// Função para exibir o slide correspondente ao botão selecionado com o parâmetro ID
function exibirSlide(slideId) {

    // Obtém todos os elementos com a classe "about-conteudo" (todos os slides)
    var slides = document.querySelectorAll(".about-conteudo");
    // Oculta todos os slides, evitando sobreposição de slide
    slides.forEach(function (slide) {
        slide.style.display = "none";
    });

    // Exibe o slide desejado
    document.getElementById(slideId).style.display = "block";
}
