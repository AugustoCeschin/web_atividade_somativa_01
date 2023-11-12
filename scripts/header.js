// Função para carregar e inserir o conteúdo do header.html no corpo da página
function carregarHeader() {
    // Utiliza a função fetch para obter o conteúdo do arquivo "header.html"
    fetch("header.html")
        .then(retorno => retorno.text())
        .then(conteudoHeader => {
            // Cria um elemento <header> e atribui o conteúdo do arquivo carregado
            const headerElement = document.createElement("header");
            headerElement.innerHTML = conteudoHeader;
            // Adiciona o elemento <header> ao corpo da página
            document.body.appendChild(headerElement)
        })
        .catch(error => {
            // Trata erros exibindo uma mensagem no console
            console.error("Erro ao carregar o conteúdo do header: " + error);
        });
}

// Chama a função para carregar o conteúdo do header
carregarHeader();