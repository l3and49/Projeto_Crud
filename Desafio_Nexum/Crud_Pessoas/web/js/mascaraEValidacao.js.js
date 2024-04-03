document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.getElementById("txtCpf");
    const cnpjInput = document.getElementById("txtCnpj");
    function mascaraCPF() {
        let value = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (value.length > 11) {
            value = value.slice(0, 11); // Limita o comprimento do CPF a 11 caracteres
        }
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona um ponto após os 3 primeiros dígitos
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona outro ponto após os 6 primeiros dígitos
        value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2'); // Adiciona hífen, se necessário
        cpfInput.value = value;
    }

    cpfInput.addEventListener("input", mascaraCPF);
    mascaraCPF();

    function mascaraCNPJ(){
        let value = cnpjInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (value.length > 14) {
            value = value.slice(0, 14); // Limita o comprimento do CPF a 11 caracteres
        }
        value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona um ponto após os 3 primeiros dígitos
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona outro ponto após os 6 primeiros dígitos
        value = value.replace(/(\d{3})(\d)/, '$1/$2'); // Adiciona hífen, se necessário
        value = value.replace(/(\d{4})(\d)/, '$1-$2'); // Adiciona hífen, se necessário
        cnpjInput.value = value;
    }

    cnpjInput.addEventListener("input", mascaraCNPJ);
    mascaraCNPJ();

    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false; // CPF deve ter 11 dígitos e não pode ser formado por uma sequência de números iguais
        }

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        remainder = (sum * 10) % 11;

        if ((remainder === 10) || (remainder === 11)) {
            remainder = 0;
        }

        if (remainder !== parseInt(cpf.substring(9, 10))) {
            return false; // Primeiro dígito verificador inválido
        }

        sum = 0;

        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        remainder = (sum * 10) % 11;

        if ((remainder === 10) || (remainder === 11)) {
            remainder = 0;
        }

        if (remainder !== parseInt(cpf.substring(10, 11))) {
            return false; // Segundo dígito verificador inválido
        }

        return true; // CPF válido
    }

    cpfInput.addEventListener("input", function() {
        const cpfMensagem = document.getElementById("cpfMensagem");
    
        if (validarCPF(cpfInput.value)) {
            cpfMensagem.style.display = "none";
        } else {
            cpfMensagem.style.display = "block";
        }
    });

    function validarCNPJ(cnpj) {
        cnpj = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos
    
        if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
            return false; // CNPJ deve ter 14 dígitos e não pode ser formado por uma sequência de números iguais
        }
    
        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
    
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
    
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) {
            return false; // Primeiro dígito verificador inválido
        }
    
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
    
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
    
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) {
            return false; // Segundo dígito verificador inválido
        }
    
        return true; // CNPJ válido
    }

    cnpjInput.addEventListener("input", function() {
        const cnpjMensagem = document.getElementById("cnpjMensagem");
        if (validarCNPJ(cnpjInput.value)) {
            cnpjMensagem.style.display = "none";
        } else {
            cnpjMensagem.style.display = "block";
        }
    });

    const form = document.querySelector("form");
    var selectTipoPessoa = document.getElementById('selectTipoPessoa');
    form.addEventListener("submit", function(event) {
        if (!validarCPF(cpfInput.value) && selectTipoPessoa.value === 'PF') {
            event.preventDefault(); // Impede o envio do formulário se o CPF for inválido
            cpfMensagem.style.display = "block"; // Mostra a mensagem de CPF inválido
            cpfInput.focus();
        }
        else if (!validarCNPJ(cnpjInput.value) && selectTipoPessoa.value === 'PJ') {
            event.preventDefault(); // Impede o envio do formulário se o CNPJ for inválido
            cnpjMensagem.style.display = "block"; // Mostra a mensagem de CNPJ inválido
            cnpjInput.focus();
        }
    });
});