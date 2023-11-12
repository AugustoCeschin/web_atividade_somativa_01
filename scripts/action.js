// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
  // Obtém uma referência ao elemento HTML com a classe "conteiner"
  const conteinerForm = document.querySelector(".conteiner");
  
  // Verifica se o elemento foi encontrado
  if (conteinerForm) {
      // Adiciona a classe "mostrar" ao elemento após um atraso de 200 milissegundos
      setTimeout(function() {
          conteinerForm.classList.add("mostrar");
      }, 200);
  }
});

// Função para obter parâmetros da URL
function getParameters() {
  // Inicializa arrays para armazenar parâmetros
  var params = new Array();
  var paramsRet = new Array();
  
  // Obtém a URL atual
  var url = window.location.href;

  // Procura a posição do caractere '?' na URL
  var paramsStart = url.indexOf("?");

  // Se '?' for encontrado na URL
  if (paramsStart !== -1) {
      // Extrai a parte da string após o '?' (parâmetros da URL)
      var paramString = url.substring(paramsStart + 1);

      // Decodifica os caracteres especiais na string de parâmetros
      paramString = decodeURIComponent(paramString);

      // Divide a string de parâmetros em um array usando '&' como delimitador
      var params = paramString.split("&");

      // Itera sobre os parâmetros
      for (var i = 0; i < params.length; i++) {
          // Divide cada parâmetro em chave e valor usando '=' como delimitador
          var pairArray = params[i].split("=");

          // Verifica se o parâmetro possui chave e valor
          if (pairArray.length === 2) {
              var key = pairArray[0];
              var value = pairArray[1];

              // Verifica se a chave não é "agree-term" e adiciona ao array de retorno
              if (key !== "agree-term") {
                  paramsRet[key] = value;
              }
          }
      }

      // Retorna o array de parâmetros filtrado
      return paramsRet;
  }

  // Retorna null se não houver parâmetros na URL
  return null;
}
