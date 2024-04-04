document.addEventListener('DOMContentLoaded', function() {
    var selectTipoPessoa = document.getElementById('selectTipoPessoa');
    var cpfDiv = document.getElementById('cpf');
    var cnpjDiv = document.getElementById('cnpj');
    var cpfSelect = document.getElementById('txtCpf');
    var cnpjSelect = document.getElementById('txtCnpj');

    selectTipoPessoa.addEventListener('change', function() {
        cpfSelect.value = null;
        cnpjSelect.value = null;
        if (selectTipoPessoa.value === 'Fisica') {
            cpfSelect.required = true;
            cnpjSelect.required = false;
            $('.cpf').css({
                'display': 'inline-block',
                'width': '20%' // Defina a largura desejada para a div CPF
            });
            cnpjDiv.style.display = 'none';
        } else if (selectTipoPessoa.value === 'Juridica') {
            cpfSelect.required = false;
            cnpjSelect.required = true;
            cpfDiv.style.display = 'none';
            $('.cnpj').css({
                'display': 'inline-block',
                'width': '20%' // Defina a largura desejada para a div CPF
            });
        }
    });
});
