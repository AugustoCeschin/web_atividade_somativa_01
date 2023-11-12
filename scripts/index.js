// Função para atualizar a exibição da data e hora na página
function atualizarDataHora() {
    // Obtém a data atual
    var data = new Date();

    // Array com os nomes dos dias da semana
    var diasSemana = ["Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"];

    // Obtém o dia da semana atual - getDay() retorna um num(0, 6)
    var diaSemana = diasSemana[data.getDay()];

    // Formata a hora, minutos e segundos
    var dataHoraFormatada = `${formatarNumero(data.getHours())}:${formatarNumero(data.getMinutes())}:${formatarNumero(data.getSeconds())}`;
    
    // Atualiza o conteúdo HTML dos elementos com os IDs "diaSemana" e "dataHora"
    document.getElementById("diaSemana").innerHTML = diaSemana;
    document.getElementById("dataHora").innerHTML = dataHoraFormatada;
}

// Função para formatar números menores que 10 com um zero à frente
function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

// Chama a função de atualização inicial
atualizarDataHora();

// Configura um intervalo de 1 segundo para atualizar continuamente a data e hora
setInterval(atualizarDataHora, 1000);
