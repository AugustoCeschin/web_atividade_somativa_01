// Variáveis GLOBAIS para rastrear a validade do campos do formulário.
// Inicializadas com 'false' para indicar que as entradas são inválidas por padrão.
let isNomeValido = false;
let isEmailValido = false;
let isTelefoneValido = false;
let isDtNascValido = false;
let isTermosValido = false;

// FUNÇÃO - VALIDAR CAMPO NOME:
document.addEventListener('DOMContentLoaded', function() {
    const campoNome = document.getElementById('nome');
    
    function campoNomeValidacao(event) {
        const nomeValor = event.target.value;
        const nomeFiltroRegex = /[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g;
        event.target.value = nomeValor.replace(nomeFiltroRegex, '');
        if (nomeValor.length > 8 && nomeValor.length < 50) {
            isNomeValido = true;
        } else {
            isNomeValido = false;
        }
        return isNomeValido;
    }

    // Aplicar verificação enquanto ocorre o input
    campoNome.addEventListener('input', campoNomeValidacao);
    
    // Aplicar efeito de estilo após o campo perder o foco e exibir validação no console:
    campoNome.addEventListener('blur', function(event) {
        isNomeValido = campoNomeValidacao(event);
        if (isNomeValido) {
            event.target.style.color = 'green'; // Define a cor do texto como verde
            console.log('isNomeValido = ', isNomeValido);
        } else {
            event.target.style.color = 'red'; // Define a cor do texto como vermelho
        }
    });
});


// FUNÇÃO - VALIDAR CAMPO EMAIL:
document.addEventListener('DOMContentLoaded', function() {
    const campoEmail = document.getElementById('email');

    function campoEmailValidacao(event){
        const emailValor = event.target.value;
        const emailFiltroRegex = /[^a-z0-9._@-]/g;
        event.target.value = emailValor.replace(emailFiltroRegex, '');
        const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;

        if (emailRegex.test(emailValor)) {
            isEmailValido = true;
        } else {
            isEmailValido = false;
        }
        return isEmailValido;
    }
    // Aplicar máscara e verificação enquanto ocorre o input
    campoEmail.addEventListener('input', campoEmailValidacao);

    // Aplicar efeito de estilo após o campo perder o foco e exibir validação no console:
    campoEmail.addEventListener('blur', function (event) {
        isEmailValido = campoEmailValidacao(event);
        if (isEmailValido) {
            event.target.style.color = 'green'; // Define a cor do texto como verde
            console.log('isEmailValido = ', isEmailValido);
        } else {
            event.target.style.color = 'red'; // Define a cor do texto como vermelho
        }
    });
});


// FUNÇÃO - VALIDAR CAMPO TELEFONE:
document.addEventListener('DOMContentLoaded', function() {
    const campoTelefone = document.getElementById('telefone');

    function campoTelefoneValidacao(input) {
        //Formatar campo telefone:
        const telValor = input.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
        const ddd = parseInt(telValor.slice(0, 2));
        if (telValor.length >= 11) {
            input.value = `(${telValor.slice(0, 2)}) ${telValor.slice(2, 7)}-${telValor.slice(7, 11)}`;
        } else if (telValor.length > 6) {
            input.value = `(${telValor.slice(0, 2)}) ${telValor.slice(2, 6)}-${telValor.slice(6, 11)}`;
        } else if (telValor.length >= 2) {
            input.value = `(${telValor.slice(0, 2)}) ${telValor.slice(2)}`;
        } else {
            input.value = telValor;
        }

        //Validar campo telefone:
        if (ddd >= 11 && ddd <= 99 && ddd!= 55 && telValor.length >= 10 && telValor.length <= 11) {
            isTelefoneValido = true;
        } else {
            isTelefoneValido = false;
        }
        return isTelefoneValido;
    }

    // Aplicar máscara e verificação enquanto ocorre o input
    campoTelefone.addEventListener('input', function(event) {
        campoTelefoneValidacao(event.target);
    });

    // Aplicar efeito de estilo após o campo perder o foco e exibir validação no console:
    campoTelefone.addEventListener('blur', function(event){
        isTelefoneValido = campoTelefoneValidacao(event.target);
        if (isTelefoneValido){
            event.target.style.color = 'green'; // Define a cor do texto como verde
            console.log('isTelefoneValido = ', isTelefoneValido);
        } else {
            event.target.style.color = 'red'; // Define a cor do texto como vermelho
        }
    });
});


// FUNÇÃO - VALIDAR CAMPO DATA NASCIMENTO:
document.addEventListener('DOMContentLoaded', function(){
    const campoDtNascimento = document.getElementById('dt-nasc');

    function campoDtNascimentoValidacao(input) {
        //Formatar campo data nascimento:
        const dtNascValor = input.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
        const dia = parseInt(dtNascValor.slice(0, 2));
        const mes = parseInt(dtNascValor.slice(2, 4));
        const ano = parseInt(dtNascValor.slice(4, 8));
        const anoAtual = new Date().getFullYear();

        //Validar campo data nascimento:
        if (dtNascValor.length >= 8) {
            input.value = `${dtNascValor.slice(0, 2)}/${dtNascValor.slice(2, 4)}/${dtNascValor.slice(4, 8)}`;
        } else if (dtNascValor.length <= 2){
            input.value = dtNascValor;
        } else if (dtNascValor.length <= 4){
            input.value = `${dtNascValor.slice(0, 2)}/${dtNascValor.slice(2)}`;
        } else if (dtNascValor.length <= 8){
            input.value = `${dtNascValor.slice(0, 2)}/${dtNascValor.slice(2, 4)}/${dtNascValor.slice(4, 8)}`;
        }

        if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && anoAtual - ano >= 18 && anoAtual - ano < 150){
            isDtNascValido = true;
        } else {
            isDtNascValido = false;
        }
        return isDtNascValido;
    }

    // Aplicar máscara e verificação enquanto ocorre o input:
    campoDtNascimento.addEventListener('input', function(event){
        campoDtNascimentoValidacao(event.target);
    });

    // Aplicar efeito de estilo após o campo perder o foco e exibir validação no console:
    campoDtNascimento.addEventListener('blur', function(event){
        isDtNascValido = campoDtNascimentoValidacao(event.target);
        if (isDtNascValido){
            event.target.style.color = 'green'; // Define a cor do texto como verde
            console.log('isDtNascValido = ', isDtNascValido);
        } else {
            event.target.style.color = 'red'; // Define a cor do texto como vermelho
        }

    })
});


// FUNÇÃO - VALIDAR CHECKBOCK DE TERMOS E CONDIÇÕES:
document.addEventListener('DOMContentLoaded', function() {
    const termosCheckbox = document.getElementById('agree-term');

    function verificarTermos() {
        const termosCheckbox = document.getElementById('agree-term');
        isTermosValido = termosCheckbox.checked;
    }

    termosCheckbox.addEventListener('change', verificarTermos);
});

// FUNÇÃO - VERIFICAR SE TODOS OS CAMPOS SÃO VÁLIDOS:
document.addEventListener('DOMContentLoaded', function() {

    function verificarEnvio() {
        const botaoSubmit = document.getElementById('submit-botao'); // Substitua pelo ID correto
    
        if (isNomeValido && isEmailValido && isTelefoneValido && isDtNascValido && isTermosValido) {
            alert("Todos os campos são válidos. Você pode enviar o formulário.");
            botaoSubmit.disabled = false; // Desabilita o botão de envio
            document.getElementById('form').submit();
        } else {
            alert("Por favor, preencha todos os campos corretamente antes de enviar o formulário.");
            botaoSubmit.disabled = true; // Desabilita o botão de envio
        }
    }
    document.getElementById('submit-botao').addEventListener('click', verificarEnvio);
    
    const inputs = document.querySelectorAll('input'); // Selecione todos os campos de entrada
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const botaoSubmit = document.getElementById('submit-botao'); // Substitua pelo ID correto
            botaoSubmit.disabled = false; // Habilita o botão quando os campos são corrigidos
        });
    });
});